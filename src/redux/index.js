import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//actions

export const SET_USER_NAME = 'SET_USER_NAME';

export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};

// reducers
const initialState = {
    name: '',
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_NAME':
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state;
    }
};

//rootreducer
export const rootReducer = combineReducers({
    userReducer,
});

//store
export const store = createStore(rootReducer, applyMiddleware(thunk));
