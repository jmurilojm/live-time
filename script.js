const link = 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/N2VjM2E0NjEtMWM4Ny00NjVjLTg2ZWEtNjQ5YmFiN2FiNzZk.m3u8';

const link2 = 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/NDQwMGMwYmMtYzBhZC00NWI2LTk5ZDAtMWI2MWUwZjU5NDgw.m3u8';

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
}







/*const oAutoDaCompadecida2 = 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/ZTc4NzFkOGYtNGJjYi00OGJkLWI1N2EtMjg0MzQxYWQ1YzI0.m3u8'*/





/*function v001(){
  playFullScreen(oAutoDaCompadecida2)
}
function v002() {
  playFullScreen(aindaEstouAqui)
}


function playFullScreen(link) {
  // Abre uma nova janela com o vídeo
  const newWindow = window.open('', '_blank');

  if (newWindow) {
    // Adiciona conteúdo HTML à nova janela
    newWindow.document.write(`
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Player de Vídeo</title>
        <style>
          body {
            margin: 0;
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          video {
            width: 100%;
            height: auto;
          }
        </style>
      </head>
      <body>
        <video src="${link}" controls autoplay></video>
      </body>
      </html>
    `);
  } else {
    console.error('Não foi possível abrir uma nova janela. Verifique se o bloqueador de pop-ups está ativo.');
  }
}*/

/*const link = 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/N2VjM2E0NjEtMWM4Ny00NjVjLTg2ZWEtNjQ5YmFiN2FiNzZk.m3u8'

function playFullScreen() {
  const videoUrl = link
  // Cria o elemento de vídeo
  const video = document.createElement('video');
  video.src = videoUrl;
  video.style.position = 'fixed';
  video.style.top = '0';
  video.style.left = '0';
  video.style.width = '100vw';
  video.style.height = '100vh';
  video.style.zIndex = '1000';
  video.autoplay = true;
  video.controls = true;

  // Adiciona o vídeo ao body
  document.body.appendChild(video);

  // Entra em tela cheia
  video.requestFullscreen().catch(err => {
    console.error("Erro ao entrar em tela cheia:", err);
  });

  // Remove o vídeo ao terminar
  video.addEventListener('ended', () => {
    document.body.removeChild(video);
  });
}*/