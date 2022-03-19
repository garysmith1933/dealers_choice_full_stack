import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {getEntrants} from "./store"

const Entrants = ({entrants}) => {
    console.log(entrants)
    return (
        <div>
        <h3> Current Entrants </h3>
     
        {
            entrants.map(entrant => {
                return (
                    <h5 key={entrant.id}> Name: {entrant.name} <br/> Gamertag: {entrant.gamerTag} </h5>
                )
            })
        }
  
       </div>
        )
}

const mapState = (state) => {
    return {
        entrants: state
    }
}


export default connect(mapState,null)(Entrants)