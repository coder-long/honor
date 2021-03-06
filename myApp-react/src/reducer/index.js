import { combineReducers } from 'redux'
import * as type from '../action/type'
import { initialState, initFetchState } from './initialState'

const handleData = (state = { isFetching: true, data: {} }, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
            return { ...state, isFetching: true }
        case type.RECEIVE_DATA:
            return { ...state, isFetching: false, data: action.data }
        case type.RELOAD_DATA:
            return { ...state, isFetching: false, data: action.data }
        case type.ADD_DATA:
            return { ...state, isFetching: false, data: [action.data, ...state] }
        default:
            return { ...state };
    }
};

const httpData = (state = initFetchState, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
        case type.RECEIVE_DATA:
            return {
                ...state,
                [action.category]: handleData(state[action.category], action)
            }
        case type.ADD_DATA:
            return {
                ...state,
                [action.category]: handleData(state[action.category], action)
            }
        default:
            return { ...state };
    }
};

const staticData = (state = initialState, action) => {
    switch (action.type) {
        case type.RELOAD_DATA:
            return {
                ...state,
                [action.category]: action.data
            }
        default:
            return { ...state };
    }
};

export default combineReducers({ httpData, staticData })