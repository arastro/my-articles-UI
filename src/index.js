import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import Container from './container/container.js';
import reducer from './module/articles.js';

const enhancers = []

if (process.env.NODE_ENV === 'development') {
    const { devToolsExtension } = window;
  
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

let store = createStore(reducer,compose(applyMiddleware(thunk),...enhancers));

class App extends React.Component{

    render(){
        return(
            <Container></Container>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

