'use strict';

import React from "react";
import reactMixin from "react-mixin";
import autobind from "autobind-decorator";
import MixinDecorator from 'react-mixin-decorator';
import Speech from "../speech";
var _ = require('underscore');

const SpeechDecorator = MixinDecorator('SpeechDecorator', Speech);

@SpeechDecorator
@autobind
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
  testButton() {
    console.log(this);
  }

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
        <a className="waves-effect waves-light btn" onClick={this.testButton}>Stuff</a>
      </div>
    );
  }
}

// reactMixin.onClass(App, Speech);

export default App;
