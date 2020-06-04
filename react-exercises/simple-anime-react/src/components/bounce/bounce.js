import { animate, makeEaseOut, bounceTiming, quad } from '../animate';

class bounce {
  constructor(el, config = {}) {
    let height = el.clientHeight;
    // let width = el.clientWidth;
    animate({
      duration: 2000,
      timing: makeEaseOut(bounceTiming),
      draw: function(progress) {
        console.log(progress);
        el.style.top = height * progress + 'px';
      }
    });
  }
}

export default bounce;
