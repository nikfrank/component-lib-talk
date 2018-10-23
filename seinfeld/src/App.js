import React, { Component } from 'react';
import './App.css';

import { Dropdown } from 'component-lib-boilerplate';

import jerry from './jerry.png';
import kramer from './kramer.png';

const people = {
  jerry, kramer
};

class App extends Component {
  state = {
    person: 'jerry',
    quote: 'yada yada yada',
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">

          
          <div className='quotation'>
            <img className='talking-head' src={people[this.state.person]}/>
            <div className='speech-bubble'>
              <p>{this.state.quote}</p>
            </div>
          </div>
          <br/>
          
          <select value={this.state.person} onChange={e=> this.setState({ person: e.target.value })}>
            {
              Object.keys(people).map(name => (
                <option value={name} key={name}>{name}</option>
              ) )
            }
          </select>
          <br/>
          
          <textarea value={this.state.quote} onChange={e=> this.setState({ quote: e.target.value })}/>
        </header>
      </div>
    );
  }
}

export default App;
