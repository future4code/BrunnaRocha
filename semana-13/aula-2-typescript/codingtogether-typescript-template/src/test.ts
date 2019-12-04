// EXERCICIO 1
enum Marca {
    FIAT = "fiat",
    VOLKSWAGEN = "volkswagen"
  }
  ​
  type carro = {
    marca: Marca;
    capacidadeDeGasolina: number;
    flex: boolean;
    litrosGastosParaAndar?: (km: number) => number;
  };
  ​
  const uno: carro = {
    marca: Marca.FIAT,
    capacidadeDeGasolina: 60,
    flex: true,
    litrosGastosParaAndar: (quilometro: number): number => {
      return 0.25 * quilometro;
    }
  };
  ​
  const fusca: carro = {
    marca: Marca.VOLKSWAGEN,
    capacidadeDeGasolina: 40,
    flex: false
  };
  ​
  const gol: carro = {
    marca: Marca.VOLKSWAGEN,
    capacidadeDeGasolina: 80,
    flex: true
  };
  ​
  const arrayDeCarros: carro[] = [uno, fusca, gol];
  ​
  // EXERCICIO 2
  ​
  function pegaCarrosPorMarca(carros: carro[], marca?: string): carro[] {
    if (!marca) {
      return carros.filter((el: carro) => {
        return el.marca === marca;
      });
    }
    return carros;
  }
console.log("Hello world")

