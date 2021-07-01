import React, { Component } from 'react';
import './App.css';
import Items from './componenets/Items'
class AppList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ value: '', isDone: false }],
      new_item: ''
    }
  }
  handleOnchange = (e) => {
    this.setState((prev)=> {
      return {
        ...prev,
        new_item:e.target.value,
      }    
    });
  }
  deleteItem = (index) => {
    this.setState(
      (prev)=>{
        let items = prev.items;
        items.splice(index, 1);
        return {
          ...prev,
          items: [...items]
        }
    })
  }
  checkBoxChange = (index) => {
    this.setState(
      (prev)=>{
        let items = prev.items;
        items[index].isDone = !items[index].isDone;
        return {
          ...prev,
          items: [...items]
        }
    })
  }
  editItem = (index, text) => {
    let new_item = prompt("Edit item",text);
    if(new_item == null || new_item === text || new_item === ""){
      if(new_item===""){
        alert("can't edit item to empty");
      }
      return;
    }
    this.setState(
        (prev)=>{
          let items = prev.items;
          items[index].value = new_item
          return {
            ...prev,
            items: [...items]
          }
    })
  }
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState(
      (prev)=>{
        let items = prev.items;
        items.unshift({ value: this.state.new_item, isDone: false });
        return {
          ...prev,
          new_item:'',
          items: [...items]
        }
    })
  }

  render() {
    return (
      <div>
        <h1> To Do List App </h1>
        <h4>To edit Item double click on it</h4>
        <form onSubmit={this.handleOnSubmit}>
          <input className="item-input-main" type="text" placeholder="Enter Item"
            value={this.state.new_item} onChange={this.handleOnchange} />
          <button className="add-btn" >Add Item</button>
        </form>
        <Items items={this.state.items}
          onClick={(index) => this.deleteItem(index)}
          onChangeCheckBox={(index) => this.checkBoxChange(index)}
          onChangeItem={(index, text) => this.editItem(index, text)}
        />
      </div>
    );
  }
}

export default AppList;
