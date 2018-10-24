import React, { Component } from 'react';




import './App.css';

class App extends Component {

  state = ({
    header: {hover: false}
  });

  headerActive = () => {
    this.setState({
      header: {hover: true}
    });
  }

  headerDeactive = () => {
    this.setState({
      header: {hover: false}
    });
  }


  render() {
    const headerStyle = {
      height : this.state.header.hover? "7%" : "3%"
    }

    const logoStyle = {
      fontSize : this.state.header.hover? "2.5vw" : "1.1vw"
    }

    const anchorStyleLeft = {
    };
    return (
      <div className="App">
        <header style = {headerStyle}
                onMouseEnter = {this.headerActive}
                onMouseLeave = {this.headerDeactive}
        >

          <a className= "left-anchor" href = "#">  Home </a>
          <a className = "left-anchor" href = "#">  About </a>
          <a className = "left-anchor" href = "#"> Contact </a>
          <h1 style = {logoStyle}> JDSF </h1>
          <a className = "right-anchor" href = "#"> Proj 1 </a>
          <a className = "right-anchor" href = "#"> Proj 2 </a>
          <a className = "right-anchor" href = "#"> Proj 3 </a>

        </header>
      </div>
    );
  }
}

export default App;
