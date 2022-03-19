import React from 'react'
import {connect} from 'react-redux'
import {getEntrants} from "./store"
import {Link} from "react-router-dom"


const Entrant = ({entrants, match}) => {
    return (
        <div>
       
     
        {
            entrants.filter(entrant => entrant.id === match.params.id*1).map(entrant => {
                return (
                    <h5 key={entrant.id}> 
                        <p> This is {entrant.gamerTag}'s page. Real name is {entrant.name} </p>
                        <Link to={'/'}> Go back </Link> 
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


export default connect(mapState,null)(Entrant)