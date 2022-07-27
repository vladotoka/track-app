import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {

        // if we sign up, modify our state, an say thath we are authenticated

        // if signing up fails, we probably need to reflect an error message somewhere
        try {
            // make api requst to sign up with that email and password
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data);
        } catch (err) {
            console.log(err.response.data);

            //TODO improve error messages
            let errMsg;
            if (/Path `email` is required/.test(err.response.data)) {
                errMsg = 'Please insert email'
            } else if (/Path `password` is required/.test(err.response.data)) {
                errMsg = 'Please insert password'
            } else if (/E11000 duplicate key error collection:/.test(err.response.data)) {
                errMsg = 'Email is already used'
            } else { errMsg = 'Something went wrong with sign up' }

            dispatch({ type: 'add_error', payload: errMsg });
        }

    };
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
    { isSignedIn: false, errorMessage: '' }
);