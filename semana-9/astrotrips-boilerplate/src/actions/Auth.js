import axios from "axios";

const login = (email, password) => async (dispatch) => { 
    const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureX/brunna/login', {
        email, 
        password,
    });
    console.log(response)
    window.localStorage.setItem('token', response.data.token)
}

export default login;
