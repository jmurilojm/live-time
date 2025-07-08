function assistir(idIMDB) {
  // Abre uma nova aba com a página que contém o iframe, passando a URL do filme
  window.open('video.html?url=' + encodeURIComponent(`https://playerflixapi.com/filme/${idIMDB}`), '_self');
}

function criarLinks() {
  for (let i = 0; i < filmes.length; i++) {
    const link = document.createElement('button')
    link.style.backgroundImage = `url(${filmes[i].img})`
    link.setAttribute('onclick', `assistir('${filmes[i].id}')`)
    
    document.getElementsByTagName('body')[0].appendChild(link)
  }
}
