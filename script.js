const oAutoDaCompadecida2 = 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/ZTc4NzFkOGYtNGJjYi00OGJkLWI1N2EtMjg0MzQxYWQ1YzI0.m3u8'
const enfeiticados = 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/MmNjMGRlYzUtODYzMC00ZmY0LWIwYzktMmIwZWI4Y2M1N2E4.m3u8'




function v001(){
  playFullScreen(oAutoDaCompadecida2)
}
//function v002() {
  //playFullScreen(enfeiticados)
//}




function playFullScreen(link) {
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
}