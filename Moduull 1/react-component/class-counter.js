class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCounter = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrementCounter}>-1</button>
        <button onClick={this.incrementCounter}>+1</button>
      </div>
    );
  }
}
// ReactDOM.render(<Counter />, document.getElementById("class-counter"));
ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
