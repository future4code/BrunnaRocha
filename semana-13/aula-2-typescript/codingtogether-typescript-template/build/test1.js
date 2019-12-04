const array = [1, 2, 3, 53, 781, 222, 696, 365, 742, 133];
function showArray(allNumbers) {
    const NumbQuantImp = allNumbers.filter((el) => {
        return el % 2 !== 0;
    });
    let SomaTotal = 0;
    for (let i = 0; i < allNumbers.length; i++) {
        SomaTotal += allNumbers[i];
    }
    const result = {
        arrayNumbQuant: allNumbers.length,
        arrayNumbQuantImp: NumbQuantImp.length,
        arraySomaTotal: SomaTotal
    };
    return result;
}
console.log(showArray(array));
//# sourceMappingURL=test1.js.map