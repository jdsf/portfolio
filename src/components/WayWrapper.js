import React, {Component} from 'react';
import Waypoint from 'react-waypoint';
import { CSSTransition } from 'react-transition-group';

class WayWrapper extends Component{
  constructor(props){
    super(props);

    this.state = {
      shouldShow: false
    };

    this._handleWayPointEnter = this._handleWayPointEnter.bind(this);
    this._handleWayPointLeave = this._handleWayPointLeave.bind(this);
  }

  _handleWayPointEnter = () => {
    console.log("crossed waypoint in");
    this.setState({
      shouldShow: true
    });
  }

  _handleWayPointLeave = () => {
    console.log("crossed waypoint out");
    this.setState({
      shouldShow: false
    })
  }



  render(){
    const visible = {
      opacity:  this.state.opacity
    };

    return(
      <Waypoint
        onEnter = {this._handleWayPointEnter}
        onLeave = {this._handleWayPointLeave}
      >
        <div className = "way-wrapper">
          <CSSTransition
            mountOnEnter
            unmountOnExit
            in = {this.state.shouldShow}
            timeout = {this.props.timeout}
            classNames = {this.props.name}
          >
            {this.props.children}
          </CSSTransition>
        </div>
      </Waypoint>
    )
  }
}

export default WayWrapper;
