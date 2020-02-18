/*
 * Determine a complexidade dos seguintes algoritmos
 */

 /* Exercício 1 */

const findFirstRecurringCharacter = (input: string): string | null => {
  const charHashMap: { [index: string]: boolean } = {};
  for (const char of input) {
    if (charHashMap[char] === true) {
      return char;
    }
    charHashMap[char] = true;
  }
  return null;
};

/* R: A complexidade é de */

/* Exercício 2 */

export const func = (
  source: string,
  comparision: string
): boolean => {
  if (
    comparision.length > source.length + 1 ||
    comparision.length < source.length - 1
  ) {
    return false;
  }
  let communCharQuantity = 0;

  for (const char of comparision) {
    if (source !== comparision) {
      communCharQuantity++;
    }
  }
  return (
    communCharQuantity <= source.length + 1 &&
    communCharQuantity >= source.length - 1
  );
};

/* R: A complexidade é de */

/* Exercício 3 */

export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz");
  }

  matrix[rowIndex][columnIndex] = value;
};

/* R: A complexidade é de */

/* Exercício 4 */

function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}

/* R: A complexidade é de */

/* Exercício 5 */

/* Coloque, em ordem de eficiência, os 4 algoritmos que você teve que calcular a complexidade */

/* R: A ordem é a seguinte:
      



*/