document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    .source-catalog{grid-column:1/-1;padding:20px}
    .source-catalog-intro{font-size:12px;line-height:1.55;color:#66746b;margin:9px 0 15px}
    .source-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
    .source-card{border:1px solid #e2e8e0;border-radius:8px;padding:13px;min-height:130px}
    .source-card header{display:flex;justify-content:space-between;gap:8px;align-items:start}
    .source-card h3{font-size:12px;margin:0}
    .source-status{font:9px 'DM Mono';white-space:nowrap;color:#4c6352;background:#edf4e9;border-radius:4px;padding:4px 5px}
    .source-card p{font-size:11px;line-height:1.5;color:#66746b;margin:9px 0}
    .source-card a{font-size:10px;font-weight:700;color:#27613f;text-decoration:none}
    .source-card a:hover{text-decoration:underline}
    @media(max-width:800px){.source-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:520px){.source-grid{grid-template-columns:1fr}}
  `;
  document.head.append(style);

  const catalog = document.createElement('article');
  catalog.className = 'panel source-catalog';
  catalog.id = 'fontes-adicionais';
  catalog.innerHTML = `
    <p class="eyebrow">FONTES PÚBLICAS · BRASIL</p>
    <h2>Fontes adicionais de fogo e contexto</h2>
    <p class="source-catalog-intro">O clima do índice já é consultado ao vivo. As demais fontes estão catalogadas para ampliar o monitoramento; cada uma tem formato, frequência e requisitos próprios para integração.</p>
    <div class="source-grid">
      <section class="source-card">
        <header><h3>INPE · Programa Queimadas</h3><span class="source-status">PRIORIDADE ALTA</span></header>
        <p>Focos quase em tempo real, eventos de fogo, risco observado e previsão de 3 dias, meteorologia e área queimada.</p>
        <a href="https://data.inpe.br/queimadas/portal/pages/secao_downloads/dados-abertos/" target="_blank" rel="noopener noreferrer">Dados abertos e downloads ↗</a>
      </section>
      <section class="source-card">
        <header><h3>NASA · FIRMS</h3><span class="source-status">MAP_KEY GRATUITA</span></header>
        <p>Detecções térmicas VIIRS/MODIS, arquivos e serviços de mapa; a chave gratuita precisa ficar protegida no servidor.</p>
        <a href="https://firms.modaps.eosdis.nasa.gov/web-services/" target="_blank" rel="noopener noreferrer">API e serviços ↗</a>
      </section>
      <section class="source-card">
        <header><h3>Copernicus · GWIS</h3><span class="source-status">CAMADA GLOBAL</span></header>
        <p>Perigo de fogo, raios, focos ativos, áreas queimadas e emissões para comparação global e regional.</p>
        <a href="https://gwis.jrc.ec.europa.eu/apps/gwis_current_situation/index.html" target="_blank" rel="noopener noreferrer">Visor da situação atual ↗</a>
      </section>
      <section class="source-card">
        <header><h3>MapBiomas Fogo</h3><span class="source-status">CONTEXTO HISTÓRICO</span></header>
        <p>Área queimada, recorrência e relação com cobertura e uso da terra para contextualizar combustível e histórico.</p>
        <a href="https://plataforma.brasil.mapbiomas.org/fogo" target="_blank" rel="noopener noreferrer">Plataforma Fogo ↗</a>
      </section>
      <section class="source-card">
        <header><h3>Global Forest Watch</h3><span class="source-status">ALERTAS VIIRS</span></header>
        <p>Alertas de fogo para florestas com filtros e contexto territorial; pode complementar a leitura dos satélites.</p>
        <a href="https://www.globalforestwatch.org/map/?map=eyJjYW5Cb3VuZCI6dHJ1ZX0%3D&mapMenu=eyJkYXRhc2V0Q2F0ZWdvcnkiOiJmaXJlcyJ9" target="_blank" rel="noopener noreferrer">Mapa de incêndios ↗</a>
      </section>
      <section class="source-card">
        <header><h3>OpenAQ</h3><span class="source-status">IMPACTO DA FUMAÇA</span></header>
        <p>Medições públicas de PM2.5 e PM10 onde existem estações. Ajuda a acompanhar impacto no ar, não a confirmar fogo.</p>
        <a href="https://docs.openaq.org/about/about" target="_blank" rel="noopener noreferrer">Documentação da API ↗</a>
      </section>
    </div>
    <p class="source-catalog-intro">Status: somente Open‑Meteo fornece os dados climáticos usados pelo cálculo nesta página. As outras fontes ainda não alimentam o mapa nem o índice.</p>
  `;
  document.querySelector('.bottom')?.append(catalog);
  document.querySelector('.side-note')?.insertAdjacentHTML('beforebegin', '<a class="nav" href="#fontes-adicionais">⊹ &nbsp;Fontes de dados</a>');

  const notice = document.querySelector('.notice');
  if (notice) notice.textContent = 'O índice foi pensado para apoiar a tomada de decisão: reúne fatores de clima, bioma e terreno para ajudar a priorizar atenção e verificações. A equipe pode considerar o resultado junto com os demais dados e o conhecimento local.';
});

