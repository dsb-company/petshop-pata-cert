# Pet Shop Pata Certa

Landing page institucional em HTML5, CSS3 e JavaScript puro, sem frameworks, instalação ou compilação.

## Abrir no computador

1. Extraia o ZIP inteiro. Não abra o HTML de dentro do ZIP.
2. No VS Code, escolha **Arquivo > Abrir Pasta** e selecione `pata-certa`.
3. Abra `index.html` no navegador. Também funciona com a extensão Live Server do VS Code.

As imagens, estilos e scripts são locais. As fontes Manrope e Inter são carregadas do Google Fonts quando há internet; sem conexão, o site usa Arial/sans-serif. WhatsApp e Instagram exigem internet. Não há banco de dados ou painel administrativo.

## Organização

- `index.html`: textos, seções, navegação, SEO e pontos de integração de mapa/avaliações.
- `css/style.css`: identidade visual, componentes, animações e responsividade.
- `js/script.js`: menu, WhatsApp, seção ativa, animações e ano do rodapé.
- `assets/images/`: todas as oito imagens fornecidas, com nomes sem espaços.

`fotos-juntas.jpeg` foi incluída como material disponível. As fotos individuais são usadas no layout para evitar repetir a composição inteira e preservar a leitura das imagens.

## Alterações comuns

- **Textos:** edite o conteúdo correspondente em `index.html`.
- **Cores:** altere as variáveis no início de `css/style.css`.
- **WhatsApp:** altere `phone` e `message` no início de `js/script.js`. Ao mudar o número, atualize também os links `https://wa.me/5531999652698` no HTML, usados como alternativa sem JavaScript, e os números visíveis de contato.
- **Imagens:** substitua os arquivos na pasta de imagens, preservando os nomes, ou ajuste `src`, `alt`, `width` e `height` no HTML.
- **Avaliações:** os três cards são placeholders visíveis e não representam avaliações reais. Substitua textos, identificação e estrelas apenas por depoimentos reais autorizados. Há um comentário no HTML indicando a seção.
- **Google Maps:** procure `MAPA:` no HTML. Insira o iframe apenas depois de confirmar a localização. Nenhuma coordenada foi inventada.

## Antes de publicar

Confirme com a empresa os dados fornecidos no briefing: endereço, telefone, Instagram, e-mail, horários e atendimento veterinário 24h. Os dias de funcionamento do pet shop não foram informados e não foram presumidos. Insira depoimentos reais e a localização correta quando disponíveis.

Após escolher o domínio, adicione um link canonical e `og:url` com a URL definitiva no `<head>`. O Open Graph básico já contém título, descrição, idioma, tipo e nome do site. Nenhum domínio ou perfil de avaliação foi inventado.

## Publicar

O diretório a publicar é o que contém `index.html`, `css`, `js` e `assets`. Não há comando de build. Envie a pasta completa para uma hospedagem de arquivos estáticos, como Netlify, GitHub Pages ou o diretório público da sua hospedagem. Os caminhos são relativos e funcionam também em subpastas.

## Recursos

Menu móvel com teclado e Escape; navegação por âncoras; WhatsApp com mensagem codificada; botão flutuante; animações com IntersectionObserver e respeito a `prefers-reduced-motion`; conteúdo disponível sem JavaScript; foco visível; imagens com descrição; lazy loading abaixo do hero; favicon próprio; layout adaptável de celular a desktop.

O site não envia mensagens automaticamente, não coleta dados em formulários e não usa cookies ou rastreadores próprios.
