import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) =>{
    
    const reviewFields = _.map(formFields, ({name, label}) =>{
        return(
            <div key= {name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        )
    })
    return(
        <div>
            <h4>Please confirm your entries</h4>
            {reviewFields}
            <button className= "yellow white-text darken-3 btn-flat" onClick= {onCancel}>
                Back
            </button>
            <button className= "green white-text btn-flat right" onClick= {()=> submitSurvey(formValues)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};
function mapStateToProps(state){
    
    return{
        formValues: state.form.SurveyForm.values
    };
}
export default connect (mapStateToProps, actions) (SurveyFormReview);