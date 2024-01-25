import { configureStore } from "@reduxjs/toolkit";
import {createStore} from 'react-redux'

const counterReducer = (state = {counter : 0}, action) => {
    if(action.type === 'increment'){
        return{
            counter : state.counter + 1
        }
    }

    if(action.type === 'decrement'){
        return{
            counter : state.counter - 1
        }
    }

    return state;//it return unchanged state
};

const store = configureStore({
    reducer : {
        counterReducer : counterReducer,
    }
});

export default store;


