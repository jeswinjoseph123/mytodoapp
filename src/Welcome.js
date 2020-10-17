import React, {Component} from 'react';

class welcome extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <p>{this.props.title}</p>
            </div>
        )
    }
}
export default welcome;