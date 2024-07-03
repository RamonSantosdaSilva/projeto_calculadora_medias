const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./aprovado.png" alt="Festejando" />'
const imgRreprovado = '<img src="./reprovado.png" alt="Triste" />'
const atividades = []
const notas = []
const spamAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spamReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digiti a nota minima"))
let linhas = '';

form.addEventListener('submit', function(e) { 
  e.preventDefault(); 

  adicionaLinhas();
  atualizaTabela();
  mediaFinal(); 
  somaMediaFinais();

})

function adicionaLinhas() {

  const inputNomeAtividade = document.getElementById('nome-atividade');
  const inputNotasAtividade = document.getElementById('nota-atividade');

  if (atividades.includes(inputNomeAtividade.value)){ 
    alert(`A atividade: ${inputNomeAtividade.value} já foi digitidada`)
  } else { 
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotasAtividade.value));
  
    let linha ='<tr>';
    linha += `<td> ${inputNomeAtividade.value}`;
    linha += `<td> ${inputNotasAtividade.value}`;
    linha += `<td> ${inputNotasAtividade.value >= notaMinima ? imgAprovado : imgRreprovado }</td>`;
    linha +='</tr>';
    linhas += linha; 
  }

  inputNomeAtividade.value = '';
  inputNotasAtividade.value = '';

}

function atualizaTabela() { 

const corpoTabela = document.querySelector('tbody')
corpoTabela.innerHTML = linhas; 

}

function mediaFinal() { 

  const mediaFinal = somaMediaFinais(); 
  document.getElementById('media-final-valor').innerHTML = mediaFinal; 
  document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spamAprovado : spamReprovado; 
}

function somaMediaFinais() { 

  let somaNotas = 0

  for (let i = 0; i < notas.length; i++ ) { 
    somaNotas += notas[i];
  }

  return somaNotas / notas.length; 
}