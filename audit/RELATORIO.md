# Madeireira Bairro Novo — candidata revisada v2

Data: 17/10/2026. Somente local. Nenhum push, deploy, DNS ou Search Console executado nesta revisão.
Este relatório substitui a recomendação de consolidação geográfica da candidata 98ecf8d. O relatório antigo fica arquivado como RELATORIO-98ecf8d-superado.md, sem validade para publicação.

## Resultado e correção desde 98ecf8d

- Preservadas individualmente as 36 páginas locais antes verificadas com conteúdo e status 200: 20 bairros e 16 cidades. Mantidas URLs e intenção de compra; textos reescritos com contexto específico e produtos relacionados, neutralizando garantias e especificações sem confirmação.
- Removidos todos os redirects genéricos para /regioes-atendidas. A página agora é um diretório navegável das 36 localidades e orienta consulta de entrega.
- Três aliases de CIC apontam especificamente para /bairro/cic. /bairro/jardim-gabineto aponta para /bairro/gabineto. Não foram criadas novas localidades.
- Das 62 URLs anteriormente 404, uma tem equivalência inequívoca (Jardim Gabineto); as outras 61 continuam 404/noindex, sem links internos. Inventário completo: audit/preservation.json e audit/known-not-found.json.
- Mantido /produto/madeira-de-pinus → /madeira-de-pinus. Cinco sitemaps legados → /sitemap.xml. Total: 10 redirects 301, sem cadeia.
- Endereço confirmado por Omar: Rua Laertes Luiz Foggiato, 1565, Curitiba/PR. Atualizado no conteúdo ativo, rodapé e HardwareStore. Removido módulo de endereço pendente e CEP antigo. Link Maps existente confere com o endereço confirmado; nenhum perfil comercial foi editado.
- Sitemap passa de 43 para 79 URLs canônicas: 9 principais + 10 produtos + 24 guias + 36 localidades. HTML completo, título/descrição próprios, canonical e schema verdadeiro. Sem Product/Offer com preço ou estoque inventados, sem avaliações fabricadas.
- Preservados visual editorial, contraste, menu móvel, hub de pinus, catálogo, guias, imagens responsivas e calculadora. Acrescentada lista de localidades em uma coluna no celular e duas no desktop.
- Novos testes garantem preservação geográfica, equivalência dos aliases e 404 real de cada URL sem conteúdo. Documentação e arquivos gerados atualizados.

## Fontes e limites factuais

Repositório: https://github.com/supremapix/Madereira-Bairro-Novo, base ec4e589cb87dd7eab227bd3bf39c8d575b10cf91.
Site auditado: https://www.madeireirabairronovo.com.br/; HTML original salvo em audit/live-home.html. Os 36 registros legados constam em audit/legacy-locations.json. A auditoria HTTP anterior percorreu 101 origens: 36 páginas, três aliases CIC e 62 URLs 404. O arquivo preservation.json registra a classificação e o tratamento agora implementado.
Catálogo efetivamente publicado: pinus como linha geral; tábuas, caibros, vigas, ripas, sarrafos, barrotes, escoras, madeirite, deck e pergolado. Não foram acrescentadas espécies ou linhas por suposição.
WhatsApp publicado e preservado: +55 41 99121-7114. Telefone: (41) 3013-4692. E-mail e horários preservados das fontes da empresa; não houve envio de mensagem nem teste de atendimento humano.
Mapa: https://maps.app.goo.gl/cCwvjeDfxpL8RkZMA. Endereço confirmado pelo usuário; sem novo CEP presumido.
As quatro imagens vêm do catálogo anterior e foram inspecionadas visualmente. Não há comprovação de que mostrem o estoque físico da loja; continuam identificadas como ilustrativas. Não foram geradas imagens nem alterado o produto representado.
Disponibilidade, preços, dimensões de estoque, tratamento, origem, certificações, prazo e abrangência de entrega continuam sujeitos à confirmação da loja. Não há dados de tráfego ou indexação nesta auditoria.

## Deploy efetivamente identificado — somente leitura

Projeto Vercel supremapixs-projects/madereira-bairro-novo, conectado ao repositório acima. Deployment 3mHWnKYibFoVgU4BXUgLVMdTHrZZ: Ready / Production Current, main ec4e589. Domínio www.madeireirabairronovo.com.br válido; domínio sem www redireciona 308 para www. Projeto .vercel.app também vinculado.
Painel verificado: https://vercel.com/supremapixs-projects/madereira-bairro-novo/3mHWnKYibFoVgU4BXUgLVMdTHrZZ
Configuração efetiva observada: Vite, raiz ./, saída dist, Node24.x, comandos padrão sem override, Git com deploy automático. Analytics e Speed Insights não habilitados. Nenhuma configuração foi alterada.
A candidata propõe vercel.json com framework null, npm ci, npm run build, dist, cleanUrls e redirects explícitos; esse arquivo ainda não foi enviado. Não usar KingHost para este pacote. Disco, plano, DNS, credenciais e permissões permanecem intocados.

## Validação da v2

