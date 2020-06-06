import { animate, linearTimer, quadTimer } from '../animate';

class fade {
  constructor(el, config) {
    const easeEffect = config.easeEffect;
    console.log(config.duration);
    animate({
      duration: config.duration,
      timing: quadTimer,
      draw: (progress) => {
        if (easeEffect === 'in') {
          el.style.opacity = progress;
        }
        if (easeEffect === 'out') {
          el.style.opacity = 1 - progress;
        }
      }
    });
  }
}

export default fade;
