import React from 'react';
export default ({input, label, meta : { error, touched }}) => {
    //console.log(meta);
    return (
        <div className="formFields">
            <label>{label}</label>
            <input {...input}/>
            <div className="red-text">
                 {touched && error}
            </div>
           
        </div>
    )
}