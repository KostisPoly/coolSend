import { Button, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form'
import CampaignField from './CampaignField'
import validateEmails from '../../validateEmails'

class CampaignForm extends Component {
    // renderContent() {
    //     switch (this.state.template) {
    //         case 'link':
    //             return (
    //                 <div>

    //                 </div>
    //             );
    //         default:
    //             return ;
    //     }
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(val => console.log(val))}>
                    <Field 
                        type="text"
                        name="title"
                        label="Title"
                        placeholder="Title of the new campaign!"
                        component={CampaignField}
                    />
                    <Field 
                        type="text"
                        name="subject"
                        label="Subject"
                        placeholder="Email campaign's subject!"
                        component={CampaignField}
                    />
                    <Field 
                        type="text"
                        name="emails"
                        label="Recipient List"
                        placeholder="Email addresses comma separated!"
                        component={CampaignField}
                    />
                    <Field 
                        type="text"
                        name="body"
                        label="Email Body"
                        placeholder="Email Body!!"
                        component={CampaignField}
                    />
                    <Grid container item xs direction="row" justify="space-evenly">
                        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" color="secondary">Cancel</Button>
                        </Link>
                        <Button type="submit" variant="outlined" color="primary">Submit</Button>
                    </Grid>
                    
                </form>
            </div>
        )
    }
}

function validate(params) {
    let errors = {};
    
    errors.emails = validateEmails(params.emails || '');//First validate or empty on initial load

    if(!params.title) {
        errors.title = 'Title cannot be empty';
    }
    if(!params.subject) {
        errors.subject = 'Subject cannot be empty';
    }
    if(!params.body) {
        errors.body = 'Body cannot be empty';
    }
    if(!params.emails) {
        errors.emails = 'Recipients not provided';
    }

    return errors;//IF EMPTY OBJECT REDUXFORM PASSES VALIDATION
}

export default reduxForm({
    validate,
    form: 'campaignForm'
})(CampaignForm);