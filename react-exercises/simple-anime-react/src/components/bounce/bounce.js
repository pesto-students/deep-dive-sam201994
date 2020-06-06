import { animate, makeEaseOut, bounceTimer } from '../animate';

class bounce {
  constructor(el, config) {
    const height = config.height || el.clientHeight;
    const width = config.width || el.clientWidth;
    const movement = config.movement;
    const duration = config.duration;
    const easeEffect = config.easeEffect;

    animate({
      duration: duration,
      timing: easeEffect === 'out' ? makeEaseOut(bounceTimer) : bounceTimer,
      draw: (progress) => {
        if (movement === 'down') {
          el.style.top = height * progress + 'px';
        } else if (movement === 'up') {
          el.style.bottom = height * progress + 'px';
        } else if (movement === 'right') {
          el.style.left = width * progress + 'px';
        } else if (movement === 'left') {
          el.style.right = width * progress + 'px';
        }
      }
    });
  }
}

export default bounce;
