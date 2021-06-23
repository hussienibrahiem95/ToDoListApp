import React , {Component} from 'react';
import Item from './Item'
import "./item.css";
class Items extends Component{
    constructor(props){
        super(props);
    }
    renderItem(item,idx){
        return (
             <Item item ={item}  
                onClick = {()=> this.props.onClick(idx)}
                onChangeCheckBox = {()=> this.props.onChangeCheckBox(idx)}
                onChangeItem = {()=> this.props.onChangeItem(idx,item.value)}
             />
        )
    }
    render(){
        let items_display = this.props.items.map(
            (item,index)=>{
              if(item.value){
                return (
                    <div key = {index}>
                        {this.renderItem(item,index)}
                    </div>
                )
              }
            })
        return (
            <ul className="theList">
                {items_display}
            </ul> 
        )
    }
}

export default Items;