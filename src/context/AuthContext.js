import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../navigation/RootNavigation';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errMsg: '', token: action.payload };
        case 'signout':
            return { errMsg: '', token: null };
        case 'set_email':
            return { ...state, email: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        default:
            return state;
    }
};

const signup = (dispatch) => async ({ email, password }) => {
    try {
        // make api requst to sign up with that email and password
        const response = await trackerApi.post('/signup', { email, password });
        // storing the JWT auth token in async Storage
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('email', email); //temp add to display user in account screen
        dispatch({ type: 'signin', payload: response.data.token });
        dispatch({ type: 'set_email', payload: email }); //temp add to display user in account screen
        console.log(response.data);
    } catch (err) {
        console.log(err.response.data);

        let errMsg;
        if (/Path `email` is required/.test(err.response.data)) {
            errMsg = 'Please insert email'
        } else if (/Path `password` is required/.test(err.response.data)) {
            errMsg = 'Please insert password'
        } else if (/E11000 duplicate key error collection:/.test(err.response.data)) {
            errMsg = 'Email is already used'
        } else if (err.response.data === 404) {
            errMsg = 'This request returns an error 404, check if localtunel is running or change the axios baseUrl in src/api/tracker'
        } else { errMsg = 'Something went wrong with sign up' }

        dispatch({ type: 'add_error', payload: errMsg });
    }

};

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('email', email); //temp add to display user in account screen
        dispatch({ type: 'signin', payload: response.data.token });
        dispatch({ type: 'set_email', payload: email }); //temp add to display user in account screen
        console.log(response.data.token);
    } catch (err) {
        console.log(err.response.data.error);
        let errMsg;

        if (err.response.data.error) {
            errMsg = err.response.data.error
        } else if (err.response.data === 404) {
            errMsg = 'This request returns an error 404, check if localtunel is running or change the axios baseUrl in src/api/tracker'
        } else { errMsg = 'Something went wrong with sign in' }


        dispatch({ type: 'add_error', payload: errMsg })
    }
};

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('email'); //temp add to display user in account screen
    dispatch({ type: 'signout' })
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message' })
};

const tryLocalSignin = (dispatch) => async () => {
    //check if there is a JWT in async storage
    const token = await AsyncStorage.getItem('token');
    console.log('try local signin invoked, token: ', token);
    if (token) {
        dispatch({ type: 'signin', payload: token });
        const email = await AsyncStorage.getItem('email'); //temp add to display user in account screen
        if (email) {
            dispatch({ type: 'set_email', payload: email });
        }
    } else {
        RootNavigation.navigate('Signup');
    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '', email: null }
);