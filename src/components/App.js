import React from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, render: false };
  }
  componentDidMount() {}

  componentWillUnmount() {}

  handleStart() {
    this.setState({ render: true });
  }
  renderChoice() {
    if (this.state.render) {
      return (
        <>
          <div className="ball"></div>
          <div className="hole"></div>
        </>
      );
    }
  }

  render() {
    return (
      <>
        <button className="start" onClick={() => this.handleStart()}>
          Start
        </button>
        {this.renderChoice()}
      </>
    );
  }
}

export default Timer;
