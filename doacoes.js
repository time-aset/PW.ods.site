
function carregarTabela() {
const corpoTabela = document.querySelector('#tabelaDados tbody');
corpoTabela.innerHTML = ''; 
           
let listaDados = JSON.parse(localStorage.getItem('dadosFormulario')) || [];

listaDados.forEach(function(item) {
const linha = document.createElement('tr');

const celulaNome = document.createElement('td');
celulaNome.textContent = item.nome;

const celulaEmail = document.createElement('td');
celulaEmail.textContent = item.email;

const celulaValor = document.createElement('td');
celulaValor.textContent = item.valorDoar;

linha.appendChild(celulaNome);
linha.appendChild(celulaEmail);
linha.appendChild(celulaValor);
corpoTabela.appendChild(linha);

}
);

}

window.addEventListener('DOMContentLoaded', carregarTabela);


document.getElementById('btnLimpar').addEventListener('click', function() {
    if(confirm("Tem certeza que deseja apagar todo o histórico de dados?")) {
        localStorage.removeItem('dadosFormulario');
        carregarTabela(); 
    }
});

//---------scipt form-----------

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    
event.preventDefault();

            
const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const valorDoar = document.getElementById('valorDoar').value;

const novoDado = { nome: nome, email: email, valor: valorDoar };

let listaDados = JSON.parse(localStorage.getItem('dadosFormulario')) || [];

listaDados.push(novoDado);

localStorage.setItem('dadosFormulario', JSON.stringify(listaDados));

document.getElementById('meuFormulario').reset();

alert('Dados salvos');

}); 

//Tecnicamente era pra funcionar sem esse de baixo


// window.addEventListener('DOMContentLoaded', function() {
    
//     const formulario = document.getElementById('meuFormulario');

//     // Verifica se o formulário realmente existe nesta página
//     if (formulario != null) {
//         formulario.addEventListener('submit', function(event) {
//             event.preventDefault();

//             const nome = document.getElementById('nome').value;
//             const email = document.getElementById('email').value;
//             const novoDado = { nome: nome, email: email };

//             let listaDados = JSON.parse(localStorage.getItem('dadosFormulario')) || [];
//             listaDados.push(novoDado);
//             localStorage.setItem('dadosFormulario', JSON.stringify(listaDados));

//             formulario.reset();
//             alert('Dados salvos com sucesso!');
//         });
//     } else {
//         console.log("O formulário não foi encontrado nesta página.");
//     }
    
// });