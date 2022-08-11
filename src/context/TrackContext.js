import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const fetchTracks = dispatch => () => { };
const createTrack = dispatch => (name, locations) => {
    //make request to our api and save track
    console.log(name, locations.length);
};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);