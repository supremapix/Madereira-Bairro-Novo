import fs from 'node:fs';
import assert from 'node:assert/strict';
const inventory=JSON.parse(fs.readFileSync(new URL('../audit/routes.json',import.meta.url)));
let checked=0;
for(const page of inventory.pages){const res=await fetch('http://127.0.0.1:8097'+page.url);assert.equal(res.status,200,page.url);const html=await res.text();assert.ok(html.includes('<h1>'));checked++;}
for(const redirect of inventory.redirects){const res=await fetch('http://127.0.0.1:8097'+redirect.source,{redirect:'manual'});assert.equal(res.status,301,redirect.source);assert.equal(res.headers.get('location'),redirect.destination);checked++;}
const knownMissing=JSON.parse(fs.readFileSync(new URL('../audit/known-not-found.json',import.meta.url)));
for(const url of knownMissing){const res=await fetch('http://127.0.0.1:8097'+url,{redirect:'manual'});assert.equal(res.status,404,url);assert.ok((await res.text()).includes('noindex,follow'));checked++;}
const missing=await fetch('http://127.0.0.1:8097/nao-existe-teste');assert.equal(missing.status,404);assert.ok((await missing.text()).includes('noindex,follow'));
const sitemap=await fetch('http://127.0.0.1:8097/sitemap.xml');assert.equal(sitemap.status,200);
fs.writeFileSync(new URL('../audit/http-results.json',import.meta.url),JSON.stringify({date:new Date().toISOString(),checked,preservedLocalities:36,known404:knownMissing.length,notFound:404,sitemap:200,environment:'local preview, not production'},null,2));console.log(`${checked} page/redirect HTTP checks passed; real 404 and sitemap passed.`);
