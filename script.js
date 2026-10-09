window.addEventListener('DOMContentLoaded', () => {
    // Lógica para carregar os compromissos do banco de dados ou armazenamento local (Outra Branch)
})

// Sistema de Cadastro
const btnAdicionar = document.getElementById('adicionar');
const arrayCompromisso = [];


// Função para adicionar um novo compromisso
btnAdicionar.addEventListener('click', adicionarCompromisso);


function adicionarCompromisso() {
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const categoria = document.getElementById('categoria').value;
    const prioridade = document.getElementById('prioridade').value;

    // Validar campos obrigatórios
    if (!titulo || !descricao || !data || !hora ) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Lógica para adicionar o compromisso ao banco de dados ou armazenamento local (Outra Branch)

    // Criar um novo compromisso
    const compromisso = {
        titulo,
        descricao,
        data,
        hora,
        categoria,
        prioridade
    };

    // Adicionar o compromisso ao array
    arrayCompromisso.push(compromisso);

    // Limpar os campos de entrada
    document.getElementById('titulo').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('data').value = '';
    document.getElementById('hora').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('prioridade').value = '';


}