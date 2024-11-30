document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const servico = document.getElementById('servico').value;

    if (nome && data && servico) {
        // Corrige a data para o formato dd/mm/yyyy
        const dataFormatada = new Date(data).toLocaleDateString('pt-BR');

        // Salva os dados no localStorage
        localStorage.setItem('nome', nome);
        localStorage.setItem('data', dataFormatada);
        localStorage.setItem('servico', servico);

        // Redireciona para a página de confirmação
        window.location.href = 'confirmacao.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});