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
    
    // const handleChange = (ev) => {
    //     const name = this.state
        
    // }
    submit(event) {
        event.preventDefault()
        const entrant = {
            name: this.state.name,
            gamerTag: this.state.gamerTag
        }
       this.props.create(entrant)
    }
    
    render() {
    const {create} = this.props;
    const {name, gamerTag} = this.state;
    const {submit} = this
    console.log(name, gamerTag)
    //find a way to reset form after submitting
        return (
            <form onSubmit={submit}>
            <input onChange={ ev => this.setState({name: ev.target.value})} name='name' placeholder='Full name' value={name}/>
            <input  onChange={ ev => this.setState({gamerTag: ev.target.value})}name='gamertag' placeholder='GamerTag' value={gamerTag}/>
                <button id='button' disabled={!name || !gamerTag} onClick={create}>Add new entry!</button>
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