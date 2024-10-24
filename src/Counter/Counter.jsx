
import { Component } from "react";
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0, 
      date: undefined,
    };
  }
  handleClick =()=>{
    this.setState(
      prevState => {
        return { counter: prevState.counter + 2 }
  }
)
};

handleReset =()=>{
  this.setState({ counter: 0 }
)
};

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click to increment!!</button>
        <button onClick={this.handleReset}>click to Reset!!</button>

        il y a {this.state.counter} secondes 

      </div>
    );
  }
}


