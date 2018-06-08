import React from 'react';
export default ({input, label, meta : { error, touched }}) => {
    //console.log(meta);
    return (
        <div className="formFields">
            <label>{label}</label>
            <input {...input}/>
            {touched && error}
        </div>
    )
}