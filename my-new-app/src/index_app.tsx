import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css'
import AppTheme from "./AppTheme";
import {Provider} from 'react-redux'
import store from "./stores/electron_store";

function render() {
    localStorage.setItem('DIR', '/Users/apple/Desktop/untitled')

    ReactDOM.render(<Provider store={store}>
        <AppTheme/>
    </Provider>, document.getElementById('root'));
}

render();