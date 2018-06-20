import React from 'react';
import { connect } from 'react-redux';
const SurveyFormReview = ({onCancel}) =>{
    return(
        <div>
            <h4>Please confirm your entries</h4>
            <button className= "yellow darken-3 btn-flat" onClick= {onCancel}>
                Back
            </button>
        </div>
    );
};
function mapStateToProps(){
    
    return{

    }
}
export default connect (mapStateToProps) (SurveyFormReview);