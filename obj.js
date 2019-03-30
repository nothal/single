HTMLElement.prototype.is = function() {
  for(c of arguments) {
    this.classList.add(c);
  }
};
HTMLElement.prototype.isnt = function() {
  for(c of arguments) {
    this.classList.remove(c);
  }
};
HTMLElement.prototype.says = function(rd){
  this.appendChild(document.createTextNode(rd));
  return this;
}
HTMLElement.prototype.kill = function(q) {
  let v = arguments;
  if (!v.length) {
    v = this.children;
  }
  for (u of v) {
    this.removeChild(u);
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
  let cs = arguments;
  for(q of this) {
    for(g of cs) {
      q.is(g);
    }
  }
};
NodeList.prototype.arent = function() {
  let cs = arguments;
  for(q of this) {
    for(g of cs) {
      q.isnt(g);
    }
  }
};
NodeList.prototype.say = function(r) {
  for(e of this) {
    e.appendChild(document.createTextNode(r));
  }
  return this;
};
NodeList.prototype.have = function(c) {
  let k = Array() ;
  for(e of this) {
    k.push(c.cloneNode(true));
  }
  for(var i = 0;i<k.length;i++) {
    this[i].has(k[i]);
  }
  return this;
};
const a = function(z) {
  let b = document.createElement(z.tag);
  if(z.id) {
    b.id = z.id;
  }
  if(z.classes) {
    for(c of z.classes) {
      b.is(c);
    }
  }
  if(z.type) {
    b.type = z.type;
  }
  if(z.name) {
    b.name = z.name;
  }
  if(z.attributes) {
    for(c of z.attributes) {
      b.setAttribute(c.name, c.value);
    }
  }
  if(z.text) {
    b.innerHTML = z.text;
  }
  if(z.children) {
    for(d of z.children) {
      b.has(a(d));
    }
  }
  return b;
},
an = a,
all = function(s) {
  let r = document.querySelectorAll(s) ;
  if(r.length == 1) {
    return r[0];
  }else {
    return r;
  }
},
the = function(s) {
  let r = document.querySelector(s) ;
  return r;
},
make = function(s) {
  let c = s.split(".");
  s = c.shift();
  s = s.split("#");
  let i = s[1];
  let t = s[0];
  return a({tag:t, id:i, classes:c}) ;
};
