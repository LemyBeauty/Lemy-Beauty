// Obtém os dados armazenados no localStorage
const nome = localStorage.getItem('nome');
const data = localStorage.getItem('data');
const servico = localStorage.getItem('servico');

// Preenche as informações na página
document.getElementById('nome').textContent = nome;
document.getElementById('data').textContent = data;
document.getElementById('servico').textContent = servico;