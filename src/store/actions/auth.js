import axios from 'axios';

import * as actionTypes from './actionsTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
        
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => { 
         dispatch(authStart ());
         const authDate = {
             email: email,
             password: password,
             returnSecureToken: true
         }
         let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAWxjvCVq50lWjpi_2_4YLvIJ3p422LjM'
         if (!isSignup) {
             url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAWxjvCVq50lWjpi_2_4YLvIJ3p422LjM'
         } 
         axios.post(url, authDate)
         .then(response => {
             console.log(response);
             dispatch(authSuccess(response.data.idToken, response.data.localId))
         })
         .catch(err => {
             console.log(err);
             dispatch(authFail(err));
             
         })
    };
}