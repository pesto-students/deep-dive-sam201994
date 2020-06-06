function animate(options) {
  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;
    let progress = options.timing(timeFraction);

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

function makeEaseOut(timer) {
  return (timeFraction) => {
    return 1 - timer(1 - timeFraction);
  };
}

function bounceTimer(timeFraction) {
  for (let cofficientA = 0, cofficientB = 1; 1; cofficientA += cofficientB, cofficientB /= 2) {
    if (timeFraction >= (7 - 4 * cofficientA) / 11) {
      return -Math.pow((11 - 6 * cofficientA - 11 * timeFraction) / 4, 2) + Math.pow(cofficientB, 2);
    }
  }
}

function quadTimer(timeFraction) {
  return Math.pow(timeFraction, 2);
}

function linearTimer(timeFraction) {
  return timeFraction;
}

export { animate, quadTimer, bounceTimer, makeEaseOut, linearTimer };
