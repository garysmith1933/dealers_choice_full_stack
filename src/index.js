import React, {Component} from 'react';
import { render } from 'react-dom';
import store, {getEntrants} from "../store"
import {Provider} from "react-redux"
import Entrants from "../Entrants"



export default class App extends Component {
    async componentDidMount(props) {
        await store.dispatch(getEntrants())
    }
    
    render() {
        return (
            <div>
            <h1> Monthly Smash Tournament! </h1>
            <Entrants/>
            </div>
            )
    }
}




render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));