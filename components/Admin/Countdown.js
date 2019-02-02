import React, { Component } from "react";

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      min: 0,
      sec: 0
    };
  }

  startTime() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    const timeLeft = {
      min: 0,
      sec: 0
    };

    // calculate time difference between now and expected date
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  formatNumber(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value.split("").map((x, i) => (
      <span style={{ display: "inline-block", width: "0.7em" }} key={i}>
        {x}
      </span>
    ));
  }

  render() {
    const countDown = this.state;
    return (
      <div className="Countdown">
        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.formatNumber(countDown.min)}</strong>
            <span>Min</span>
          </span>
        </span>
        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>:</strong>
          </span>
        </span>
        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.formatNumber(countDown.sec)}</strong>
            <span>Sec</span>
          </span>
        </span>
      </div>
    );
  }
}

export default Countdown;