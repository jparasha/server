import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELD = [
    {
        label: "Survey Title",
        name:"title"
    },
    {
        label: "Subject Line",
        name:"subject"
    },
    {
        label: "Email Body",
        name:"body"
    },
    {
        label: "Recipient List",
        name:"emails"
    },
];
class SurveyForm extends Component {
    renderFields(){
        return _.map(FIELD, ({label,name}) =>{
                return <Field component={SurveyField} type="text" name={name} label={label} key={name}/> 
        });
    }
    render(){
        return(
            <div>
                    <form onSubmit = {this.props.handleSubmit(values => console.log(values) )}>
                        {this.renderFields()}
                        <button type = "submit" className = "btn">submit</button>

                    </form>
            </div>
        );
    }

}
export default reduxForm({
    form : 'surveyForm'
})(SurveyForm);