Node.prototype.is = function() {
  for (var i = 0; i < arguments.length; i++) {
    this.classList.add(arguments[i]);
  }
  return this;
};

Node.prototype.isnt = function() {
  for (var i = 0; i < arguments.length; i++) {
    this.classList.remove(arguments[i]);
  }
  return this;
};

Node.prototype.says = function(text){
  this.appendChild(document.createTextNode(text));
  return this;
};
Node.prototype.say = Node.prototype.says;
Node.prototype.kill = function () {
  this.remove();
};

Node.prototype.clear = function() {
  if (!arguments.length) {
    v = this.children;
  }
  for (var i = 0; i < arguments.length; i++) {
    this.removeChild(arguments[i]);
  }
  return this;
};

Node.prototype.prop = function(attribute, value) {
  switch (attribute) {
    case "src": this.src = value;
      break;
    case "href": this.href = value;
      break;
    case "type": this.type = value;
      break;
    case "value":
    case "val": this.value = value;
      break;
    default: this.setAttribute(attribute, value);
  }
  return this;
};

Node.prototype.props = function() {
  for (var i = 0; i < arguments.length; i++) {
    this.prop(arguments[i][0], arguments[i][1]);
  }
  return this;
};

Node.prototype.has = function (target) {
  this.appendChild(target);
  return this;
};

Node.prototype.in = function(target) {
  target.appendChild(this) ;
  return this;
};

NodeList.prototype.are = function() {
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < arguments.length; j++) {
      this[i].classList.add(arguments[j]);
    }
  }
  return this;
};

NodeList.prototype.arent = function() {
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < arguments.length; j++) {
      this[i].classList.remove(arguments[j]);
    }
  }
  return this;
};

NodeList.prototype.say = function(text) {
  for (var i = 0; i < this.length; i++) {
    this[i].appendChild(document.createTextNode(text));
  }
  return this;
};

NodeList.prototype.kill = function () {
  for (var i = 0; i < this.length; i++) {
    this[i].remove();
  }
  return true;
};

NodeList.prototype.clear = function() {
  for (var i = 0; i < this.length; i++) {
    this[i].clear();
  }
  return this;
};

NodeList.prototype.have = function(newNode) {
  for (var i = 0; i < this.length; i++) {
    this[i].has(newNode.cloneNode(true));
  }
  return this;
};

NodeList.prototype.in = function(target) {
  for (var i = 0; i < this.length; i++) {
    target.appendChild(this[i]) ;
  }
  return this;
};

function a (elementObject) {
  var newElement = document.createElement(elementObject.tag);
  if(elementObject.id) {
    newElement.id = elementObject.id;
  }
  if(elementObject.classes) {
    for (var i = 0; i < elementObject.classes.length; i++) {
      newElement.is(elementObject.classes[i]);
    }
  }
  if(elementObject.type) {
    newElement.type = elementObject.type;
  }
  if(elementObject.name) {
    newElement.name = elementObject.name;
  }
  if(elementObject.attributes) {
    for (var i = 0; i < elementObject.attributes.length; i++) {
      newElement.setAttribute(elementObject.attributes[i].name, elementObject.attributes[i].value);
    }
  }
  if(elementObject.text) {
    newElement.innerHTML = elementObject.text;
  }
  if(elementObject.children) {
    for (var i = 0; i < elementObject.children.length; i++) {
      newElement.has(a(elementObject.children[i]));
    }
  }
  return newElement;
}

var an = a;

function all (selector) {
  var SelectedElements = document.querySelectorAll(selector);
  if (SelectedElements.length < 1) {
    return NULL;
  }else if (SelectedElements.length == 1) {
    return SelectedElements[0];
  }else {
    return SelectedElements;
  }
}

function the (selector) {
  var SelectedElement = document.querySelector(selector) ;
  return SelectedElement;
}

function make (selector) {
  var classes = selector.split(".");
  selector = classes.shift();
  selector = classes.split("#");
  var identifier = selector[1];
  var tag = selector[0];
  return a({tag:tag, id:identifier, classes:classes}) ;
}
