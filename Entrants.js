import React from 'react'
import {connect} from 'react-redux'
import {getEntrants, deleteEntrant} from "./store"
import {Link} from "react-router-dom"


const Entrants = ({entrants, withdraw}) => {
    return (
       
        <div>
        <h3> Current Entrants </h3>
     
        {
            entrants.map(entrant => {
                return (
                    <h5 key={entrant.id}> 
                    <Link to={`/entrants/${entrant.id}`}> 
                    Name: {entrant.name} <br/> Gamertag: {entrant.gamerTag}  </Link> 
                    <button onClick={() =>withdraw(entrant)}>x</button>
                    </h5> 
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

const mapDispatch = (dispatch) => {
    return {
        withdraw: async(entrant) => {
            await dispatch(deleteEntrant(entrant))
        }
    }
}


export default connect(mapState,mapDispatch)(Entrants)