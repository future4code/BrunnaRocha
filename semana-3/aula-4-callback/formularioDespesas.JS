function limpaFiltro(){
    document.getElementById("valor-da-despesa").value = "";
    document.getElementById("tipo-da-despesa").value = "";
    document.getElementById("descricao-da-despesa").value = "";
    document.getElementById("filtro-tipo").value = "";
    document.getElementById("filtro-valor-minimo").value = "";
    document.getElementById("filtro-valor-maximo").value = "";
}

class Despesa {
    constructor(casa, viagem, estudo, outros){
        this.valor = valor;
        this.tipo = tipo;
        this.descricao = descricao;
        
    }
}
// CRIANDO UM ARRAY PARA GUARDAR AS DIVERSAS DESPESAS //
const listaDeDespesas = [];
        // CRIANDO UMA FUNÇÃO QUE GUARDA OS VALORES DE INPUT //
        function cadastrarDespesa(){
            const valor = document.getElementById("valor-da-despesa").value;
            const tipo = document.getElementById("tipo-da-despesa").value;
            const descricao = document.getElementById("descricao-da-despesa").value;
                if(valor === " " || descricao === " "){
                alert("Oh, Oh! Insira todas as informações!");
                return;
            }

        let novaDespesa = new Despesa(valor, tipo, descricao)
            listaDeDespesas.push(novaDespesa);
                console.log("Todos as despesas ", listaDeDespesas);
        
            limpaFiltro();

}        