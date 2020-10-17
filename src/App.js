import React,{Component} from 'react';
import './App.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state={
            items :[],
            txtcontent : ""
        };
    }
    txtchange=(e)=>{
        this.setState({txtcontent:e.target.value})
    }
    additm=(e)=>{
        let currnt= this.state.txtcontent;
        let currntitms = this.state.items;
        currntitms.push(currnt);
        this.setState({items:currntitms});
    }
    remove =(i)=>{
        if(!window.confirm("Are you sure you want to delete this?")){
            return;
        }
        let currntitms=this.state.items;
        currntitms.splice(i,1);
        this.setState({items:currntitms});
    }
    render(){
        
        return(
            <div className="main">
                <input className="textbox" type="text" onChange ={this.txtchange} />
                <br/>
                <button className="button" onClick={this.additm}>Add</button>
                <ul className="list">
                    {this.state.items.map((itm,k)=>{
                        return(
                        <li className="type">{itm}  <button className="delete" onClick={ ()=>{this.remove(k)}}>Delete</button></li>
                        )
                    })}
                </ul>
                
            </div> 
            
              
        )
    }
}
export default App;
