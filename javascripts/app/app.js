'use strict';

import React from "react";
import reactMixin from "react-mixin";
import autobind from "autobind-decorator";
var _ = require('underscore');

import Timer from '../timer/timer';

@autobind
class App extends React.Component {
  constructor() {
    super();
    // getInitialState
    this.state = { timers: [] };
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
      this.runAction(config.action, config.time);
      // this.runFeedback(config.feedback);
    }
  }

  // Runs the action inside getSpeechConfig
  runAction(action, time) {
    if (typeof this[action] === 'function') {
      this[action](time);
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
    return [
      {
        word: 'flash', // LoL
        action: 'addTimer',
        time: 300000
        // feedback: 'Dookie'
      },
      {
        word: 'blink', // Dota 2
        action: 'addTimer',
        time: 12000
      }
    ];
  }
  // 
  // handleClick() {
  //   console.log("Dookie");
  // }

  addTimer(time) {
    // The below code is only while we have the button for adding a timer in.
    // Just for quick testing purposes.
    if (time.target)
      time = 10000;
    var timers = this.state.timers;
    var currentTime = new Date().getTime();
    var newTimer = { initialTimeRemaining: time, completeCallback: this.removeTimer, createdAt: currentTime };
    timers.push(newTimer);
    this.setState({ timers: timers });
  }

  removeTimer(timerCreatedAt) {
    var timers = this.state.timers;
    var searchTimer = _.find(timers, function(timer) { return timerCreatedAt == timer.createdAt; });
    var i = timers.indexOf(searchTimer);
    if (i != -1) {
      timers.splice(i, 1);
    }
    this.setState({ timers: timers });
  }

  renderTimer(timer) {
    return (
      <Timer
        key={timer.createdAt}
        initialTimeRemaining={timer.initialTimeRemaining}
        completeCallback={timer.completeCallback}
        createdAt={timer.createdAt}
      />
    );
  }

  render() {
    return (
      <div>
        <div style={{color: 'white'}}>Hello world!</div>
        <a className="waves-effect waves-light btn" onClick={this.addTimer}>Add Timer</a>
        {this.state.timers.map(this.renderTimer)}
      </div>
    );
  }
}

export default App;
