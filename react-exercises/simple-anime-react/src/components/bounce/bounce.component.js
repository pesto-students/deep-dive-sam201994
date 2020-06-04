import React, { Component } from 'react';
import bounce from './bounce';

class Bounce extends Component {
  static defaultProps = {
    bounce: bounce
  };

  constructor(props) {
    super(props);
    //TODO: validate props types
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  startAnimation() {
    return new bounce(this.rootNode);
  }

  setRef(node) {
    this.rootNode = node;
  }

  render() {
    return (
      <div style={{ position: 'relative' }} ref={this.setRef}>
        {this.props.children}
      </div>
    );
  }
}

export default Bounce;
