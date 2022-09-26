import { array_dados, cadastrar } from './cadastro.js';
import { Pessoa } from './classes.js';
import { limpar } from './limpar_inputs.js';
import { renderizar } from './renderizar.js';
import { validar } from './validar_input.js';


export function alterar() {

    let id_bto = event.target.id;
    let id_number = parseInt(id_bto.slice(7));

    console.log(id_number);
    console.log(id_bto);


    let multi_bto = document.getElementById('multi_bto');
    multi_bto.innerText = "Salvar";
    multi_bto.removeEventListener('click', cadastrar);
    multi_bto.addEventListener('click', salvar_alteracao);


    document.getElementById('nome').value = array_dados[id_number].nome;
    document.getElementById('idade').value = array_dados[id_number].idade;
    let id_pessoa = array_dados[id_number].id_pessoa;


    function salvar_alteracao() {

        if (validar()) {

            let nome = document.getElementById('nome').value;
            let idade = document.getElementById('idade').value;

            let novos_dados = new Pessoa(nome, idade, id_pessoa);

            console.log(novos_dados);

            array_dados.splice(id_number, 1, novos_dados);

            localStorage.banco_dados = JSON.stringify(array_dados);

            multi_bto.removeEventListener('click', salvar_alteracao);
            multi_bto.addEventListener('click', cadastrar);

            limpar();
            renderizar();

        }

    }

}