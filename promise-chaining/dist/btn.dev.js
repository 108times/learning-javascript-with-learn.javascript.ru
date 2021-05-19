"use strict";

function createRipple(event) {
  var button = event.currentTarget;
  button.classList.add('clicked');
  setTimeout(function () {
    button.classList.remove('clicked');
  }, 230);
  var circle = document.createElement('span');
  var diameter = Math.max(button.clientWidth, button.clientHeight);
  var radius = diameter / 2;
  circle.style.width = circle.style.height = "".concat(diameter, "px");
  circle.style.left = "".concat(event.clientX - (button.offsetLeft + radius), "px");
  circle.style.top = "".concat(event.clientY - (button.offsetTop + radius / 5), "px");
  circle.classList.add('ripple'); //
  // const ripple = button.getElementsByClassName('ripple')[0]
  // if (ripple) ripple.remove()
  // console.log(ripple)

  button.appendChild(circle); // const clone = circle.cloneNode(true)
  // setTimeout(() => button.appendChild(clone), 30)
}

var btns = document.getElementsByClassName('btn');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = btns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var btn = _step.value;
    btn.addEventListener('click', createRipple);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}