function taskList(list) {
    return{
        type: "TASK_LIST",
    }
}

function taskToDo(task) {
    return{
        type: "TASK_TO_DO",
    }
}

function taskPending(pending){
    return{
        type: "TASK_PENDING"
    }
}

function taskComplete(complete) {
    return{
        type: "TASK_COMPLETE"
    }
}

function taskMarkComplete(markComplete) {
    return{
        type: "MARK_COMPLETE"
    }
}

function taskRemoveComplete(removeComplete) {
    return{
        type: "REMOVE_COMPLETE"
    }
}

