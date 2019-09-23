function creatTask() {
    let inputValue = document.querySelector("#task").value;
    let selectedWeekDay = document.querySelector("#diaDaSemana").value;
    let taskList = document.querySelector("#" + selectedWeekDay + " ul");
    taskList.innerHTML += "<li>" + inputValue + "</li>";
    // TENTANDO FAZER COM QUE NÃO SEJA POSSÍVEL INSERIR UMA TAREFA EM BRANCO
    //     if(inputValue){
    //         let newTask = document.createElement("#task");
    //         newTask.innerHTML = inputValue;
    //         taskList.appendChild(newTask);
    //         document.querySelector("input").value = "";
    //     } else {
    //         alert("Não é possível inserir um elemento vazio");
    //     }
    // }
}
