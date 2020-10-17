import React,{Component} from 'react';

class Demonew extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            enable:false,
            textcontent:"none"
        };
    }
    in=()=>{
        this.setState( (prev,props)=>(

            {counter:prev.counter+1}

        ));
    }
    textchange =(e)=>{
            
        this.setState({textcontent:e.target.value})

    }
    checkCliked=()=>{
        this.setState((prev,props)=>(
            {enable: !prev.enable}
        ))
    }
    de=()=>{
        this.setState( (prev,props)=>(

            {counter:prev.counter-1}

        ));
    }
    
    render(){
        return(
            <div>
                <button onClick={this.in}>+</button>
                <button onClick={this.de}>-</button>
        <p>u clicked{this.state.counter} times</p>




        <input onChange={this.textchange} type="text"/><br/>
        <h3>{this.state.textcontent}</h3>

      






        <label>
            Enable
        <input type="checkbox" onClick={this.checkCliked}/>
        </label>
        <p>it is {this.state.enable? "enabled":"disabled"}</p>
        
            </div>
        )
    }
}
export default Demonew;