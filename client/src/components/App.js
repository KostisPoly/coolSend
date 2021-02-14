import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Landing from './Landing'
import { connect } from 'react-redux'
import * as actions from '../actions'

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/success' component={Landing} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);
