export function validar() {

    let nome = document.getElementById("nome").value;
    let tel = document.getElementById("idade").value;
    let campo_valido = '';

    for (let i = 1; i < 2; i++) {
        if (nome == "") {
            alert("Campo NOME invalido!!!");
            document.getElementById("nome").focus();
            break;
        }
        if (tel == "") {
            alert("Campo IDADE invalido!!!");
            document.getElementById("idade").focus();
        } else {
            campo_valido = true;
        }
    }

    return campo_valido;

}