import { renderizar } from "./renderizar.js";
import { array_dados } from "./cadastro.js";
import { limpar } from "./limpar_inputs.js";


export function deletar() {

    let id_bto = event.target.id;
    let id_number = parseInt(id_bto.slice(8));


    array_dados.splice(id_number, 1);
    localStorage.banco_dados = JSON.stringify(array_dados);


    let linha_tabela = document.getElementById(id_bto).parentNode.parentNode;
    linha_tabela.remove();


    renderizar();

}
