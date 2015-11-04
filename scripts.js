$(document).ready(function() {
  $('#overlay').css('background-color', getHex());
  $('#sunburst').css('background-image', `radial-gradient(${getShape()}, ${getHex()}, ${getHex()}, ${getHex()})`);

  var throttle = function(delay, handler) {
    var previousCall = null;
    return function() {
      var time = new Date().getTime();
      if (!previousCall || (time - previousCall) >= delay) {
          previousCall = time;
          handler.apply(null, arguments);
      }
    }
  };

  $(document).mousemove(throttle(200, function(e) {
    $('#overlay').css('background-color', getHex());
    $('#sunburst').css('background-image', `radial-gradient(${getShape()}, ${getHex()}, ${getHex()}, ${getHex()})`);
  }));
});

function getHex() {
  return `#${Math.random().toString(16).slice(2, 8)}`;
};

function getShape() {
  var shape = coinFlip() ? 'circle' : 'ellipse';
  var distance = coinFlip() ? 'closest' : 'farthest';
  var position = coinFlip() ? '-side' : '-corner';
  var vertical = coinFlip() ? 'top' : 'bottom';
  var horizontal = coinFlip() ? 'right' : 'left';

  if (coinFlip()) return `${shape} at ${vertical} ${horizontal}`;
  else return `${shape} ${distance}${position}`;
};

function coinFlip() {
  return Math.floor(Math.random() * 2) === 1;
};
