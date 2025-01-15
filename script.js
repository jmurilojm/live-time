function playFullScreen() {
  const videoUrl = "https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/ZTc4NzFkOGYtNGJjYi00OGJkLWI1N2EtMjg0MzQxYWQ1YzI0.m3u8";

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
}