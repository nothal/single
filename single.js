function the(sel) {
  return document.querySelector(sel);
}
function a(tag) {
  return document.createElement(tag);
}
HTMLElement.prototype.as = function (id) {
  this.id = id;
  return this;
};
HTMLElement.prototype.is = function (cname) {
  for (var i = 0; i < arguments.length; i++) {
    this.classList.add(arguments[i]);
  }
  return this;
};
HTMLElement.prototype.isnt = function (cname) {
  for (var i = 0; i < arguments.length; i++) {
    this.classList.remove(arguments[i]);
  }
  return this;
};
HTMLElement.prototype.has = function (elem) {
  for (var i = 0; i < arguments.length; i++) {
    this.appendChild(arguments[i]);
  }
  return this;
};
EventTarget.prototype.on = function (action, callback) {
  this.addEventListener(action, callback);
  return this;
};
Node.prototype.clear = function () {
  for (var i = 0; i < this.childNodes.length; i++) {
    this.childNodes[i].remove();
  }
  return this;
};
Node.prototype.says = function (txt) {
  this.appendChild(document.createTextNode(text));
  return this;
};
Node.prototype.text = function (txt) {
  this.clear().appendChild(document.createTextNode(text));
  return this;
};
Node.prototype.set = function (attr) {
  for (var key in attr) {
    if (attr.hasOwnProperty(key)) {
      this.setAttribute(key, attr[key]);
    }
  }
  return this;
};
