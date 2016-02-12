require('../sass/main.sass');
var _  = require('underscore');
var speech = require('./speech');

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

import AppBar from 'material-ui/lib/app-bar';
//
// class App = React.createClass({
//   mixins: [],
//   componentWillUnmount() {
//
//   },
//   getSpeechConfig() {
//     return [{
//       word: 'click',
//       action: 'handleClick',
//       feedback: 'clicking'
//     }];
//   },
//   handleClick() {
//     console.log('clicked');
//   },
//   render() {
//
//   }
// });

const AppBarExampleIcon = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more" />
);

ReactDOM.render((
  <div className="myDiv">
    Hello Electron!
    <AppBarExampleIcon></AppBarExampleIcon>
    {/*<Speech text="Welcome to react speech" />*/}
  </div>
), document.getElementById('content'));
