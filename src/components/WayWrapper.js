import React, {Component} from 'react';
import Waypoint from 'react-waypoint';
import { CSSTransition } from 'react-transition-group';

class WayWrapper extends Component{
  constructor(props){
    super(props);

    this.state = {
      shouldShow: false
    };

  }

  handleWayEnter = () => {
    this.setState({
      shouldShow: true
    });
  }

  handleWayLeave = () => {
    this.setState({
      shouldShow: false
    })
  }


  render(){
    const visible = {
      opacity:  this.state.opacity
    };

    return(
        <div
          id = {this.props.eyeD? this.props.eyeD : undefined}
          className = {this.props.classNaym? this.props.classNaym : undefined}
        >
          <Waypoint
            onEnter = {this.handleWayEnter}
            onLeave = {this.handleWayLeave}
            topOffset = {this.props.top? this.props.top:undefined}
            bottomOffset = {this.props.bot? this.props.bot:undefined}
            debug = {this.props.debug? this.props.debug: undefined}
          />
          <CSSTransition
            mountOnEnter
            unmountOnExit
            in = {this.state.shouldShow}
            timeout = {
              () => {
                if (this.props.timeout){
                  return this.props.timeout
                } else if (this.state.shouldShow) {
                  return this.props.timeoutIn
                } else {
                  return this.props.timeoutOut
                }
              }
            }
            classNames = {this.props.name}
          >
            {this.props.children}
          </CSSTransition>
        </div>
    )
  }
}

export default WayWrapper;
