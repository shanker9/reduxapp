import { combineReducers } from "redux";


export function addItem(state = [], action) {
    let newState;
    console.log('Checking addItem reducer');
    switch (action.type) {
        case 'ADD_NUMBER':
            newState = [...state, action.data];
            break;
        case 'ADD_STRING':
            newState = [...state, action.data]
            break;
        default:
            newState = state;
            break;
    }
    return newState;
}

export function addEntry(state = [], action) {
    let newState;
    console.log('Checking addEntry reducer');
    switch (action.type) {
        case 'ADD_ENTRY':
            newState = [...state, action.data];
            break;
        default:
            newState = state;
            break;
    }
    return newState;
}