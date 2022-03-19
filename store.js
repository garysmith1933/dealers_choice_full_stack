import React from "react"
import axios from "axios"
import thunk from "redux-thunk"
import {createStore, applyMiddleware} from 'redux'


const LOAD_ENTRANTS = "LOAD_ENTRANTS"

const reducer = (state=[], action) => {
    if(action.type === LOAD_ENTRANTS) {
        return action.entrants
    }
    return state;
}

export const getEntrants = () => {
    return async(dispatch) => {
      let response = await axios.get("/api/entrants")
      dispatch({type: LOAD_ENTRANTS, entrants: response.data})
    }
}



 const store = createStore(reducer,applyMiddleware(thunk))

 export default store


