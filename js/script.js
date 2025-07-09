function assistir(idIMDb) {
  // Abre uma nova aba com a página que contém o iframe, passando a URL do filme
  window.open('paginas/video.html?url=' + encodeURIComponent(`https://playerflixapi.com/filme/${idIMDb}`), '_self');
}

function criarLinks() {
  for (let i = 0; i < filmes.length; i++) {
    const link = document.createElement('button')
    link.style.backgroundImage = `url(${filmes[i].img})`
    link.setAttribute('onclick', `assistir('${filmes[i].id}')`)
    
    document.getElementsByTagName('main')[0].appendChild(link)
  }
}

function pesquisar() {
  document.getElementsByTagName('main')[0].textContent = ''
  const texto = document.getElementById('inPesquisar').value.toLowerCase()
  
  for (let i = 0; i < filmes.length; i++) {
    if (filmes[i].nome.toLowerCase().includes(texto)) {
      const link = document.createElement('button')
      link.style.backgroundImage = `url(${filmes[i].img})`
      link.setAttribute('onclick', `assistir('${filmes[i].id}')`)
      
      document.getElementsByTagName('main')[0].appendChild(link)
    }
  }
}


// Pix e Modal
function copiarPix() {
  const codigo = document.getElementById('codigoPix').textContent;
  navigator.clipboard.writeText(codigo).then(() => {
    document.getElementById('modal-pix').style.display = 'none'
    alert('Chave PIX copiada!\n\nObrigado!');
  }).catch(() => {
    alert('Erro ao copiar o chave.');
  });
}

function pegarChavePix() {
  document.getElementById('modal-pix').style.display = 'flex'
}

function tirarFoco(){
  document.getElementById('inPesquisar').value = ''
  document.getElementsByTagName('main')[0].textContent = ''
  criarLinks()
}