import React from 'react'
import {connect} from 'react-redux'
import {getEntrants} from "./store"
import {Link} from "react-router-dom"


const Entrants = ({entrants}) => {
    return (
       
        <div>
        <h3> Current Entrants </h3>
     
        {
            entrants.map(entrant => {
                return (
                    <h5 key={entrant.id}> <Link to={`/entrants/${entrant.id}`}> Name: {entrant.name} <br/> Gamertag: {entrant.gamerTag}  </Link> </h5> 
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