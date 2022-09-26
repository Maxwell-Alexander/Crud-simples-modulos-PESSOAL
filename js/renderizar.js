import { array_dados } from "./cadastro.js";


export function renderizar() {

    let tabela = document.getElementById('body_table');
    tabela.innerHTML = '';

    let indice = 0;

    while (indice < array_dados.length) {

        let linha = tabela.insertRow(indice);

        let celula_nome = linha.insertCell(0);
        let celula_id_pessoa = linha.insertCell(1);
        let celula_idade = linha.insertCell(2);
        let celula_acao = linha.insertCell(3);

        celula_nome.innerHTML = array_dados[indice].nome;
        celula_id_pessoa.innerHTML = array_dados[indice].id_pessoa;
        celula_idade.innerHTML = array_dados[indice].idade;
        celula_acao.innerHTML = `<i class="fa fa-pencil btn-warning" aria-hidden="true" id="editar-${indice}" data-acao="editar"></i>
        <i class="fa fa-trash btn-danger" aria-hidden="true"  id="excluir-${indice}" data-acao="excluir"></i>`;


        indice++;

    }

}


// ===================== Nessa forma abaixo também serve =========================
/*
    while (indice < array_dados.length) {

        let linha = document.createElement('tr');
        tabela.appendChild(linha);


        let celula_nome = document.createElement('td');
        let celula_idade = document.createElement('td');
        let celula_acao = document.createElement('td');

        linha.appendChild(celula_nome);
        linha.appendChild(celula_idade);
        linha.appendChild(celula_acao);


        celula_nome.innerHTML = array_dados[indice].nome;
        celula_idade.innerHTML = array_dados[indice].idade
        celula_acao.innerText = 'Teste';

        indice++;
    }
*/