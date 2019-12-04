import { readdir } from 'fs';

readdir("textos", function(err, files:string[]) {
    if (err) {
      console.log("Error getting directory information.")
    } else {
      files.forEach(function(file:string) {

        console.log(file)

      })
    }
  })


const textArray: string[] = [...Array()];

const textOperation = new Promise((resolve, reject) => { 
    const result = textArray.map((item:string, index:number) => {
        return index;
    });
    resolve(result);
});

console.log("Antes da Promisse");

textOperation.then((result:number[]) => {
    console.log(result);
}).catch((error) => {
    console.error(error)
});

console.log("Depois da Promisse")
