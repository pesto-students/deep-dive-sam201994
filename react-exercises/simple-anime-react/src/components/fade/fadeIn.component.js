import React, { Component } from 'react';
import fade from './fade';

class FadeIn extends Component {
  static defaultProps = {
    fade: fade,
    defaultConfig: {
      duration: 2000,
      easeEffect: 'in'
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
    return new fade(this.rootNode, this.getConfig());
  }

  getConfig() {
    const config = { ...this.props.defaultConfig, ...this.props.config, ...this.props.style };
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

export default FadeIn;
