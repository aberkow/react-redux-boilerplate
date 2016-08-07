import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './js/store';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Provider store={store}>
        //Whatever main component goes here.
      </Provider>
    );
  }
};

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<App />, document.getElementById('app'));
});
