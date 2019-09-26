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

const listaDeDespesas = [];
        const valor = document.getElementById("valor-da-despesa").value;
        const tipo = document.getElementById("tipo-da-despesa").value;
        const descricao = document.getElementById("descricao-da-despesa").value;
        
        function cadastrarDespesa(){
            if(valor === " " || descricao === " "){
                alert("Oh, Oh! Insira todas as informações!");
                return;
            }

        const novaDespesa = new Despesa (valor, tipo, descricao);
        console.log ("Todos as despesas ", listaDeDespesas);
        limpaFiltro();
}        