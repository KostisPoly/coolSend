import React, { Component } from 'react'
import CampaignForm from './CampaignForm'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class CampaignNew extends Component {
    render() {
        console.log(this.props);
        if(this.props.redirect.redirectTo){
            return <Redirect to={this.props.redirect.redirectTo}/>
        }
        return (
            <div>
                <CampaignForm />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { redirect: state.redirect }
}
export default connect(mapStateToProps)(CampaignNew);