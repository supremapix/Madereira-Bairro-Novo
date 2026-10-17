import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const base=path.resolve(import.meta.dirname,'../dist');
const redirects=JSON.parse(fs.readFileSync(new URL('./redirects.json',import.meta.url)));
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.xml':'application/xml','.webp':'image/webp','.svg':'image/svg+xml','.ico':'image/x-icon','.png':'image/png','.txt':'text/plain; charset=utf-8'};
http.createServer((req,res)=>{let url;try{url=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);res.end();return}
 const redirect=redirects.find(r=>r.source===url.replace(/\/$/,''));if(redirect){res.writeHead(301,{Location:redirect.destination});res.end();return}
 let file=path.resolve(base,'.'+url);if(file!==base&&!file.startsWith(base+path.sep)){res.writeHead(403);res.end();return}
 if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
 const found=fs.existsSync(file)&&fs.statSync(file).isFile();if(!found)file=path.join(base,'404.html');res.writeHead(found?200:404,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});fs.createReadStream(file).pipe(res);
}).listen(8097,'127.0.0.1',()=>console.log('Bairro Novo preview: http://127.0.0.1:8097'));
