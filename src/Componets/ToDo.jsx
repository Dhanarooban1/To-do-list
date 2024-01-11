import React, { Component } from 'react'


export default class ToDo extends Component {
 constructor(props) {
 super(props)
   this.state = {
       todo: [],
     inputText:""
   }
 }

handleInputText = (e) =>{
 this.setState({
   inputText : e.target.value
})
}

handleData = () =>{
    this.setState({
        todo:[...this.state.todo,this.state.inputText],  
        inputText: ""
    })
}
  render() {
return (
    <>
    <div>
       <input type="text" value ={this.state.inputText} onChange={this.handleInputText}/>
       <button onClick={this.handleData}>Add items</button>
    </div>
    <div>
        {this.state.todo.map((ele,idx)=>{
         return  <Element key ={idx} ele = {ele}/>})}
   </div>
  </>)}
}
