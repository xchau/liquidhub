import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this._changeValue = this._changeValue.bind(this);
  }

  _changeValue(type, step) {
    let curCount = this.state.count;

    if (type === 'inc') {
      curCount += step;

      this.setState({ count: curCount });
    }
    else {
      curCount -= step;

      this.setState({ count: curCount });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-IncDecBox">
          <div className="App-DisplayBox">
            { this.state.count }
          </div>
          <div className="App-ControlPanel">
            <button
              className="App-Button"
              onClick={() => this._changeValue('inc', 1)}
            >
              Increment
            </button>
            <button
              className="App-Button"
              onClick={() => this._changeValue('dec', 1)}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
