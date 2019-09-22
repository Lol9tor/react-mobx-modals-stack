import React from 'react';

import Main from './components/Main'
import ModalsStackViewer from './components/ModalsStackViewer'
import modalsStore from './stores/modals'

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Main modalsStore={modalsStore}/>
      <div>
        <ModalsStackViewer modalsStore={modalsStore}/>
      </div>
    </div>
  );
}

export default App;
