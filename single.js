function the(sel) {
  return document.querySelector(sel);
}
function a(tag) {
  return document.createElement(tag);
}
const one = {
  before: function (elem) {
    return (typeof elem == "string")? document.querySelector(elem).previousElementSibling : elem.previousElementSibling;
  },
  after: function (elem) {
    return (typeof elem == "string")? document.querySelector(elem).nextElementSibling : elem.nextElementSibling;
  },
  above: function (elem) {
    return (typeof elem == "string")? document.querySelector(elem).parentElement : elem.parentElement;
  },
  within: function (elem) {
    return (typeof elem == "string")? document.querySelector(elem).children[0] : elem.children[0];
  }
};
function pic(set, fallback) {
  var pictureSet = a("picture");
  for (var res in set) {
    if (set.hasOwnProperty(res)) {
      pictureSet.has(a("source").set({srcset: set[res], media: res}))
    }
  }
  if (fallback instanceof HTMLImageElement) {
    pictureSet.has(fallback);
  }else if (typeof fallback == "object") {
    let fba = (fallback.alt)? fallback.alt : "" ;
    pictureSet.has(a("img").set({src: fallback.src, alt: fba}))
  }else if (typeof fallback == "string") {
    pictureSet.has(a("img").set({src: fallback}))
  }
  return pictureSet;
}
Element.prototype.as = function (id) {
  this.id = id;
  return this;
};
Element.prototype.is = function (cname) {
  for (var i = 0; i < arguments.length; i++) {
    this.classList.add(arguments[i]);
  }
  return this;
};
Element.prototype.isnt = function (cname) {
  for (var i = 0; i < arguments.length; i++) {
    this.classList.remove(arguments[i]);
  }
  return this;
};
Node.prototype.has = function (elem) {
  for (var i = 0; i < arguments.length; i++) {
    this.appendChild(arguments[i]);
  }
  return this;
};
EventTarget.prototype.on = function (listeners) {
  for (var action in listeners) {
    if (listeners.hasOwnProperty(action)) {
      this.addEventListener(action, listeners[action]);
    }
  }
  return this;
};
Node.prototype.clear = function () {
  for (var i = 0; i < this.childNodes.length; i++) {
    this.childNodes[i].remove();
  }
  return this;
};
Node.prototype.says = function (txt) {
  this.appendChild(document.createTextNode(txt));
  return this;
};
Node.prototype.text = function (txt) {
  this.clear().appendChild(document.createTextNode(txt));
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
