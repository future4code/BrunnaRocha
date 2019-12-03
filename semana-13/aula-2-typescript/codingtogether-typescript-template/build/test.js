var Marca;
(function (Marca) {
    Marca["FIAT"] = "fiat";
    Marca["VOLKSWAGEN"] = "volkswagen";
})(Marca || (Marca = {}));
const uno = {
    marca: Marca.FIAT,
    capacidadeDeGasolina: 60,
    flex: true,
    litrosGastosParaAndar: (quilometro) => {
        return 0.25 * quilometro;
    }
};
const fusca = {
    marca: Marca.VOLKSWAGEN,
    capacidadeDeGasolina: 40,
    flex: false
};
const gol = {
    marca: Marca.VOLKSWAGEN,
    capacidadeDeGasolina: 80,
    flex: true
};
const arrayDeCarros = [uno, fusca, gol];
function pegaCarrosPorMarca(carros, marca) {
    if (!marca) {
        return carros.filter((el) => {
            return el.marca === marca;
        });
    }
    return carros;
}
console.log("Hello world");
const array = [1, 2, 3];
const obj = {
    arrayNumbQuant: array,
    arrayNumbQuantImp: array % 1,
    arraySomaTotal: 
};
const obj2;
//# sourceMappingURL=test.js.map