import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import rootReducer from './reducers/index';
import { addCharacterById } from './actions';

//creating store
const store = createStore(rootReducer);

//subscribe
store.subscribe(()=>console.log('store', store.getState()));

store.dispatch(addCharacterById(2));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

