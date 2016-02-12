require('../sass/main.sass');
var _  = require('underscore');

'use strict';

import React from "react";
import ReactDOM from "react-dom";
// import injectTapEventPlugin from 'react-tap-event-plugin';
// // Needed for onTouchTap
// // Can go away when react 1.0 release
// // Check this repo:
// // https://github.com/zilverline/react-tap-event-plugin
// injectTapEventPlugin();

import AppBar from 'material-ui/lib/app-bar';

const AppBarExampleIcon = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more" />
);

ReactDOM.render((
  <div className="myDiv">
    Hello Electron!
    <AppBarExampleIcon></AppBarExampleIcon>
  </div>
), document.getElementById('content'));
