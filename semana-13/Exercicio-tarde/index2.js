const fs =require('fs');
const data ='Comprar pão!';
const dataOne = 'Comprar batatas!';
const fileName = "newFile.txt";

try{
    fs.writeFileSync(fileName, data, 'utf8');
    console.log("Dado inserido com sucesso!")
} catch(err) {
    console.error(err)
}

try{
    fs.appendFileSync(fileName, dataOne, 'utf8');
    console.log("Dado inserido com sucesso!")
} catch(err) {
    console.error(err)
}