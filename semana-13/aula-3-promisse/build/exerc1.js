"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
fs_1.readdir("textos", function (err, files) {
    if (err) {
        console.log("Error getting directory information.");
    }
    else {
        files.forEach(function (file) {
            fs.stat("textos" + `/${file}`, function (err, stats) {
                console.log(stats);
            });
            console.log(file);
        });
    }
});
//# sourceMappingURL=exerc1.js.map