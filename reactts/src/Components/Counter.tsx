import React, { Component } from 'react';
import './Counter.css';

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="counter-container">
        <h2 className="counter-title">Counter: {this.state.count}</h2>
        <div className="counter-buttons">
          <button onClick={this.increment} className="counter-button">Increase</button>
          <button onClick={this.decrement} className="counter-button">Decrease</button>
        </div>
      </div>
    );
  }
}

export default Counter;
