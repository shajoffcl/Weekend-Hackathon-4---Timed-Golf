import React from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 };
  }
  componentDidMount() {}

  componentWillUnmount() {}

  handleStart() {}

  render() {
    return (
      <>
        <button className="start" onClick={() => this.handleStart()}>
          Start
        </button>
        <div className="ball"></div>
        <div className="hole"></div>
      </>
    );
  }
}

export default Timer;
