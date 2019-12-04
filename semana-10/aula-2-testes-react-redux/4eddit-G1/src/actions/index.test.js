import { setPosts, setCurrentPost, setDetailsPost } from './index'

describe("posts Action Creators", () => {
    test("Posts", () => {
        const expectedResult = {
            type: 'SET_POSTS',
            payload: {
                posts: 'novo post'
            }
        }
        const result = setPosts('novo post');
        expect(expectedResult).toMatchObject(result);
    });

    test("CurrentPost", () => {
        const expectedResult = {
            type: 'SET_CURRENT_POST',
            payload: {
                currentPost: 'post atual'
            }
        }
        const result = setCurrentPost('post atual');
        expect(expectedResult).toMatchObject(result);
    });

    test("DetailsPost", () => {
        const expectedResult = {
            type: 'SET_DETAILS_POST',
            payload: {
                detailsPost: 'detalhes do post'
            }
        }
        const result = setDetailsPost('detalhes do post');
        expect(expectedResult).toMatchObject(result);
    });
});