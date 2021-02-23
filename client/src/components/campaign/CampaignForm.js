import { Button, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { reduxForm, Field, formValues } from 'redux-form'
import CampaignField from './CampaignField'
import CampaignBody from './CampaignBody'
import validateEmails from '../../validateEmails'

import { connect } from 'react-redux'
import * as actions from '../../actions'

class CampaignForm extends Component {
    
    constructor(props) {
        super(props);
        this.state ={ selectTemp: ''};
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeValue(event) {
        console.log(event.target.value);
        this.setState({ selectTemp: event.target.value});
        this.props.fetchTemplate(event.target.value);
    }
    onSubmit(e){
        
        let formData = {};
        formData.recipients = e.emails;
        formData.title = e.title;
        formData.subject = e.subject;
        formData.body = e.template;
        formData.feedback = this.selectTemplate.value;

        
        this.props.submitCampaign(formData);
        
    }

    

    render() {
        const {handleSubmit} = this.props;
        console.log(this.props);
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
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

                    <select id="template" onChange={this.onChangeValue} value={this.state.value} ref={ref => this.selectTemplate = ref}>
                        <option></option>
                        <option value="link" key="link">Link Template</option>
                        <option value="rate" key="rate">Rate Template</option>
                        <option value="comment" key="comment">Comment Template</option>
                    </select>
                    
                    <CampaignBody/>
                    <Grid container item xs direction="row" justify="space-evenly">
                        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" color="secondary">Cancel</Button>
                        </Link>
                        <Button 
                            type="submit"
                            variant="outlined"
                            color="primary"
                            
                            >Submit</Button>
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

const mapStateToProps = (state) => ({
    initialValues: state.template
});

// export default reduxForm({
//     validate,
//     form: 'campaignForm'
// })(CampaignForm);

export default connect(
    mapStateToProps, actions
)(reduxForm({
    validate,
    form: 'campaignForm',
    enableReinitialize: true
})(CampaignForm))