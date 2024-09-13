// Recupera os dados do localStorage e preenche o formulario
// permite armazenar dados localmente no computador do usuário
//Esses dados ficam salvos apenas no navegador e podem ser acessados pelas páginas do mesmo domínio.
const dadosAluno = JSON.parse(localStorage.getItem("dadosAluno"));

if(dadosAluno){
    document.getElementById("matricula").value = dadosAluno.matricula;
    document.getElementById("nome").value = dadosAluno.nome;
    document.getElementById("endereco").value = dadosAluno.endereco;
    document.getElementById("disciplina").value = dadosAluno.disciplina;
    document.getElementById("nota").value = dadosAluno.nota;
    document.getElementById("aprovado").value = dadosAluno.aprovado;
}

//salvar os dados novamente quando o formulário é enviado
document.getElementById("editarFormulario").addEventListener("submit", function(event){
    event.preventDefault(); // Evita o envio do formulário

    // Captura os dados atualizados do formulário
    const matricula = document.getElementById("matricula").value;
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById('endereco').value;
    const disciplina = document.getElementById('disciplina').value;
    const nota = document.getElementById('nota').value;
    const aprovado = document.getElementById('aprovado').value;

     // Atualiza os dados no localStorage
     const dadosAtualizados = {
        matricula,
        nome,
        endereco,
        disciplina,
        nota,
        aprovado
    };


    localStorage.setItem('dadosAluno', JSON.stringify(dadosAtualizados));

    alert('Dados atualizados com sucesso!');


});

// o codigo está fazendo é o seguinte: 

// Recupera  a lista atual de alunos armazenada no localStorage (ou cria uma lista vazia, se não houver dados).

// Adiciona o novo aluno à lista.

// Salva a lista atualizada de volta no localStorage