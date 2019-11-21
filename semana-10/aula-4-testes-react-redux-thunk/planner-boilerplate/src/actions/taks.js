import axios from "axios";
import { baseURL } from "../api/constants";

export const setAllTasks = tasks => ({
    type: "SET_ALL_TASKS",
    payload: {
      tasks
    }
  });

export const fetchAllTasks = () => async dispatch => {
    const response = await axios.get(baseURL);
    dispatch(setAllTasks(response.data));
}  

export const createTask = (
    id,
    day,
    text,
)  => async dispatch => {
    const task = { id, day, text };
    const response = await axios.post(baseURL, task);

    if (response.status === 200) {
        dispatch(fetchAllTasks());
    }

};

