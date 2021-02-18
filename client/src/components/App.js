import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'
import CampaignNew from './campaign/CampaignNew';
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
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route exact path='/campaign/new' component={CampaignNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);
