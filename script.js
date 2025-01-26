function playFullScreen() {
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
}