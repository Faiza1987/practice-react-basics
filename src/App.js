import React, { Component } from 'react';
import UserOutput from './components/UserOutput';
import UserInput from './components/UserInput';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: "babycoder",
      firstName: "Faiza",
      lastName: "Ahsan"
    }
  }

  changeHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        < UserInput changeHandler={this.changeHandler} currentName={this.state.userName} />
        <UserOutput 
          userName={this.state.userName}
          // changeHandler={this.changeHandler}
        />
        <UserOutput 
          firstName={this.state.firstName}
          // changeHandler={this.changeHandler}
        />
        <UserOutput 
          userName={this.state.userName}
          // changeHandler={this.changeHandler}
        />
        <UserOutput 
          lastName={this.state.lastName}
          // changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;
