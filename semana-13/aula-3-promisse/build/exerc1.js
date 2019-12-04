"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const text1 = "1.txt";
const text2 = "2.txt";
const text3 = "3.txt";
const text4 = "4.txt";
const text5 = "5.txt";
const promise1 = axios_1.default.get(text1);
const promise2 = axios_1.default.get(text2);
const promise3 = axios_1.default.get(text3);
const promise4 = axios_1.default.get(text4);
const promise5 = axios_1.default.get(text5);
Promise.all([promise1, promise2, promise3, promise4, promise5]).then((values) => {
    console.log(values);
});
//# sourceMappingURL=exerc1.js.map