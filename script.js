const oAutoDaCompadecida2 = 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/ZTc4NzFkOGYtNGJjYi00OGJkLWI1N2EtMjg0MzQxYWQ1YzI0.m3u8'
const enfeiticados = 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/MmNjMGRlYzUtODYzMC00ZmY0LWIwYzktMmIwZWI4Y2M1N2E4.m3u8'




function v001(){
  playFullScreen(oAutoDaCompadecida2)
}
function v002() {
  playFullScreen(enfeiticados)
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
}


/*function playFullScreen(link) {
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