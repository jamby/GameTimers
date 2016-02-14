'use strict';

import React from "react";
import autobind from "autobind-decorator";
var _ = require('underscore');

@autobind
class Timer extends React.Component {
  constructor() {
    super();

    this.state = { timeRemaining: 0, timeoutId: null, prevTime: null };
  }

  componentWillMount() {
    this.setState({ timeRemaining: this.props.initialTimeRemaining });
  }

  componentDidMount() {
    this.tick();
  }

  componentDidUpdate() {
    if ((!this.state.prevTime) && this.state.timeRemaining > 0) {
      this.tick();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeoutId);
  }

  tick() {
    var currentTime = Date.now();
    var dt = this.state.prevTime ? (currentTime - this.state.prevTime) : 0;
    var interval = this.props.interval;

    // correct for small variations in actual timeout time
    var timeRemainingInInterval = (interval - (dt % interval));
    var timeout = timeRemainingInInterval;

    if (timeRemainingInInterval < (interval / 2.0)) {
      timeout += interval;
    }

    var timeRemaining = Math.max(this.state.timeRemaining - dt, 0);
    var countdownComplete = (this.state.prevTime && timeRemaining <= 0);
    console.log("countdownComplete is");
    console.log(countdownComplete);

    if (this.state.timeoutId) { clearTimeout(this.state.timeoutId); }
    this.setState({
      timeoutId: countdownComplete ? null : setTimeout(this.tick, timeout),
      prevTime: currentTime,
      timeRemaining: timeRemaining
    });

    if (countdownComplete) {
      console.log("inside countdownComplete");
      if (this.props.completeCallback) { this.props.completeCallback(this.props.createdAt); }
      return;
    }

    if (this.props.tickCallback) {
      this.props.tickCallback(timeRemaining);
    }
  }

  getFormattedTime(milliseconds) {
    if (this.props.formatFunc) {
      return this.props.formatFunc(milliseconds);
    }

    var totalSeconds = Math.round(milliseconds / 1000);

    var seconds = parseInt(totalSeconds % 60, 10);
    var minutes = parseInt(totalSeconds / 60, 10) % 60;
    var hours = parseInt(totalSeconds / 3600, 10);

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    return hours + ':' + minutes + ':' + seconds;
  }

  removeTimer() {
    this.props.completeCallback(this.props.createdAt);
  }

  render() {
    var timeRemaining = this.state.timeRemaining;

    return (
      <div className="row">
        <div className="col s12 m3">
          <div className="card blue-grey lighten-5">
            <div className="card-content black-text">
              {this.getFormattedTime(timeRemaining)}
              <span className="right">
                <i className="fa fa-times fa-lg" style={{ cursor: "pointer "}} onClick={this.removeTimer}/>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Timer.propTypes = {
  initialTimeRemaining: React.PropTypes.number.isRequired,
  interval: React.PropTypes.number,
  formatFunc: React.PropTypes.func,
  tickCallback: React.PropTypes.func,
  completeCallback: React.PropTypes.func
};
Timer.defaultProps = {
  interval: 1000,
  formatFunc: null,
  tickCallback: null,
  completeCallback: null
};

export default Timer;