npm run build, npm test e npm run lint: aprovados.
79 páginas; 79 títulos e descrições distintos; canonical, H1, JSON-LD, conteúdo HTML e 2.501 referências internas verificados. Calculadora testada com valor válido e quantidades inválidas.
HTTP local: 79 páginas 200 + 10 aliases 301 + 61 URLs 404 = 150 verificações, além de URL inexistente 404/noindex e sitemap 200. O teste foi repetido após o servidor terminar de iniciar (a primeira tentativa imediata encontrou conexão recusada).
Navegador Chrome: diretório → São José dos Pinhais; menu móvel → contato; página CIC no desktop. Sem overflow horizontal em 390px (página local), 320px (contato) e 1534px (CIC). Endereço e CTAs conferidos no DOM. As verificações anteriores de home, tablet, calculadora e catálogo permanecem registradas no relatório histórico; não representam nova medição de produção.
Peso sem compressão da home: 8.841 bytes HTML; CSS 7.225 bytes; JS 904 bytes. Conteúdo e navegação independem de JavaScript. Imagens WebP responsivas. Não há nova pontuação Lighthouse ou Core Web Vitals de produção: esses números são orçamento de recursos, não prova de desempenho real.
Evidências automatizadas: audit/check-results.json, audit/http-results.json, audit/routes.json, audit/preservation.json.

## Plano para aprovação posterior

Revisar esta v2 e os 10 redirects. Após autorização explícita, publicar exclusivamente no projeto Vercel identificado, preferencialmente validar primeiro deployment de preview com as mesmas regras e só depois promover produção. Evitar push em main antes da autorização, pois dispara deploy automático. Após a publicação aprovada, repetir HTTP/canonicals/sitemap no domínio e verificar aliases literais/escapados no provedor, HTTPS e domínio canônico. Reversão: deployment anterior e backup original ec4e589.
Limite: testes locais não confirmam interpretação de redirects no edge Vercel. Essa verificação fica para o preview autorizado. Publicação permanece pendente por instrução do usuário; nenhuma ação foi negada ou tem resultado incerto.
Search Console fica em tarefa separada; não há promessa de ranking ou indexação.

## URLs preservadas

- /bairro/sitio-cercado — Compra de madeira perto da loja
- /bairro/bairro-novo — Da lista da obra ao pedido
- /bairro/umbara — Área externa: detalhe a exposição
- /bairro/ganchinho — Caixaria por etapa de execução
- /bairro/tatuquara — Fundação e cobertura em listas separadas
- /bairro/cic — Organize compras para obra ou empresa
- /bairro/gabineto — Reforma com caixaria planejada
- /bairro/boqueirao — Diferencie peças de telhado e fôrmas
- /bairro/xaxim — Lista de madeira para a fundação
- /bairro/pinheirinho — Planeje a compra da cobertura
- /bairro/capao-raso — Reposição de peças em uma reforma
- /bairro/campo-de-santana — Separe o pedido por fase da obra
- /bairro/hauer — Madeira para oficina e reforma
- /bairro/uberaba — Cobertura com especificação completa
- /bairro/cajuru — Carpintaria e materiais de fôrma
- /bairro/portao — Fôrmas para concreto: identifique cada item
- /bairro/novo-mundo — Recebimento conforme o andamento da obra
- /bairro/agua-verde — Peças aparentes e acabamento
- /bairro/batel — Deck e ripado: duas listas diferentes
- /bairro/santa-felicidade — Pergolado para área externa
- /cidade/sao-jose-dos-pinhais — Pedido residencial ou empresarial
- /cidade/araucaria — Cotação de fôrmas com requisitos definidos
- /cidade/pinhais — Madeira para ambiente residencial ou comercial
- /cidade/colombo — Telhado e caixaria com destino completo
- /cidade/fazenda-rio-grande — Coordene fundação e telhado
- /cidade/campo-largo — Peças para chalé ou galpão
- /cidade/campo-magro — Deck com compra orientada pelo projeto
- /cidade/quatro-barras — Pergolado e cobertura: defina a função
- /cidade/campina-grande-do-sul — Planeje peças e acesso ao recebimento
- /cidade/almirante-tamandare — Materiais de fôrma e cobertura
- /cidade/mandirituba — Galpão com lista técnica de madeira
- /cidade/rio-branco-do-sul — Fôrmas e telhado em uma cotação clara
- /cidade/balsa-nova — Área externa de imóvel de campo
- /cidade/itaperucu — Caixaria para obra ou reforma
- /cidade/tijucas-do-sul — Chalé e deck com peças discriminadas
- /cidade/piraquara — Projeto residencial e área externa

## Redirects da v2

- /produto/madeira-de-pinus → /madeira-de-pinus (301)
- /bairro/jardim-gabineto → /bairro/gabineto (301)
- /bairro/cic-(cidade-industrial-de-curitiba) → /bairro/cic (301)
- /bairro/cic-%28cidade-industrial-de-curitiba%29 → /bairro/cic (301)
- /bairro/cic-cidade-industrial-de-curitiba → /bairro/cic (301)
- /sitemap-pages.xml → /sitemap.xml (301)
- /sitemap-products.xml → /sitemap.xml (301)
- /sitemap-blog.xml → /sitemap.xml (301)
- /sitemap-images.xml → /sitemap.xml (301)
- /sitemap-locations.xml → /sitemap.xml (301)
