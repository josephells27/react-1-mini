import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friends:[],
      picture:'',
      name:''
    }
    
  }
  updatePicture (val) {
    this.setState({
      picture:val
    })
  }

  updateName(val){
    this.setState({
      name:val
    })
  }

  addFriend(val) {
    let newFriends = this.state.friends.splice(0);
    newFriends.push({
      name:this.state.name,
      picture:this.state.picture
    })
      this.setState({
        friends: newFriends,
        name:'',
        picture:'' 
      })
    
  }


  render() {
    const formattedFriends = this.state.friends.map((e, i) =>{
      return <div key = {i}>
              <img src={e.picture}/>
              <span>{e.name}</span>
            </div>
    })
    console.log(this.state)
    return (
      <div>
      
       <span>Picture URL:</span>
        <input type="Picture" onChange = {(e)=> 
          this.updatePicture(e.target.value)}
            value={this.state.picture}/>
             
      <span>Name:</span>
        <input type="Name" onChange = {(e) =>
          this.updateName(e.target.value)}
            value={this.state.name}/>
       
       <button onClick ={ ()=>this.addFriend() }>Add Friend</button>

      { formattedFriends }
      </div>
    );
  }
}

export default App;