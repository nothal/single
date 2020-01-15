function svg(tag = "svg") {
  return document.createElementNS("http://www.w3.org/2000/svg", tag);
}
SVGSVGElement.prototype.size = function (width, height) {
  this.viewBox.baseVal.width = width;
  this.viewBox.baseVal.height = height;
  return this;
};
function group(vele) {
  var vg = document.createElementNS("http://www.w3.org/2000/svg", "g");
  for (var i = 0; i < arguments.length; i++) {
    vg.appendChild(arguments[i]);
  }
  return vg;
}
