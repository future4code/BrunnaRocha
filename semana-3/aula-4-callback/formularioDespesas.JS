function limpaFiltro(){
    document.getElementById("valor-da-despesa").value = "";
    document.getElementById("descrição-da-despesa").value = "";
    document.getElementById("filtro-valor-minimo").value = "";
    document.getElementById("filtro-valor-maximo").value = "";
}

class Despesa {
    constructor(casa, viagem, estudo, outros){
        this.casa = casa;
        this.viagem = viagem;
        this.estudo = estudo;
        this.outros = outros 
    }
}

let listaDeDespesas = []
    function cadastrarDespesa(){
        const casa = document.getElementById("casa").value;
        const viagem = document.getElementById("viagem").value;
        const estudo = document.getElementById("estudo").value;
        const outros = document.getElementById("outros").value;
        
        const despesa = new Despesa (casa, viagem, estudo, outros);


        console.log("Todos as despesas " listaDeDespesas);

        limpaFiltro();
    }        