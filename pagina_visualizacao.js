// Recupera os dados do localStorage e exibe na página
const dadosAluno = JSON.parse(localStorage.getItem("dadosAluno"));

if(dadosAluno){
    document.getElementById("matricula").textContent = dadosAluno.matricula;
    document.getElementById("nome").textContent = dadosAluno.nome;
    document.getElementById("endereco").textContent = dadosAluno.endereco;
    document.getElementById("disciplina").textContent = dadosAluno.disciplina;
    document.getElementById("nota").textContent = dadosAluno.nota;
    document.getElementById("aprovado").textContent = dadosAluno.aprovado;

} else{
    document.getElementById("dadosAluno").innerHTML = "<p>Nenhum dado encontrado, por favor, preenche o formulario</p>"
}
// gerar os dados em PDF
function gerarPDF() {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("Relatório do Aluno", 10, 10);
    doc.text(`Nome: ${document.getElementById('nome').textContent}`, 10, 20);
    doc.text(`Matrícula: ${document.getElementById('matricula').textContent}`, 10, 30);
    doc.text(`endereço: ${document.getElementById("endereco").textContent}`, 10, 40);
    doc.text(`Disciplina: ${document.getElementById("disciplina").textContent}`, 10, 50);
    doc.text(`Nota: ${document.getElementById("nota").textContent}`, 10, 60);
    doc.text(`Aprovado: ${document.getElementById("aprovado").textContent}`, 10, 70)
    doc.save('relatorio_aluno.pdf');
}