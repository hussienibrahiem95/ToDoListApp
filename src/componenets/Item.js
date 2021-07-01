import React from 'react';
import './item.css'
function Item(props) {
  return (
    <li>
      <label>
        <input type="checkbox" className="item-input-checkbox" onChange={
          (e) => {
            props.item.isDone = e.target.checked;
            props.onChangeCheckBox();
          }
          } checked ={props.item.isDone} />
        <input type="text" className="item-input"
          style={{ textDecoration: props.item.isDone ? 'line-through' : 'none' }}
          value={props.item.value}
          onDoubleClick ={props.onChangeItem}
        />
      </label>
      <button className="delete-btn" onClick={() => {
        if (window.confirm('Are you sure you wish to delete this item?'))
          props.onClick();
      }}> Delete</button>

    </li>
  )
}
export default Item;