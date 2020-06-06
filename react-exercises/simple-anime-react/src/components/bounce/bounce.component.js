import React, { Component } from 'react';
import bounce from './bounce';

class Bounce extends Component {
  static defaultProps = {
    bounce: bounce,
    defaultConfig: {
      duration: 2000,
      easeEffect: 'out',
      movement: 'down'
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
    this._animation = new bounce(this.rootNode, this.getConfig());
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
