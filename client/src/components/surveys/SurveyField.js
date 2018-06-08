import React from 'react';
export default ({input, label}) => {
    //console.log(props);
    return (
        <div className="formFields">
            <label>{label}</label>
            <input {...input}/>
        </div>
    )
}