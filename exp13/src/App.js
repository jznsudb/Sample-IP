import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }
  updateState(e) {
    this.setState({ data: e.target.value });
  }
  clearInput() {
    this.setState({ data: "" });
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }
  render() {
    return (
      <div className="container">
        <input
          value={this.state.data}
          onChange={this.updateState}
          ref="myInput"
        ></input>
        <button onClick={this.clearInput}>CLEAR</button>
        {console.log(this.state.data)}
      </div>
    );
  }
}
export default App;
