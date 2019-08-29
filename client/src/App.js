import React from 'react';

import {Provider} from 'react-redux';
import store from './store/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Components
import Todo from './components/todo';




function App() {
  return (
    <Provider store = {store} >
      <div className="App">
          <Todo />
      </div>
    </Provider>
  );
}

export default App;
