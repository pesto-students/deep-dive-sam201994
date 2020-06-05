import { animate, makeEaseOut, bounceTimer } from '../animate';

class bounce {
  constructor(el, config) {

    const height = config.height;
    const reverse = config.reverse;
    const duration = config.duration

    animate({
      duration: duration,
      timing: reverse ? bounceTimer: makeEaseOut(bounceTimer),
      draw: (progress) => {
        el.style.top = height * progress + 'px';
      }
    });
  }
}

export default bounce;
