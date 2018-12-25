import React, { Component } from 'react';
import {TransitionGroup, CSSTransition } from 'react-transition-group';



import zen from '../assets/zen1.jpg';
import notes from '../assets/notes1.jpg'
import nutri from '../assets/nutri1.jpg'

class Carousel extends Component {


  constructor(props) {
    super(props);
    this.state = ({
      images: [zen, notes, nutri],
      blurbs: [
        "A simple zen styled responsive web page in vanilla js",
        "Light responsive single page diary app using browser storage"
        + " and made with react",
        "A nutrition app that uses FDA food API " +
         "to search for and show nutrient tallies for user choices, " +
         "made with react"
      ],
      links: ["https://jdsf.github.io/zen-page/",
              "https://jdsf.github.io/notes-react/",
              "https://jdsf.github.io/nutrition-react"
              ],
      count: props.count,
      hover: false,
      transitioning: true
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
    let linkList = this.state.links;
    let place = this.state.count;
    let altString = "Project number " + (place + 1);

    let blurb = blurbList[place];
    let image = imageList[place];
    let link = linkList[place];



    const anchorStyle = {
      opacity: (this.state.hover ? "1" : "0")
    };

    const screenStyle = {
      opacity: (this.state.hover ? "0" : ".5")
    };

    const blurbStyle = {
      opacity: (this.state.hover ? "0" : "1"),
      transition: "all 1000ms ease"
    };

    return (
      <div id = "thumbnail-container">
        <div id = "image-container">
          <TransitionGroup>
            <CSSTransition
              key = {this.state.count}
              timeout = {1000}
              classNames = "image"
            >
              <img className = {"image-number-" + this.state.count}
                   src = {image} alt = {altString}
              />
            </CSSTransition>
          </TransitionGroup>
        </div>
        <a href = {link}
           style = {anchorStyle}
         >
          <span> Visit </span>
        </a>
        <div className = "screen"
          style = {screenStyle}
        >
        </div>
        <TransitionGroup style = {blurbStyle}>
          <CSSTransition
            key = {this.state.count}
            timeout = {1000}
            classNames = "blurb"
          >
            <p >
              {blurb}
            </p>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }

  buildDots = () => {
    let dots = []
    let active = this.state.count;
    for (let i = 0; i < this.state.blurbs.length; i++) {
      dots.push(
        <div
          className = {( i === active) ?
            "active-dot" : undefined
          }
        >
        </div>
      );
    }

    return dots;
  }

  componentWillReceiveProps(props) {
    this.setState({
      count: props.count
    });
  }
  render(){
    let carousel = this.buildThumb();
    let dots = this.buildDots();

    return(
      <div style = {
        {width: "100%", height: "100%", position: "relative"}
      }>
        <div
          style = {
            {width: "100%", height: "100%", position: "relative"}
          }
          onMouseEnter = {this.hoverOn.bind(this)}
          onMouseLeave = {this.hoverOff.bind(this)}
        >
          {carousel}
        </div>
        <div id = "dots">
          {dots}
        </div>
      </div>
    );
  }

}

export default Carousel;
