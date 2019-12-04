import posts from './posts'
import { exportAllDeclaration } from '@babel/types';

describe("posts Reducer", () => {
    test("Posts", () => {
        const testAction = {
            type: 'SET_POSTS',
            payload: {
                posts: [1]
            }
        };
        const newState = posts(undefined, testAction);
        expect(newState.allPosts).toHaveLength(1);
    });

    test("CurrentPost", () => {
        const testAction = {
            type: 'SET_CURRENT_POST',
            payload: {
                currentPost: "123"
            }
        };
        const newState= posts(undefined, testAction);
        expect(newState.currentIdPost).toBe("123");
    });

    test("DetailsPost", () => {

    });
});