import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createEntrant} from "./store"


class Create extends Component {
    constructor() {
        super();
        
        this.state = {
            name: '',
            gamerTag: ''
        }
        this.submit = this.submit.bind(this);
    }
    
  
    submit(event) {
        const {name, gamerTag} = this.state
        event.preventDefault()
        
        const entrant = {
           name,
           gamerTag
        }
       this.props.create(entrant)
       
    }
    
    render() {
    const {create} = this.props;
    const {name, gamerTag} = this.state;
    const {submit} = this

        return (
            <form onSubmit={submit}>
                <input onChange={ ev => this.setState({name: ev.target.value})} name='name' placeholder='Full name' value={name}/>
                <input  onChange={ ev => this.setState({gamerTag: ev.target.value})}name='gamertag' placeholder='GamerTag' value={gamerTag}/>
                <button id='button' disabled={!name || !gamerTag}>Add new entry!</button>
            </form>
            )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        create: async(entrant) => { 
          await dispatch(createEntrant(entrant)) 
            
        }
    }
}



export default connect(null,mapDispatchToProps)(Create)