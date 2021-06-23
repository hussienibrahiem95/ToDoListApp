import React ,{Component } from 'react';
import './App.css';
import Items from './componenets/Items'
class AppList extends Component{
  constructor(props){
    super(props);
    this.state = {
      items :[{value:'' , isDone:false}],
      new_item :''
    }
  }
  HandleOnchange = (e)=>{
    this.setState({
      new_item:e.target.value
    });
  }
  DeleteItem = (index)=>{
    let items = this.state.items;
    items.splice(index,1);
    console.log(items);
    this.setState({
      items:items,
    })
  }

  CheckBoxChange = (index)=>{
    let items = this.state.items;
    items[index].isDone = !items[index].isDone
    this.setState({
      items:items,
    })
    this.state.items.sort((a, b) => (a.isDone <= b.isDone) ? -1 : 1)
  }
  EditItem = (index , text)=>{
    if(text.length >= 1){  // to ensure that replaced text this not empty
      let items = this.state.items;
      items[index].value = text
      this.setState({
        items:items,
      })
    }
  }
  HandleOnSubmit = (e)=>{
    e.preventDefault();
    let items = this.state.items;
    this.setState({
      items : items.concat({value:this.state.new_item , isDone:false}),
      new_item:''
    })
    this.state.items.sort((a, b) => (a.isDone <= b.isDone) ? -1 : 1)
  }
  
  render(){
   
    return(
      <div>  
          <h1> To Do List App </h1>
          <form onSubmit={this.HandleOnSubmit}>
            <input className = "item-input-main" type="text"  placeholder="Enter Item" 
            value = {this.state.new_item} onChange={this.HandleOnchange} />
            <button className = "add-btn" >Add Item</button>
          </form>
            <Items items = {this.state.items}
              onClick = {(index)=> this.DeleteItem(index)}
              onChangeCheckBox = {(index)=> this.CheckBoxChange(index)}
              onChangeItem = {(index,text)=> this.EditItem(index,text)}
            />
      </div>
    );
  }
}

export default AppList;
