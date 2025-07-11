// Obtém a URL do filme da query string
const params = new URLSearchParams(window.location.search);
const url = params.get('url');

// Define a URL do iframe
document.getElementById('meuIframe').src = url //|| 'https://playerflixapi.com/filme/tt1745960'; // URL padrão se não houver parâmetro
