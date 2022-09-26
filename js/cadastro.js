import { Pessoa } from './classes.js';
import { limpar } from './limpar_inputs.js';
import { renderizar } from './renderizar.js';
import { gerador_id } from './id.js';
import { validar } from './validar_input.js';

export let array_dados = JSON.parse(localStorage.getItem('banco_dados')) || [];

export function cadastrar() {

    if(validar()){

        let nome = document.getElementById('nome').value;
        let idade = document.getElementById('idade').value;
        let id_pessoa = gerador_id();
        
    
        let dados_pessoa = new Pessoa(nome, idade, id_pessoa);
    
        array_dados.push(dados_pessoa);
    
        localStorage.banco_dados = JSON.stringify(array_dados);
    
        limpar();
        renderizar();

    }
   
}