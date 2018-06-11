import {createStore, applyMiddleware} from 'redux';
import {create} from './reducers';
import thunk from 'redux-thunk';


const store = createStore(
    create,
    applyMiddleware(thunk)
);

export default store;