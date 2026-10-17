# Madeireira Bairro Novo

Versão editorial estática para revisão. Produção ainda não alterada.

## Desenvolvimento

Node 22 ou superior. `npm ci`, `npm run build`, `npm test`, `npm run lint`.
`npm start` serve a prévia em http://127.0.0.1:8097, com os redirects e 404 reais.

O código ativo está em `site/`: `catalog.mjs` contém produtos e guias; `build.mjs` gera páginas, sitemap e configuração Vercel; `style.css` define o visual; `client.js` adiciona apenas a calculadora. O conteúdo completo funciona sem JavaScript. `public/images` contém cópias das imagens já existentes, sem alteração do produto; versões responsivas são geradas com Sharp.

Os arquivos React anteriores em `src/`, `scripts/prerender.ts`, `server.ts` e o antigo `index.html` são referência legada, NÃO entram no build publicado. Seus textos comerciais antigos não são fonte de confirmação de estoque, preço, tratamento ou desempenho. O build usa uma lista explícita de arquivos públicos, para não copiar sitemaps, textos e scripts antigos por acidente.

## Publicação pendente

Revisar `audit/RELATORIO.md` e `site/redirects.json` antes de publicar. A configuração `vercel.json` deve acompanhar `dist/`: os arquivos estáticos sozinhos não implementam redirects HTTP. Não enviar para KingHost. Não mudar DNS, plano, disco, credenciais ou permissões.

Projeto Vercel identificado em leitura: supremapixs-projects/madereira-bairro-novo, main ec4e589. A v2 preserva 36 páginas locais e propõe apenas 10 redirects equivalentes. Publicação exige aprovação desta candidata. Não usar push em main antes da autorização: o Git dispara deploy automático.

O sitemap gerado tem apenas URLs canônicas com conteúdo. Não há operação de Search Console neste trabalho e não há garantia de indexação.

A v2 acrescenta site/locations.mjs e audit/preservation.json. São 79 URLs indexáveis; as 61 URLs antigas sem conteúdo continuam 404. O relatório histórico de 98ecf8d está superado. Endereço confirmado: Rua Laertes Luiz Foggiato, 1565, Curitiba/PR.
