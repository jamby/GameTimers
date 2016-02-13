import React from "react";
import autobind from "autobind-decorator";

module.exports = {

  componentDidMount() {
    if (window.webkitSpeechRecognition) {
      this.recognition = new webkitSpeechRecognition();
      var context = this;
      this.recognition.onresult = function(e) {
        var transcript = context.getLastTranscript(e.results);
        this.getSpeechConfig().forEach(context.findMatch.bind(this, transcript));        
      };
      this.recognition.continuous = true;
      this.recognition.start();
    }
  },

  componentWillUnmount() {
    if (this.recognition) {
      this.recognition.stop();
    }
  },

  getLastTranscript(results) {
    return results[results.length - 1][0].transcript;
  },

  findMatch(transcript, config) {
    if (transcript.indexOf(config.word) > -1) {
      this.runAction(config.action);
      this.runFeedback(config.feedback);
    }
  },

  runAction(action) {
    if (typeof this[action] === 'function') {
      this[action]();
    }
  },

  runFeedback(feedback) {
    if (feedback && window.SpeechSynthesisUtterance) {
      var message = new SpeechSynthesisUtterance(feedback);
      speechSynthesis.speak(message);
    }
  }

};
