import React, { Component } from 'react';
import bounce from './bounce';

class Bounce extends Component {
  static defaultProps = {
    bounce: bounce,
    defaultConfig: {
      duration: 2000,
      background: 'red',
      height: 100,
      width: 100,
      reverse: false
    }
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
    return new bounce(this.rootNode, this.getConfig());
  }

  getConfig() {
    const config = { ...this.props.defaultConfig, ...this.props.config, ...this.props.style };
    console.log(config);
    return config;
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
