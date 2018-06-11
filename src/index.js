import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'


import Top from './containers/top';
import store from './redux/store';

ReactDOM.render((
    <Provider store={store}>
        <Top />
    </Provider>
), document.getElementById('root'));

