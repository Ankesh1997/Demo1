import React, { Component } from 'react'

export default class First extends Component {
    constructor(props){
        super(props)
         this.state={
            count : 1
        }
    }

    render(){
        return(
            <div>
                <p>The current count {this.state.count}</p>
                <div>
                <button onClick={this.setState({count : this.state.count + 1})}>
                    add
                </button>
                <button onClick={this.setState({count : this.state.count - 1})}>
                    sub
                </button>
                </div>
            </div>
        )
    }
}