import React from "react";
import ReactDOM from "react-dom";

class ShoppingListHeader extends React.Component {
  render() {
    return <h1 className="big-header">Shopping List for {this.props.value}</h1>;
  }
}

class ShoppingLine extends React.Component {
  render() {
    return <li onClick={this.props.onLineClick}>{this.props.name}</li>;
  }
}

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Ayush"
    };
    this.handleLineClick = this.handleLineClick.bind(this);
  }

  handleLineClick(value1) {
    this.setState({ value: value1.currentTarget.innerHTML });
  }

  render() {
    return (
      <div className="shopping-list">
        <ShoppingListHeader {...this.state} />
        <ul>
          <ShoppingLine name="Ayush" onLineClick={this.handleLineClick} />
          <ShoppingLine name="Pavitra" onLineClick={this.handleLineClick} />
          <ShoppingLine name="Harsh" onLineClick={this.handleLineClick} />
          <ShoppingLine name="Atharva" onLineClick={this.handleLineClick} />
          <ShoppingLine name="Ruchita" onLineClick={this.handleLineClick} />
          <ShoppingLine name="Pooja" onLineClick={this.handleLineClick} />
          <ShoppingLine name="Chetna" onLineClick={this.handleLineClick} />
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<ShoppingList />, document.getElementById("root"));
