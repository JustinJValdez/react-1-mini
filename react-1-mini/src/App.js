import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends:[],
      picture:"",
      name:""
    };

    this.updatePicture = this.updatePicture.bind(this)
    this.updateName = this.updateName.bind(this)
  };
  updatePicture(value){
    this.setState({picture : value});
  };
  updateName(value){
    this.setState({name : value}); 
  };

addFriend(value){
  this.setState({friends:value});  //START AGAIN HERE
};

  render(){
  return (
    <div>
    <span>Pictures:</span>
    <input
    onChange={( e ) => this.updatePicture( e.target.value ) } value={ this.state.picture }
     />
    <span>Name:</span> 
    <input
    onChange={( e ) => this.updateName( e.target.value ) } value={ this.state.name } />
    <button>Add Friend</button>
    </div>
       );
      };
};

export default App;
