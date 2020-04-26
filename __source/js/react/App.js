import React from 'react';
import Instructions from '../../../__source/js/react/Instructions';
import Body from '../../../__source/js/react/Body';

//Main Functional Component
class App extends React.Component {

  constructor(){
    super();
    this.state = {
    };
  }

  render(){
    return (
      <div className="container">
        <Instructions />
        <Body search="" />
      </div>
    )
  }
}

export default App;
