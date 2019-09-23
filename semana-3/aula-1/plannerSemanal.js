function creatTask(){
    let inputValue = document.querySelector("#task").value;

    let selectedWeekDay = document.querySelector("#diaDaSemana").value;
    
    let taskList = document.querySelector("#" + selectedWeekDay + " ul");

    taskList.innerHTML += "<li>" + inputValue + "</li>";
}

    