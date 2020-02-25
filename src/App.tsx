import React from 'react';
import logo from './logo.svg';
import './App.css';
import Confirm from './confirm';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <Confirm
        title='React and TypeScript'
        content='Are you sure you want to learn React and Typescript?'
        cancelCaption='No way'
        okCaption='Yes please!'
      />
    </div>
  );
}

export default App;