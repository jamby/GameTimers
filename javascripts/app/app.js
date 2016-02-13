'use strict';

import React from "react";
import reactMixin from "react-mixin";
import autobind from "autobind-decorator";
var _ = require('underscore');

@autobind
class App extends React.Component {
  constructor() {
    super();
    // getInitialState
    // this.setState({ voiceRecognition: null, results: [] });
  }

  componentDidMount() {
    if (window.webkitSpeechRecognition) {
      this.startWebkitSpeechRecognition();
      // this.recognition = new webkitSpeechRecognition();
      // this.recognition.onresult = (e) => {
      //   var transcript = this.getLastTranscript(e.results);
      //   console.log(e.results);
      //   this.getSpeechConfig().forEach(this.findMatch.bind(this, transcript));
      // };
      // this.recognition.continuous = true;
      // this.recognition.start();
      // this.recognition.onend = function() {
      //   console.log("Speech recognition has ended.");
      // }
    }
  }

  componentWillUnmount() {
    if (this.recognition) {
      this.recognition.stop();
    }
  }

  startWebkitSpeechRecognition() {
    this.recognition = new webkitSpeechRecognition();
    this.recognition.onresult = (e) => {
      var transcript = this.getLastTranscript(e.results);
      console.log(e.results);
      this.getSpeechConfig().forEach(this.findMatch.bind(this, transcript));
    };
    this.recognition.continuous = true;
    this.recognition.start();
    this.recognition.onend = () => {
      console.log("Speech recognition has ended.");
      this.startWebkitSpeechRecognition();
      console.log("Speech recognition should start.");
    }
  }

  // Gets last Transcript of the Speech
  getLastTranscript(results) {
    return results[results.length - 1][0].transcript;
  }


  // Finds a match of what we have in getSpeechConfig
  findMatch(transcript, config) {
    if (transcript.indexOf(config.word) > -1) {
      this.runAction(config.action);
      this.runFeedback(config.feedback);
    }
  }

  // Runs the action inside getSpeechConfig
  runAction(action) {
    if (typeof this[action] === 'function') {
      this[action]();
    }
  }

  // Runs the feedback (voice) from inside getSpeechConfig
  runFeedback(feedback) {
    if (feedback && window.SpeechSynthesisUtterance) {
      var message = new SpeechSynthesisUtterance(feedback);
      speechSynthesis.speak(message);
    }
  }

  getSpeechConfig() {
    return [{
      word: 'click',
      action: 'handleClick',
      feedback: 'Dookie'
    }];
  }

  handleClick() {
    console.log("Dookie");
  }

  render() {
    return (
      <div>
        <div style={{color: 'white'}}>Hello world!</div>
        <a className="waves-effect waves-light btn">Stuff</a>
      </div>
    );
  }
}

export default App;
