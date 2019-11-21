import axios from "axios";
import { fetchAllTasks, createTask } from "./taks";
import { baseURL } from "../api/constants";

describe("expenses actions", () => {
    let mockDispatch;

    beforeEach(() => {
        mockDispatch = jest.fn();
    });

    const mockTask = {
        id: 
        day: "Quinta-feira",
        text: "Comprar Shawarma"
    };

    describe("fetchAllTasks", () => {
        test("dispatch was called with the proper action", async () => {
            const mockTasks = [mockTask];
            axios.get = jest.fn(() => ({
                data: mockTasks
            }));

            const expectedAction = {
                type:"SET_ALL_TASKS"
                payload: {
                    tasks: mockTasks
                }
            };

            await fetchAllTasks()(mockDispatch);
            expectedAction(mockDispatch).toHaveBeenCalledWith(expectedAction);
        });
    });

    describe("createTask", () => {
        test("axios correct response is being handled", async () => {
            axios.post = jest.fn(() => ({
                status: 200
            }));
            const { id, day, task } = mockTask;

            await createTask(id, day, task)(mockDispatch);

            expect(axios.post).toHaveBeenCalledWith(baseURL, mockTask);

            expect(mockDispatch).toHaveBeenCalledTimes(1);
        });
    });
});