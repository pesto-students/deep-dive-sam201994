import { animate, linearTimer } from '../animate';

class pulse {
  constructor(el, config) {
    const duration = config.duration;
    const scalingFactor = config.scalingFactor;

    animate({
      duration: duration,
      timing: linearTimer,
      draw: (progress) => {
        let factor;
        if (progress < 0.5) {
          factor = progress * ((scalingFactor - 1) / 0.5) + 1;
        } else if (progress > 0.5) {
          factor = (1 - progress) * ((scalingFactor - 1) / 0.5) + 1;
        }
        el.style.transform = `scale(${factor},${factor})`;
      }
    });
  }
}

export default pulse;
