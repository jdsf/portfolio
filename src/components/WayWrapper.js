import React, {Component} from 'react';
import Waypoint from 'react-waypoint';
import { CSSTransition } from 'react-transition-group';

class WayWrapper extends Component{
  constructor(props){
    super(props);

    this.state = {
      topInView: false,
      botInView: false,
      shouldShow: true
    };

  }

  handleWay1Enter = () => {
    if (this.state.botInView){
      this.setState({
        topInView: true,
        shouldShow: true
      });
    } else {
      this.setState({
        topInView: true
      });
    }
  }

  handleWay1Leave = () => {
    this.setState({
      topInView: false,
      shouldShow: false
    })
  }
  handleWay2Enter = () => {
    if (this.state.topInView){
      this.setState({
        botInView: true,
        shouldShow: true
      });
    } else {
      this.setState({
        botInView: true
      });
    }
  }

  handleWay2Leave = () => {
    this.setState({
      botInView: false,
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
            scrollableAncestor = {this.props.scrollRef?
              this.props.scrollRef: undefined}
            onEnter = {this._handleWayPointEnter}
            onLeave = {this._handleWayPointLeave}
            className = "way-1"
          />
          <CSSTransition
            mountOnEnter
            unmountOnExit
            appear = {true}
            in = {this.state.shouldShow}
            timeout = {this.props.timeout}
            classNames = {this.props.name}
          >
            {this.props.children}
          </CSSTransition>
          <Waypoint
            className = "way-2"
            debug = {this.props.debug ?  this.props.debug: undefined}
            scrollableAncestor = {this.props.scrollRef?
              this.props.scrollRef: undefined}
            onEnter = {this._handleWayPointEnter}
            onLeave = {this._handleWayPointLeave}
          />
        </div>
    )
  }
}

export default WayWrapper;
