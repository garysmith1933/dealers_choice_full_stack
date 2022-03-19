import React, {Component} from 'react';
import { render } from 'react-dom';
import store, {getEntrants} from "../store"
import {Provider} from "react-redux"
import Entrants from "../Entrants"
import {HashRouter, Link, Route, Switch} from "react-router-dom"
import Entrant from "../Entrant"
import Create from "../Create"



export default class App extends Component {
    async componentDidMount(props) {
        await store.dispatch(getEntrants())
    }
    
    render() {

        return (
                <div>
                    <h1> Monthly Smash Tournament! </h1>
                    <Create/>
                <Route exact path="/" component={Entrants}/>
                <Route path='/entrants/:id' component={Entrant}/>
               
                </div>
            )
            
    }
}




render(
<Provider store={store}>
<HashRouter>
<App/>
</HashRouter>
</Provider>, 
document.querySelector('#root'));