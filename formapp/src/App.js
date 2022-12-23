import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {

constructor(props){
  super(props)

  this.state = {
    username: '',
    textareaValue : '',
    isLogin : true ,
    select : false
    
  } 
  this.textareaHandler = this.textareaHandler.bind(this)
}

userNameHandler (event) {
  console.log(event);
  this.setState(
    {username:event.nativeEvent.target.value}
  )
}
textareaHandler(event){
  console.log(event);
    this.setState ({textareaValue: event.nativeEvent.target.value})
  
}

isLoginHandler(event){
  console.log(event); 
  this.setState ({isLogin: event.nativeEvent.target.checked})
}
selectHandler(event){
  console.log(event);
  this.setState ({select: event.target.selected})
}

  render() {
    return (
      <div>

        <div>
          <h1>{this.state.username}</h1>
        <input type="text" value={this.state.username} 
        onChange={(event)=> this.userNameHandler(event)} />
        </div>
        
        <div>
         <label htmlFor="login">Login</label>
        <input type="checkbox" id="login" checked={this.state.isLogin} 
        onChange={(event)=> this.isLoginHandler(event)} />
        </div>


        <div>  
        <select type="select" selected={this.state.select} 
        onChange={(event)=> this.selectHandler(event)} > 

         <option value="Esteghlal">زن</option>
         <option value="Persepolis">زندگی</option>
         <option value="other">آزادی </option>

         </select>
        </div>

        <div>
          <textarea value={this.state.textareaValue}  
          onChange ={this.textareaHandler}>

          </textarea>
        </div>
          
      </div>
    )
  }
}

