import React, { Component } from 'react';
import pulse from './pulse';

class Pulse extends Component {
  static defaultProps = {
    pulse: pulse,
    defaultConfig: {
      duration: 2000,
      scalingFactor: 2
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
    this._animation = new pulse(this.rootNode, this.getConfig());
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

export default Pulse;
