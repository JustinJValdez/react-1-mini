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
    this.addFriend = this.addFriend.bind(this)
    
  };
  updatePicture(value){
    this.setState({picture : value});
  }
  updateName(value){
    this.setState({name : value}); 
  }

  addFriend(){
  const {friends, picture, name} =  this.state ;
  
  let newFriends = friends.slice();
  newFriends.push({picture,name});

  this.setState({friends: newFriends, picture: '', name: ''});
  }

  render(){
    console.log(this.state.name);
    console.log(this.state.picture)
    console.log(this.state.friends);

  const friends = this.state.friends.map((friend, index)=>(
    <div key={ `friend-${index}-${friend.name}`}>
      <img width="100px" src={friend.picture} alt={''} />
      <span>{friend.name}</span>
    </div>
  ));

  return (
    <div>
    <span>Pictures:</span>
    <input
    onChange={( e ) => this.updatePicture( e.target.value ) } 
    value={ this.state.picture }
     />
    <span>Name:</span> 
    <input
    onChange={( e ) => this.updateName( e.target.value ) } 
    value={ this.state.name } 
    />

    <button onClick={()=>{this.addFriend()}}>Add Friend</button>

    {friends}

    </div>
       );
      };
};

export default App;
