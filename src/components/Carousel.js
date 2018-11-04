import React, { Component } from 'react';



import zen from '../assets/zen.png';
import notes from '../assets/notes.png'

class Carousel extends Component {


  constructor(props) {
    super(props);
    this.state = ({
      images: [zen, notes],
      blurbs: [
        "A simple zen-styled page made with vanilla js",
        "A light-weight daily notes/diary page"
      ],
      count: 0,
      hover: false
    });
  }

  hoverOn = () => {
    this.setState({
      hover: true
    });
  }

  hoverOff = () => {
    this.setState({
      hover: false
    });
  }

  buildThumb = () => {
    let blurbList = this.state.blurbs;
    let imageList = this.state.images;
    let place = this.state.count;
    let altString = "Project number " + (place + 1);

    let blurb = blurbList[place];
    let image = imageList[place];



    const anchorStyle = {
      opacity: (this.state.hover ? "1" : "0")
    };

    const screenStyle = {
      opacity: (this.state.hover ? "0" : ".5")
    };

    const blurbStyle = {
      opacity: (this.state.hover ? "0" : "1")
    };

    return (
      <div id = "thumbnail-container">
        <div id = "image-container">
          <img src = {image} alt = {altString}/>
        </div>
        <a href = "#"
           style = {anchorStyle}
         >
          <span> Visit </span>
        </a>
        <div className = "screen"
          style = {screenStyle}
        >
        </div>
        <p style = {blurbStyle}>
          {blurb}
        </p>
      </div>
    );
  }

  render(){
    let carousel = this.buildThumb();


    return(
      <div onMouseEnter = {this.hoverOn.bind(this)}
        onMouseLeave = {this.hoverOff.bind(this)}
      >
        {carousel}
      </div>
    );
  }

}

export default Carousel;
