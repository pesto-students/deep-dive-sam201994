import React, {Component} from 'react';

/* color (String) - Pulse color
 diameter (Number) - Max diameter for pulse (default 400)
 duration (Number) - Duration in milliseconds this is the delay new pulses will be created. (Default 1000)
 initialDiameter (Number) - The diameter new pulses will start with. (Default 0)
 numPulses (Number) - This is the number of pulses that will be rendered. (Default 3)
 pulseStyle (Object) - Style properties for pulses (borderColor eg.)
 speed (Number) - Speed in milliseconds pulse will redraw. (Defaults 10)
 style (Object) - Style propertie */

const styles = {
  container: {
    left: 0,
    right: 0,
  },
  pulse: {
    position: 'absolute',
    flex: 1,
  },
};

export default class Pulse extends Component {
  static defaultProps = {
    color: 'blue',
    diameter: 400,
    duration: 1000,
    image: null,
    initialDiameter: 0,
    numPulses: 3,
    pulseStyle: {},
    speed: 10,
    style: {
      top: 0,
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      duration: this.props.duration,
      image: this.props.image,
      maxDiameter: this.props.diameter,
      numPulses: this.props.numPulses,
      pulses: [],
      pulseStyle: this.props.pulseStyle,
      speed: this.props.speed,
      started: false,
      style: this.props.style,
      last: 0,
    };
  }

  mounted = true;

  startAnimation = speed => {
    let last = 0;
    const context = this;
    function animate(now) {
      if (!last || now - last >= speed) {
        last = now;
        context.updatePulse();
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  };

  loadPulses = (numPulses, duration) => {
    let last = 0;
    let count = 0;
    const context = this;
    function animate(now) {
      if (!last || now - last >= count*duration) {
        last = now;
        count = count + 1
        context.createPulse(count);
      }
      if(count < numPulses)
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  };

  componentDidMount() {
    const {numPulses, duration, speed} = this.state;
    this.setState({started: true});
    this.loadPulses(numPulses, duration)
    this.startAnimation(speed);
  }

  createPulse = pKey => {
    if (this.mounted) {
      let pulses = this.state.pulses;
      let pulse = {
        pulseKey: `key-${pKey}`,
        diameter: this.props.initialDiameter,
        opacity: 0.5,
        centerOffset: (this.state.maxDiameter - this.props.initialDiameter) / 2,
      };

      pulses.push(pulse);
      this.setState({pulses});
    }
  };

  updatePulse = () => {
    if (this.mounted) {
      const pulses = this.state.pulses.map((p, i) => {
        let maxDiameter = this.state.maxDiameter;
        let newDiameter = p.diameter > maxDiameter ? 0 : p.diameter + 2;
        let centerOffset = (maxDiameter - newDiameter) / 2;
        let opacity = Math.abs(newDiameter / this.state.maxDiameter - 1);

        let pulse = {
          pulseKey: i + 1,
          diameter: newDiameter,
          opacity: opacity > 0.5 ? 0.5 : opacity,
          centerOffset: centerOffset,
        };
        return pulse;
      });
      this.setState({pulses});
    }
  };

  render() {
    const {color, maxDiameter, pulses, started, pulseStyle} = this.state;
    const containerStyle = {...styles.container};
    const pulseWrapperStyle = {width: maxDiameter, height: maxDiameter};

    return (
      <div style={containerStyle}>
        {started && (
          <div style={pulseWrapperStyle}>
            {pulses.map(pulse => {
              const pulseStyles = {
                ...styles.pulse,
                backgroundColor: color,
                width: pulse.diameter,
                height: pulse.diameter,
                opacity: pulse.opacity,
                borderRadius: pulse.diameter / 2,
                top: pulse.centerOffset,
                left: pulse.centerOffset,
                ...pulseStyle,
              };
              return <div key={pulse.pulseKey} style={pulseStyles} />;
            })}
          </div>
        )}
      </div>
    );
  }
}
