/*function playFullScreen() {
  const videoUrl = link;
  const video = document.createElement('video');
  video.style.position = 'fixed';
  video.style.top = '0';
  video.style.left = '0';
  video.style.width = '100vw';
  video.style.height = '100vh';
  video.style.zIndex = '1000';
  video.controls = true;

  // Adiciona o vídeo ao body
  document.body.appendChild(video);

  // Verifica suporte nativo ao HLS
  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoUrl;
  } else if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoUrl);
    hls.attachMedia(video);
  } else {
    alert('Seu navegador não suporta reprodução de vídeos HLS.');
  }

  // Entra em tela cheia
  video.play().then(() => {
    video.requestFullscreen().catch(err => {
      console.error("Erro ao entrar em tela cheia:", err);
    });
  }).catch(err => {
    console.error("Erro ao reproduzir o vídeo:", err);
  });

  // Remove o vídeo ao terminar
  video.addEventListener('ended', () => {
    document.body.removeChild(video);
  });

  // Adiciona funcionalidade para o botão de voltar
  window.addEventListener('popstate', () => {
    if (document.body.contains(video)) {
      video.pause();
      document.body.removeChild(video);
    }
  });

  // Adiciona um estado ao histórico para capturar o evento de "voltar"
  history.pushState(null, '', window.location.href);
}

function playFullScreen2() {
  const videoUrl = link2;
  const video = document.createElement('video');
  video.style.position = 'fixed';
  video.style.top = '0';
  video.style.left = '0';
  video.style.width = '100vw';
  video.style.height = '100vh';
  video.style.zIndex = '1000';
  video.controls = true;

  // Adiciona o vídeo ao body
  document.body.appendChild(video);

  // Verifica suporte nativo ao HLS
  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoUrl;
  } else if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoUrl);
    hls.attachMedia(video);
  } else {
    alert('Seu navegador não suporta reprodução de vídeos HLS.');
  }

  // Entra em tela cheia
  video.play().then(() => {
    video.requestFullscreen().catch(err => {
      console.error("Erro ao entrar em tela cheia:", err);
    });
  }).catch(err => {
    console.error("Erro ao reproduzir o vídeo:", err);
  });

  // Remove o vídeo ao terminar
  video.addEventListener('ended', () => {
    document.body.removeChild(video);
  });

  // Adiciona funcionalidade para o botão de voltar
  window.addEventListener('popstate', () => {
    if (document.body.contains(video)) {
      video.pause();
      document.body.removeChild(video);
    }
  });

  // Adiciona um estado ao histórico para capturar o evento de "voltar"
  history.pushState(null, '', window.location.href);
}*/




const filmes = [
  {
    nome: 'Ainda Estou Aqui',
    funcao: 'aindaEstouAqui',
    ano: 2024,
    qualidade: 'Cam',
    genero: 'Drama',
    classificacao: '14',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/N2VjM2E0NjEtMWM4Ny00NjVjLTg2ZWEtNjQ5YmFiN2FiNzZk.m3u8'
  },
  {
    nome: 'Canina',
    funcao: 'canina',
    ano: 2024,
    qualidade: 'HD',
    genero: 'Drama',
    classificacao: '18',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/NDQwMGMwYmMtYzBhZC00NWI2LTk5ZDAtMWI2MWUwZjU5NDgw.m3u8'
  },
  {
    nome: 'A Vigia',
    funcao: 'aVigia',
    ano: 2023,
    qualidade: 'HD',
    genero: 'Terror',
    classificacao: 'L',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/NGMxZWQ5MGQtYjYxNi00OTQ1LTliNDItOTUzYjQyZTEwYWYz.m3u8'
  },
  {
    nome: 'O Assassino do Calendário',
    funcao: 'oAssassinoDoCalendario',
    ano: 2025,
    qualidade: 'HD',
    genero: 'Drama',
    classificacao: '16',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/YTk3MmJjMzQtYzE5Mi00MzQwLWJkNWEtOGY0MDgzNTdlZGFj.m3u8'
  }
];

const main = document.querySelector('main');

// Adiciona os botões para os filmes dinamicamente
filmes.forEach(filme => {
  main.innerHTML += `
    <button class="${filme.funcao}" onclick="${filme.funcao}()">
      <div>
        <span>${filme.ano}</span>
        <span>${filme.qualidade}</span>
        <span>${filme.genero}</span>
        <span>${filme.classificacao}</span>
      </div>
    </button>`;
});

// Função para reproduzir o vídeo
function reproduzirFilme(videoUrl) {
  const video = document.createElement('video');
  video.style.position = 'fixed';
  video.style.top = '0';
  video.style.left = '0';
  video.style.width = '100vw';
  video.style.height = '100vh';
  video.style.zIndex = '1000';
  video.controls = true;

  document.body.appendChild(video);

  // Verifica suporte nativo ao HLS
  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoUrl;
  } else if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoUrl);
    hls.attachMedia(video);
  } else {
    alert('Seu navegador não suporta reprodução de vídeos HLS.');
  }

  video.play().then(() => {
    video.requestFullscreen().catch(err => console.error("Erro ao entrar em tela cheia:", err));
  }).catch(err => console.error("Erro ao reproduzir o vídeo:", err));

  // Remove o vídeo ao terminar
  video.addEventListener('ended', () => {
    document.body.removeChild(video);
  });

  // Funcionalidade para botão de voltar
  window.addEventListener('popstate', () => {
    if (document.body.contains(video)) {
      video.pause();
      document.body.removeChild(video);
    }
  });

  // Adiciona estado ao histórico para capturar o evento de "voltar"
  history.pushState(null, '', window.location.href);
}

// Funções específicas para cada filme
function aindaEstouAqui() {
  reproduzirFilme(filmes[0].link)
}

function canina() {
  reproduzirFilme(filmes[1].link)
}

function aVigia() {
  reproduzirFilme(filmes[2].link);
}

function oAssassinoDoCalendario() {
  reproduzirFilme(filmes[3].link);
}