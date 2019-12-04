import axios from 'axios'

const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/fourEddit'

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: {
        posts
    }
})

export const setCurrentPost = (currentPost) => ({
    type: 'SET_CURRENT_POST',
    payload: {
        currentPost
    }
})

export const setDetailsPost = (detailsPost) => ({
    type: 'SET_DETAILS_POST',
    payload: {
        detailsPost
    }
})



export const createPost = (titletyped, texttyped) => async (dispatch) => {

    const token = window.localStorage.getItem("token");

    const body = {
        text: texttyped,
	    title: titletyped
    }

    const response = await axios.post(`${urlBase}/posts`, body, 
        {
        headers:{
            auth: token
        }
        }
    )

    dispatch(getPosts())
} 



export const getPosts = () => async (dispatch) => {

    const token = window.localStorage.getItem("token");

    const response = await axios.get(`${urlBase}/posts`,{
        headers:{
            auth: token
        }
    })
   
    dispatch(setPosts(response.data.posts))
}

export const votePosts = (vote, postId) => async (dispatch) => {

    const token = window.localStorage.getItem("token");

    const body = {
        direction: vote
    }

    const response = await axios.put(`${urlBase}/posts/${postId}/vote
    `, body, {
        headers:{
            auth: token
        }
    })

    dispatch(getPosts())
}

export const getPostDetails = (postId) => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    
    const response = await axios.get(`${urlBase}/posts/${postId}`, {
        headers:{
        auth: token
        }

    })

    dispatch(setDetailsPost(response.data.post))
    
}

