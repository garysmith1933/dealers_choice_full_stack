import React from "react"
import axios from "axios"
import thunk from "redux-thunk"
import {createStore, applyMiddleware} from 'redux'


const LOAD_ENTRANTS = "LOAD_ENTRANTS"
const CREATE_ENTRANT = "CREATE_ENTRANT"
const DELETE_ENTRANT = "DELETE_ENTRANT"

const reducer = (state=[], action) => {
    if(action.type === LOAD_ENTRANTS) {
        return action.entrants
    }
    
    if(action.type === CREATE_ENTRANT) {
        return [...state, action.entrant]
    }
    
     if(action.type === DELETE_ENTRANT) {
        return state.filter(entrant => entrant.id !== action.entrant.id)
    }
    return state;
}

export const getEntrants = () => {
    return async(dispatch) => {
      let response = await axios.get("/api/entrants")
      dispatch({type: LOAD_ENTRANTS, entrants: response.data})
    }
}


export const createEntrant = (entrant) => {
    return async(dispatch) => {
        let response = await axios.post("/api/entrants", entrant)
        dispatch({type: CREATE_ENTRANT, entrant: response.data})
    }
}

export const deleteEntrant = (entrant) => {
    return async(dispatch) => {
        const response = await axios.delete(`/api/entrants/${entrant.id}`)
        dispatch({type: DELETE_ENTRANT, entrant})
    }
}

 const store = createStore(reducer,applyMiddleware(thunk))

 export default store


