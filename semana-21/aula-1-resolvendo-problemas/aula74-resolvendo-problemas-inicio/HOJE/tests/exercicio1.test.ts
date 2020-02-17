import { findFirstRecurringCharacter } from "../src/exercicio1";


describe("Testing checkRepetition", () => {
    it("Na palavra ABCA, pega a primeira letra recorrente, no caso A", () => {
        const result = findFirstRecurringCharacter("CASA");
        expect(result).toEqual("A");
    })
});