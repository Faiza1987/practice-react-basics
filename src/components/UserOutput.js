import React from 'react';
import UserInput from './UserInput';
import './UserOutput.css';

const UserOutput = (props) => {

    return(
        <div>
            <p> Hello! I am {props.userName} !</p>
            <p> I am learning React!</p>
            {/* <UserInput 
                userName={props.userName}
                // changeHandler={props.changeHandler}
            /> */}
        </div>
    );
}

export default UserOutput;