const initialState = {
    allTasks: [],

  };

export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ALL_TASKS":
            return { ...state, allTasks: action.payload.tasks };
        default:
            return state;
    }
}; 

export default tasks;