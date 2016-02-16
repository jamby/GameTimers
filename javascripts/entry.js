require('../sass/main.sass');
var _  = require('underscore');

'use strict';

import React from "react";
import ReactDOM from "react-dom";
// When events are triggered, the user should know what's happening
// import Speech from 'react-speech';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// // Needed for onTouchTap
// // Can go away when react 1.0 release
// // Check this repo:
// // https://github.com/zilverline/react-tap-event-plugin
// injectTapEventPlugin();

import AppBar from "material-ui/lib/app-bar";
import App from "./components/App"
import configureStore from "./store/store"
import { Provider } from "react-redux"

const AppBarExampleIcon = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more" />
);

let store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ), document.getElementById('content')
);
