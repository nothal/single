HTMLElement.prototype.is = function() {
  for (var i = 0; i < arguments.length; i++) {
    this.classList.add(arguments[i]);
  }
  return this;
};

HTMLElement.prototype.isnt = function() {
  for (var i = 0; i < arguments.length; i++) {
    this.classList.remove(arguments[i]);
  }
  return this;
};

HTMLElement.prototype.says = function(text){
  this.appendChild(document.createTextNode(text));
  return this;
};

HTMLElement.prototype.kill = function() {
  if (!arguments.length) {
    v = this.children;
  }
  for (var i = 0; i < arguments.length; i++) {
    this.removeChild(arguments[i]);
  }
  return this;
};

HTMLElement.prototype.props = function() {
  for (var i = 0; i < arguments.length; i++) {
    let attribute = arguments[i];
    switch (attribute[0]) {
      case "src": this.src = attribute[1];
        break;
      case "href": this.href = attribute[1];
        break;
      case "type": this.type = attribute[1];
        break;
      case "value":
      case "val": this.value = attribute[1];
        break;
      default: this.setAttribute(u[0], u[1]);
    }
  }
  return this;
};

Node.prototype.has = function (e) {
  this.appendChild(e);
  return this;
};

Node.prototype.in = function(e) {
  e.appendChild(this) ;
};

NodeList.prototype.are = function() {
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < arguments.length; j++) {
      this[i].classList.add(arguments[j]);
    }
  }
};

NodeList.prototype.arent = function() {
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < arguments.length; j++) {
      this[i].classList.remove(arguments[j]);
    }
  }
};

NodeList.prototype.say = function(text) {
  for (var i = 0; i < this.length; i++) {
    this[i].appendChild(document.createTextNode(text));
  }
  return this;
};

NodeList.prototype.have = function(newNode) {
  for (var i = 0; i < this.length; i++) {
    this[i].has(newNode.cloneNode(true));
  }
  return this;
};

function a (elementObject) {
  let newElement = document.createElement(elementObject.tag);
  if(elementObject.id) {
    newElement.id = elementObject.id;
  }
  if(elementObject.classes) {
    for(c of elementObject.classes) {
      newElement.is(c);
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
  let SelectedElements = document.querySelectorAll(selector);
  if (SelectedElements.length < 1) {
    return NULL;
  }else if (SelectedElements.length == 1) {
    return SelectedElements[0];
  }else {
    return SelectedElements;
  }
}

function the (selector) {
  let SelectedElement = document.querySelector(selector) ;
  return SelectedElement;
}

function make (selector) {
  let classes = selector.split(".");
  selector = classes.shift();
  selector = classes.split("#");
  let identifier = selector[1];
  let tag = selector[0];
  return a({tag:tag, id:identifier, classes:classes}) ;
}
