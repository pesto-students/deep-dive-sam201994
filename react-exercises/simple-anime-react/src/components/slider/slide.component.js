import React, { Component } from 'react';
import slide from './slide';

class Slide extends Component {
  static defaultProps = {
    slide: slide,
    defaultConfig: {
      duration: 2000,
      distance: 100,
      movement: 'up'
    }
  };

  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentDidUpdate(prevProps, prevState) {
    this.startAnimation();
  }

  componentWillUnmount() {}

  startAnimation() {
    return new slide(this.rootNode, this.getConfig());
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

export default Slide;
