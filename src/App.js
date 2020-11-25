import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxColors: Array(200)
    };
  }

  handleMouseOver = (i) => {
    const newColors = this.state.boxColors.slice();
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    newColors[i] = "#" + randomColor;
    this.setState({ boxColors: newColors });
  }

  render() {
    const boxes = [];

    for (let i = 0; i < this.state.boxColors.length; i++) {
      boxes.push(this.renderBox(i));
    }
    return (
      <section>
        {boxes}
      </section>
    )
  }

  renderBox = (i) => {
    return (
      <Box
        key={i}
        handleMouseOver={() => this.handleMouseOver(i)}
        bgColor={this.state.boxColors[i]}
      />
    )
  }
}

function Box(props) {
  return (
    <div
      className="box"
      onMouseOver={props.handleMouseOver}
      style={{ backgroundColor: props.bgColor }}
    >

    </div>
  );
}

export default App;

