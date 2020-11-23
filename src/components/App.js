import React from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.intervalId = 0;
    this.state = {
      time: 0,
      x: "0px",
      y: "0px",
      start: false
    };
  }
  handleKeyDown(event) {
    if (!this.state.start) {
      return;
    }
    const gameEnd =
      this.state.x === "250px" && this.state.y === "250px" ? true : false;
    if (event.key === "ArrowRight" && !gameEnd) {
      this.setState({ x: +this.state.x.split("px")[0] + 5 + "px" });
    } else if (event.key === "ArrowLeft" && !gameEnd) {
      this.setState({ x: +this.state.x.split("px")[0] - 5 + "px" });
    } else if (event.key === "ArrowUp" && !gameEnd) {
      this.setState({ y: +this.state.y.split("px")[0] - 5 + "px" });
    } else if (event.key === "ArrowDown" && !gameEnd) {
      this.setState({ y: +this.state.y.split("px")[0] + 5 + "px" });
    }
  }

  handleInterval() {
    const gameEnd =
      this.state.x === "250px" && this.state.y === "250px" ? true : false;
    if (!this.state.start || gameEnd) {
      return;
    }
    this.setState({ time: this.state.time + 1 });
  }

  handleStart() {
    this.setState({ start: true });
  }

  componentDidMount() {
    document.addEventListener("keydown", (event) => this.handleKeyDown(event));
    this.intervalId = setInterval(() => this.handleInterval(), 1000);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", (event) =>
      this.handleKeyDown(event)
    );
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <>
        <button className="start" onClick={() => this.handleStart()}>
          Start
        </button>
        <div className="heading-timer">{this.state.time}</div>
        <div
          className="ball"
          style={{ top: this.state.y, left: this.state.x }}
        ></div>
        <div className="hole"></div>
      </>
    );
  }
}

export default Timer;
