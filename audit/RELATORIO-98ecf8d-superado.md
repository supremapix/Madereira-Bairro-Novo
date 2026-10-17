# Madeireira Bairro Novo — auditoria e versão para revisão

Data: 17/10/2026. Projeto independente. **Não publicado. Search Console não operado.**

## Fontes e auditoria

- Repositório: https://github.com/supremapix/Madereira-Bairro-Novo ; base `ec4e589`. Clone isolado em `C:\Users\user\Documents\Codex\2026-10-17\task-7\madeireira`. Nenhum AGENTS.md encontrado no repositório.
- Site auditado no navegador: https://www.madeireirabairronovo.com.br/ . HTML inicial e cabeçalhos em `audit/live-home.html` e `audit/live-headers.txt`.
- O domínio sem www responde 308 para www. Resposta pública contém `Server: Vercel`, `X-Vercel-Cache: HIT`. O repositório também aponta para `madereira-bairro-novo.vercel.app`. Não foi auditado painel Vercel nem confirmado vínculo de deployment/commit. A produção apresenta mais localidades que a base Git; não presumir que push de main corresponde à versão pública atual.
- Catálogo observado: entrada geral de pinus + tábuas, caibros, vigas, ripas, sarrafos, barrotes, escoras, madeirite, deck e pergolado. A frase “19 produtos” não correspondia às 11 entradas do código. Não há base para adicionar eucalipto, cumaru, itaúba ou outras espécies como ofertas.
- Contatos publicados, iguais no código e no site: WhatsApp `5541991217114`, fixo `554130134692`, `bairronovomadeiras@gmail.com`. Os links da nova versão usam esses números. Não foi enviada mensagem, feita chamada ou comprovada titularidade da conta WhatsApp por atendimento humano.
- A versão anterior tinha preço artificial de 100.00 e `InStock` no schema, depoimentos sem fonte, promessas de certificação, resistência, durabilidade, entrega e disponibilidade sem documentação fornecida. O texto React também divergia do HTML inicial.
- Foram inspecionadas visualmente as quatro imagens reutilizadas: `pinus_timber_stack.webp`, `pine_boards_formwork_yard.webp`, `pine_beams_lumberyard.webp` e `pine_slat_bundle.webp`, provenientes de `img.supremasite.com.br/madeiras/`. Não há comprovação de serem fotos reais da loja ou do estoque. São identificadas como ilustrativas. Nenhuma imagem de produto foi gerada ou alterada; apenas redimensionamento e compressão para entrega responsiva. Fotos reais da fachada, equipe e pátio continuam desejáveis e dependem de material confirmado.

## Pendência factual: endereço

O site e o código divulgam Rua Coronel Joaquim Antônio de Azevedo, 1459. Entretanto o link de rotas publicado `https://maps.app.goo.gl/cCwvjeDfxpL8RkZMA` foi aberto e resolveu para **Madereira Bairro Novo, Rua Laertes Luiz Foggiato, 1565**, Sítio Cercado, Curitiba.

Foi solicitada confirmação do endereço atual. Até a resposta, a versão candidata mostra apenas Sítio Cercado/Curitiba e um CTA para confirmar o ponto de retirada. O endereço de rua e o CEP foram retirados do schema. Isso evita escolher arbitrariamente entre fontes conflitantes. A camada temporária está em `site/address-pending.mjs`; deve ser substituída pelo dado confirmado antes da publicação.

## Implementação

- 43 páginas HTML indexáveis: 9 páginas principais, 10 produtos específicos e 24 guias existentes reescritos. Prioridade ao hub `/madeira-de-pinus`, com conexão a produtos, preço, medidas, tratamento e entrega.
- Páginas de aplicação de telhado, caixaria, escoramento, madeirite, deck, pergolado e ripado conectam produtos pertinentes. Nada foi criado por combinação em massa de produto/localidade.
- `/precos` passou a orientar cotação sem preço inventado. `/medidas` contém calculadora de volume geométrico, com exemplo explicitamente hipotético e sem dimensionar estruturas.
- Conteúdo próprio por tipo de peça e intenção de compra, sem seções, cargas, vãos, espaçamentos ou equivalências técnicas presumidas. Tratamento, origem, medidas, estoque e entrega dependem de confirmação comercial/documental.
- HTML estático completo, sem substituição por React. CSS local, fontes do sistema, JS de melhoria progressiva só para calculadora e atualização do antigo service worker. Navegação e conteúdo funcionam sem JS.
- Marca/nome e favicon existentes preservados; visual claro em tons de madeira, contraste forte, links claros, menu móvel nativo e footer reduzido. Não há faixa animada de promoções, falsa urgência, ranking, avaliação ou depoimento sem fonte.
- Um canonical, título e descrição próprios por página. Schema HardwareStore e BreadcrumbList sem preços, ratings, estoque ou certificações presumidos. Sitemap único com 43 URLs canônicas, sem datas artificiais ou redirects.
- O build copia apenas ativos permitidos: não leva para produção os sitemaps, textos e componentes legados. O React antigo permanece como referência, explicitamente fora do build ativo.

