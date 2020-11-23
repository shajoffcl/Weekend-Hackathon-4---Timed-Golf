import React from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      x: 0,
      y: 0,
      start: false,
      intervalId: null,
      ballPosition: { top: "0px", left: "0px" }
    };
  }
  handleKeyDown(event) {
    if (!this.state.start) {
      return;
    } else if (
      this.state.ballPosition.top === "250px" &&
      this.state.ballPosition.left === "250px"
    ) {
      this.setState({ start: false });
      return;
    }
    let x1 = this.state.x;
    let y1 = this.state.y;
    if (event.key === "ArrowRight") {
      x1 += 5;
      this.setState({ x: x1 });
    } else if (event.key === "ArrowLeft") {
      x1 -= 5;
      this.setState({ x: x1 });
    } else if (event.key === "ArrowUp") {
      y1 -= 5;
      this.setState({ y: y1 });
    } else if (event.key === "ArrowDown") {
      y1 += 5;
      this.setState({ y: y1 });
    }
    this.setState({
      ballPosition: { top: this.state.y + "px", left: this.state.x + "px" }
    });
  }

  handleInterval() {
    if (!this.state.start) {
      return;
    }
    this.setState({ time: this.state.time + 1 });
  }
  componentDidMount() {
    document.addEventListener("keydown", (event) => this.handleKeyDown(event));
    const id = setInterval(() => this.handleInterval(), 1000);
    this.setState({ intervalId: id });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", (event) =>
      this.handleKeyDown(event)
    );
    clearInterval(this.state.intervalId);
  }

  handleStart() {
    this.setState({ start: true });
  }

  render() {
    return (
      <>
        <button className="start" onClick={() => this.handleStart()}>
          Start
        </button>
        <div className="heading-timer">{this.state.time}</div>
        <div className="ball" style={this.state.ballPosition}></div>
        <div className="hole"></div>
      </>
    );
  }
}

export default Timer;
