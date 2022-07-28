import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errMsg: '', token: action.payload };
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
        dispatch({ type: 'signup', payload: response.data.token })
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
            errMsg = 'Request return error 404, check if localtunel is running or change the axios baseUrl in src/api/tracker'
        } else { errMsg = 'Something went wrong with sign up' }

        dispatch({ type: 'add_error', payload: errMsg });
    }

};


const signin = (dispatch) => {
    return ({ email, password }) => {
        // Try to signin
        // Handle success by updating state
        // Handle failure by showing error message (somehow)
    };
};

const signout = (dispatch) => {
    return () => {
        // somehow sign out
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { token: null, errorMessage: '' }
);