## Plano de URLs a aprovar

`site/redirects.json` contém 107 regras literais; `vercel.json` contém sua representação para Vercel. `audit/routes.json` reúne páginas e redirects.

1. Preservar URLs principais, dos 10 produtos específicos e dos 24 artigos.
2. Consolidar a entrada duplicada `/produto/madeira-de-pinus` em `/madeira-de-pinus` com 301.
3. Consolidar páginas locais antigas de bairro/cidade no hub de logística `/regioes-atendidas` com 301. Foram inventariados 97 links de localidade na página pública, além de URLs do sitemap anterior e aliases. Não foi utilizado wildcard que redirecione qualquer URL desconhecida.
4. Redirecionar os cinco sitemaps auxiliares antigos para `/sitemap.xml`.
5. URLs desconhecidas continuam 404, com noindex. Configuração do host deve acompanhar os arquivos: um ZIP de HTML sozinho não implementa redirects HTTP.

A consolidação geográfica é mudança editorial relevante. O destino cobre consulta de atendimento e entrega, sem prometer servir automaticamente cada região. Avaliar esse mapa antes de autorizar publicação. Não há garantia de manutenção de posições ou indexação.

## Validação

- `npm run build`: aprovado, 43 páginas.
- `npm run lint`: aprovado para código ativo.
- `npm test`: aprovado; 1.313 referências internas, 43 títulos/descrições únicos, h1 único, canonical, JSON-LD parseável, cobertura dos sitemaps antigos e das 97 URLs locais públicas, ausência de ciclos/cadeias e alegações bloqueadas.
- Calculadora testada com entrada decimal, quantidade inválida e exemplo 2 cm × 10 cm × 3 m × 10 = 0,06 m³. Resultado também confirmado visualmente no Chrome móvel.
- Teste HTTP local: 150 respostas (43 páginas 200 + 107 redirects 301), sitemap 200 e URL desconhecida 404. Resultados em `audit/http-results.json`. Não é validação de redirects em produção Vercel.
- Inspeção visual no Chrome: desktop 1534px, celular 390px, produto em 320px; sem rolagem horizontal. Menu móvel aberto/fechado e navegação para medidas conferidos. Não foi executado Lighthouse ou teste de campo de Core Web Vitals.
- Contraste calculado: texto principal 13,78:1; secundário 6,65:1; botão verde 8,49:1; destaque marrom 6,29:1. Foco visível, skip link, controles grandes e movimento reduzido respeitado.
- Home: 8.876 bytes de HTML; CSS 7.075 bytes; JS 904 bytes. Imagem principal responsiva: 27.290 bytes (480px), 74.896 bytes (960px). São medidas de arquivo, não pontuação ou promessa de velocidade real.
- Instalação npm: 223 pacotes auditados, zero vulnerabilidades reportadas naquela execução. Dependências antigas permanecem instaláveis por compatibilidade; não fazem parte do payload do navegador.

## Publicação e reversão

1. Confirmar endereço atual e, idealmente, fornecer fotos reais aprovadas.
2. Revisar a prévia local, conteúdo e mapa de URLs com Omar.
3. Identificar no painel Vercel o projeto que serve o domínio e conferir a configuração efetiva, inclusive integração Git. Não alterar DNS, domínio, credenciais ou permissões.
4. Após autorização suficiente, criar preview Vercel e testar configuração real de redirects, canonical, sitemap, 404 e versão móvel antes de promover para produção.
5. Guardar o identificador do deployment anterior para rollback; o backup Git é complementar, não substitui backup de ambiente/deployment.
6. Search Console e medição de indexação ficam em tarefa separada, depois da publicação. Não foram operados aqui.

Não houve alteração da KingHost, disco, DNS, credenciais, permissões, produção ou projeto Suprema. Nenhuma ação permanece com resultado externo incerto. Pendências: endereço e aprovação/publicação. Não houve rejeição automática de aprovação; operações locais necessárias foram autorizadas pelo mecanismo disponível.

Documentação consultada para a configuração: https://vercel.com/docs/project-configuration/vercel-json e https://vercel.com/docs/routing/redirects/configuration-redirects . A configuração ainda deve ser validada em preview do host real antes de promover.
