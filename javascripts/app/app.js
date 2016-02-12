'use strict';

import React from "react";
import ReactMixin from "react-mixin";
var speech = require('../speech');
var _ = require('underscore');

class App extends React.Component {
  constructor() {
    super();
    // getInitialState
    // this.setState({ voiceRecognition: null, results: [] });
  }

  // componentWillMount() {
  //
  // }

  // componentDidMount() {
  //   // var recognition = new webkitSpeechRecognition();
  //   // recognition.continuous = true;
  //   // // recognition.interimResults = true;
  //   // recognition.onresult = (event) => {
  //   //   var results = this.state.results;
  //   //   var transcripts = []
  //   //   _.each(event.results, function(speechresult, v) {
  //   //     _.each(speechresult, function(sprs, v){
  //   //       if(sprs.transcript)
  //   //         transcripts.push(sprs.transcript)
  //   //     });
  //   //   });
  //   //   console.log(transcripts);
  //   //   results << event.results;
  //   //   this.setState({results});
  //   //   // console.log(event.results);
  //   // }
  //   // recognition.start();
  //   // this.setState({ voiceRecognition: recognition });
  // }

  getSpeechConfig() {
    return [{
      word: 'click',
      action: 'handleClick',
      feedback: 'clicking'
    }];
  }

  handleClick() {
    console.log("Dookie");
  }

  render() {
    return (
      <div>
        <div style={{color: 'white'}}>Hello world!</div>
      </div>
    );
  }
}

ReactMixin.onClass(App, speech);

export default App;
