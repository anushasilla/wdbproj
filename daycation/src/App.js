/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class ActivityCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: null,
          image: null,
          category: null,
          location: null,
          rating: null,
          description: null,
        };
    }

    render() {
        return (
            <div>
              <div className="card">
                <img src={this.props.image} className="image"></img>
                <div className="information">
                    <div className="activity-name">{this.props.name}</div>
                    <div className="subtitle">
                      <div className="category">{this.props.category}</div>
                      <div className="location">{this.props.location}</div>
                    </div>
                    <div className="rating">{this.props.rating}</div>
                    <div className="description">{this.props.description}</div>
                </div>
                
              </div>
            </div>
        );
    }
}

// ====================================================

function App() {
  return (
    <ActivityCard name="Big C" image="assets/big-c.jpg" category="chill" location="Berkeley" description="Activity description goes here.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend vitae dui ut et al bibendum vitae. Lorem ipsum dolor sit"/>

  );
}

export default App;