import { animate, makeEaseOut, linearTimer, makeEaseInOut } from '../animate';

class bounce {
  constructor(el, config) {
   
    const distance = config.distance;
    const movement = config.movement;
    const duration = config.duration;
    const easeEffect = config.easeEffect;

    animate({
      duration: duration,
      timing: easeEffect === 'out' ? makeEaseOut(linearTimer) : linearTimer,
      draw: (progress) => {
        let movementVal;
        if (progress < 0.5) {
          movementVal = distance * progress;
        } else {
          movementVal = distance * (1 - progress);
        }

        if (movement === 'down') {
          el.style.top = movementVal * progress + 'px';
        } else if (movement === 'up') {
          el.style.bottom = movementVal + 'px';
        } else if (movement === 'right') {
          el.style.left = movementVal * progress + 'px';
        } else if (movement === 'left') {
          el.style.right = movementVal * progress + 'px';
        }
      }
    });
  }
}

export default bounce;
