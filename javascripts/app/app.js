'use strict';

import React from "react";
var speech = require('../speech');
var _ = require('underscore');

class App extends React.Component {
  constructor() {
    super();
    // getInitialState
    this.setState({ voiceRecognition: null, results: [] });
  }

  componentWillMount() {

  }

  componentDidMount() {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = (event) => { 
      var results = this.state.results;
      var transcripts = []
      _.each(event.results, function(speechresult, v) {
        // console.log(k);
        // if(_result.transcript) 
        //   transcripts.push(_result.transcript)
        _.each(event.results, function(sprs, v){
          console.log(sprs);
          if(sprs.transcript) 
            transcripts.push(sprs.transcript)
        });
      });
      console.log(transcripts);
      results << event.results;
      this.setState({results});
      console.log(event.results);
    }
    recognition.start();
    this.setState({ voiceRecognition: recognition });
  }
  
  render() {
    return (
      <div>
        <div style={{color: 'white'}}>Hello world!</div>
      </div>
    );
  }
}

export default App;