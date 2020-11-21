import React from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, start: true, intervalId: null };
  }
  componentDidMount() {}

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  }

  handleStart() {
    const id = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
    this.setState({ intervalId: id });
  }

  render() {
    return (
      <>
        <button className="start" onClick={() => this.handleStart()}>
          Start
        </button>
        <div className="heading-timer">{this.state.time}</div>
        <div className="ball"></div>
        <div className="hole"></div>
      </>
    );
  }
}

export default Timer;
