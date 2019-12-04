import { combineReducers } from "redux";
import tasks from './tasks.js'

const rootReducer = combineReducers({
    tasksReducer:tasks
  });
  
export default rootReducer;