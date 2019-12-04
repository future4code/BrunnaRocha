const fs =require('fs');
const fileName = process.argv[2]
const task = process.argv[3]


try{
   /// fs.writeFileSync(fileName, task, 'utf8');
    // console.log("Arquivo inserido com sucesso!")
    fs.appendFileSync(fileName, task + "\n", 'utf8');
    console.log("Tarefa inserida com sucesso!")
} catch(err) {
    console.error(err)
}
