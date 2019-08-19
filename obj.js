Element.prototype.called = function(id) {
  if (id != null) {
    this.id = id;
  }else {
    return this.id;
  }
  return this;
}

Element.prototype.is = function() {
  for (var i in arguments) {
    this.classList.add(arguments[i]);
  }
  return this;
};

Element.prototype.isnt = function() {
  for (var i in arguments) {
    this.classList.remove(arguments[i]);
  }
  return this;
};

Element.prototype.says = function(text){
  this.appendChild(document.createTextNode(text));
  return this;
};
Element.prototype.say = Node.prototype.says;
Element.prototype.kill = function () {
  this.remove();
};

Element.prototype.clear = function() {
  var v = arguments;
  if (!v.length) {
    v = this.childNodes;
    while (v.length > 0) {
      v[0].remove();
    }
  }else {
    for (var i in v) {
      v[i].remove();
    }
  }
  return this;
};

Element.prototype.prop = function(attribute, value) {
  if (attribute.match("data-")) {
    this.setAttribute(attribute, value);
  }else {
    this[attribute] = value;
  }
  return this;
};
Element.prototype.data = function (name, value) {
  this.dataset[name] = value;
};
Element.prototype.props = function() {
  var v = arguments;
  for (var i in v) {
    if (v[0].constructor == Array) {
      for (var j in v.length) {
        this.prop(v[j][0], v[j][1]);
      }
    }else if (v[i].constructor == Object) {
      for (var k in v[i]) {
        this.prop(k, v[i][k]);
      }
    }
  }
  return this;
};
HTMLElement.prototype.on = function (action, func) {
  this.addEventListener(action, func);
  return this;
};
Node.prototype.has = function () {
  var v = arguments;
  for (var i in v) {
    var t = v[i];
    if (typeof t == "String") {
      this.appendChild(make(t));
    }else {
      this.appendChild(t);
    }
  }
  return this;
};

Node.prototype.in = function(target) {
  target.appendChild(this) ;
  return this;
};
Element.prototype.container = function () {
  return this.parentElement;;
}

Node.prototype.cloneTo = function() {
  var v = arguments;
  for (var i in v) {
    if (v[i].constructor == NodeList || v.constructor == Array) {
      for (var j in v[i]) {
        v[i][j].has(this.cloneNode(true));
      }
    }
    v[i].has(this.cloneNode(true));
  }
  return this;
};
Node.prototype.cloneHere = function(times) {
  times = (times)? times : 1;
  while (times > 0) {
    var clonned = this.cloneNode(true);
    clonned.id = this.id + times;
    clonned.is("clonned");
    this.container().has(clonned);
    times--;
  }
  var csel = "";
  var cnms = this.className.split(/\s+/g);
  for (var c in cnms) {
    csel += (cnms[c] == "")? "" : "." + cnms[c];
  }
  return all(this.tagName.toLowerCase() + csel + ".clonned");
};
NodeList.prototype.are = function() {
  for (var i in this) {
    for (var j in arguments) {
      this[i].classList.add(arguments[j]);
    }
  }
  return this;
};

NodeList.prototype.arent = function() {
  for (var i in this) {
    for (var j in arguments) {
      this[i].classList.remove(arguments[j]);
    }
  }
  return this;
};

NodeList.prototype.say = function(text) {
  for (var i in this) {
    this[i].appendChild(document.createTextNode(text));
  }
  return this;
};

NodeList.prototype.kill = function () {
  for (var i in this) {
    this[i].remove();
  }
  return true;
};

NodeList.prototype.clear = function() {
  for (var i in this) {
    this[i].clear();
  }
  return this;
};

NodeList.prototype.have = function(newNode) {
  for (var i in this) {
    this[i].has(newNode.cloneNode(true));
  }
  return this;
};

NodeList.prototype.in = function(target) {
  for (var i in this) {
    target.appendChild(this[i]) ;
  }
  return this;
};
NodeList.prototype.on = function (action, func) {
  for (var i in this) {
    this[i].on(action, func);
  }
  return this;
};
function a (elem) {
  var newE = null;
  if (typeof elem == "string") {
    newE = document.createElement(elem);
  }else {  // DEPRECATED
    newE = document.createElement(elem.tag);
    if(elem.id) {
      newE.id = elem.id;
    }
    if(elem.classes) {
      for (var i in elem.classes) {
        newE.is(elem.classes[i]);
      }
    }
    if(elem.type) {
      newE.type = elem.type;
    }
    if(elem.name) {
      newE.name = elem.name;
    }
    if(elem.attributes) {
      for (var i in elem.attributes) {
        newE.setAttribute(elem.attributes[i].name, elem.attributes[i].value);
      }
    }
    if(elem.text) {
      newE.innerHTML = elem.text;
    }
    if(elem.children) {
      for (var i in elem.children) {
        newE.has(a(elem.children[i]));
      }
    }
  }
  return newE;
}

var an = a;

function all (selector) {
  var SelectedE = document.querySelectorAll(selector);
  if (SelectedE.length < 1) {
    return NULL;
  }else if (SelectedE.length == 1) {
    return SelectedE[0];
  }else {
    return SelectedE;
  }
}

function the (selector) {
  var SelectedE = document.querySelector(selector) ;
  return SelectedE;
}

function make (selector) { // DEPRECATED
  var classes = selector.split(".");
  selector = classes.shift();
  selector = selector.split("#");
  var identifier = selector[1];
  var tag = selector[0];
  return a({tag:tag, id:identifier, classes:classes}) ;
}

function is(ele, className){
  return ele.classList.contains(className);
}
