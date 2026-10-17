import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {products,guides} from './catalog.mjs';
const root=path.resolve(import.meta.dirname,'..'),dist=path.join(root,'dist');
const inventory=JSON.parse(fs.readFileSync(path.join(root,'audit/routes.json')));
const paths=new Set(inventory.pages.map(p=>p.url));
const redirects=new Map(inventory.redirects.map(r=>[r.source,r.destination]));
const titles=new Set(),descriptions=new Set();let links=0;
for(const p of inventory.pages){
 const html=fs.readFileSync(path.join(dist,p.url==='/'?'index.html':p.url.slice(1)+'/index.html'),'utf8');
 assert.equal((html.match(/<h1[> ]/g)||[]).length,1,p.url+' h1');
 assert.equal((html.match(/rel="canonical"/g)||[]).length,1,p.url+' canonical');
 assert.ok(html.includes(`href="https://www.madeireirabairronovo.com.br${p.url}"`));
 const title=html.match(/<title>(.*?)<\/title>/s)[1],description=html.match(/name="description" content="(.*?)"/s)[1];
 assert.ok(!titles.has(title),p.url+' duplicate title');titles.add(title);
 assert.ok(!descriptions.has(description),p.url+' duplicate description');descriptions.add(description);
 assert.ok(!html.includes('�'),p.url+' encoding');
 assert.ok(!/AggregateRating|InStock|priceValidUntil|100\.00|imune|melhor preço|certificado pelo IBAMA/i.test(html),p.url+' unsupported claim');
 for(const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs))JSON.parse(match[1]);
 for(const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)){
  const url=match[1];assert.ok(paths.has(url)||fs.existsSync(path.join(dist,url.slice(1))),p.url+' broken '+url);links++;
 }
 for(const match of html.matchAll(/href="https:\/\/wa\.me\/(\d+)/g))assert.equal(match[1],'5541991217114');
}
for(const [from,to] of redirects){assert.ok(paths.has(to)||to==='/sitemap.xml',from+' redirect target');assert.ok(!redirects.has(to),'redirect chain');}
const live=JSON.parse(fs.readFileSync(path.join(root,'audit/live-location-paths.json')));
const missing=JSON.parse(fs.readFileSync(path.join(root,'audit/known-not-found.json')));
const legacy=JSON.parse(fs.readFileSync(path.join(root,'audit/legacy-locations.json')));
assert.equal(legacy.length,36); assert.equal(missing.length,61);
for(const l of legacy){const url='/'+l.type+'/'+l.slug;assert.ok(paths.has(url),url+' lost preserved page');assert.ok(!redirects.has(url),url+' unexpectedly redirected');}
for(const url of missing){assert.ok(!paths.has(url)&&!redirects.has(url),url+' must remain 404');}
for(const url of live)assert.ok(paths.has(url)||redirects.has(url)||missing.includes(url),url+' unclassified');
for(const [from,to] of redirects)if(/^\/(bairro|cidade)\//.test(from))assert.equal(to,from.includes('cic')?'/bairro/cic':'/bairro/gabineto',from+' equivalent locality');
assert.equal(redirects.size,10); assert.equal(paths.size,79);
for(const file of fs.readdirSync(path.join(root,'public')).filter(n=>/^sitemap.*\.xml$/.test(n))){
 const xml=fs.readFileSync(path.join(root,'public',file),'utf8');
 for(const m of xml.matchAll(/<loc>https:\/\/www\.madeireirabairronovo\.com\.br([^<]*)<\/loc>/g)){const url=m[1]||'/';assert.ok(paths.has(url)||redirects.has(url)||url==='/sitemap.xml','Legacy URL lost '+url)}
}
const sitemap=fs.readFileSync(path.join(dist,'sitemap.xml'),'utf8');assert.equal((sitemap.match(/<url>/g)||[]).length,paths.size);
assert.equal((sitemap.match(/<loc>[^<]*\/bairro\//g)||[]).length,20);assert.equal((sitemap.match(/<loc>[^<]*\/cidade\//g)||[]).length,16);
assert.equal(products.length,10);assert.equal(guides.length,24);
// Execute the actual progressive-enhancement handler against form values.
let handler,values={thickness:'2',width:'10',length:'3',quantity:'10'},result={textContent:''};
vm.runInNewContext(fs.readFileSync(path.join(root,'site/client.js'),'utf8'),{document:{querySelector:s=>s==='#volume'?{addEventListener:(_,h)=>handler=h}:result},FormData:class{get(k){return values[k]}},navigator:{}});
handler({preventDefault(){}});assert.match(result.textContent,/0,06 m³/);
values.quantity='1.5';handler({preventDefault(){}});assert.match(result.textContent,/inteira/);
values.quantity='0';handler({preventDefault(){}});assert.match(result.textContent,/positivas/);
const report={date:new Date().toISOString(),pages:paths.size,redirects:redirects.size,internalReferencesChecked:links,liveLocationUrlsCovered:live.length,products:products.length,guides:guides.length,uniqueTitles:titles.size,uniqueDescriptions:descriptions.size,calculator:'valid decimal and invalid quantity passed',htmlBytes:fs.statSync(path.join(dist,'index.html')).size,cssBytes:fs.statSync(path.join(dist,'style.css')).size,jsBytes:fs.statSync(path.join(dist,'client.js')).size};
fs.writeFileSync(path.join(root,'audit/check-results.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
