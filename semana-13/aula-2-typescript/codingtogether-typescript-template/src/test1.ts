// EXERCICIO 1 - TARDE

const array: number[] = [1, 2, 3, 53, 781, 222, 696, 365, 742, 133];

type result = {
  arrayNumbQuant: number,
  arrayNumbQuantImp: number,
  arraySomaTotal: number,
};

function  showArray(allNumbers: number[]): result { 

  const NumbQuantImp: number[] = allNumbers.filter((el: number) =>  {
    return el%2 !== 0;
  })

  let SomaTotal: number = 0
  for(let i = 0; i < allNumbers.length; i++) {
    SomaTotal += allNumbers[i]
  }

  const result: result = {
    arrayNumbQuant: allNumbers.length,
    arrayNumbQuantImp: NumbQuantImp.length,
    arraySomaTotal: SomaTotal
  }

    return result
}
console.log(showArray(array))