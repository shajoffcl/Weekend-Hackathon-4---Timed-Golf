import React from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      x: 0,
      y: 0,
      top: "0px",
      left: "0px",
      start: false,
      intervalId: null
    };
  }
  handleKeyDown(event) {
    if (!this.state.start) {
      return;
    } else if (this.state.top === "250px" && this.state.left === "250px") {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null });
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
    this.setState({ top: this.state.y + "px", left: this.state.x + "px" });
  }
  componentDidMount() {
    document.addEventListener("keydown", (event) => this.handleKeyDown(event));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", (event) =>
      this.handleKeyDown(event)
    );
  }

  handleStart() {
    const id = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
    this.setState({ intervalId: id, start: true });
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
          style={{ top: this.state.top, left: this.state.left }}
        ></div>
        <div className="hole"></div>
      </>
    );
  }
}

export default Timer;
