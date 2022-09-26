import { cadastrar } from './cadastro.js'
import { renderizar } from './renderizar.js';
import { deletar } from './deletar.js';
import { alterar } from './alterar.js';




document.addEventListener('DOMContentLoaded', renderizar);

let multi_bto = document.getElementById('multi_bto');
multi_bto.addEventListener('click', cadastrar);


let tabela = document.getElementById('body_table');
tabela.addEventListener('click', function () {

    let acao_bto = event.target.dataset.acao;

    if (acao_bto == 'excluir') {
        deletar();
    } else if (acao_bto == 'editar') {
        alterar();
    }
});


