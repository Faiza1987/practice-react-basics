import React, { Component } from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return(
        <input 
            type="text"
            value={props.currentName}
            onChange={props.changeHandler}
            className="input"
        />
    );
}

export default UserInput;