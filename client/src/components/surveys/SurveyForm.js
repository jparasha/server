import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
    renderFields(){
        return (
             <div>
                <Field type ="text" name = "title" component = "input"/>
            </div>
        );
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