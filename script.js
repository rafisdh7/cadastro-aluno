document.addEventListener('DOMContentLoaded', function() {
    const alunoForm = document.getElementById('alunoForm');
    const alunoList = document.getElementById('alunoList');
  
    alunoForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nome = document.getElementById('nome').value;
      const cpf = document.getElementById('cpf').value;
      const telefone = document.getElementById('telefone').value;
      const endereco = document.getElementById('endereco').value;
      const nascimento = document.getElementById('nascimento').value;
  
      const aluno = { nome, cpf, telefone, endereco, nascimento };
  
      cadastrarAluno(aluno);
      exibirAlunos();
      alunoForm.reset();
    });
  
    function cadastrarAluno(aluno) {
      let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
      alunos.push(aluno);
      localStorage.setItem('alunos', JSON.stringify(alunos));
    }
  
    function exibirAlunos() {
      alunoList.innerHTML = '';
      const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
  
      alunos.forEach(function(aluno) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${aluno.nome}</td>
          <td>${aluno.cpf}</td>
          <td>${aluno.telefone}</td>
          <td>${aluno.endereco}</td>
          <td>${aluno.nascimento}</td>
        `;
        alunoList.appendChild(row);
      });
    }
  
    exibirAlunos();
  });
  
  