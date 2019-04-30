Function.prototype.when = function(method, place, param){
  method = method.toUpperCase();
  switch(method){
    case "GET":
    case "POST":
      break;
    case "UPLOAD": method = "POST";

      break;
    default: throw new Error("Method is misspecified (must be either 'get' or 'post'). \nHow to use: callbackFunction.when(method, destination, parametersInJSON)");
  }
  var xhttp = new XMLHttpRequest();
  var callback = this;
  xhttp.open(method, place, true);
  if (typeof param == "object"){
    xhttp.setRequestHeader('Content-type', 'application/json');
    param = encodeURIComponent(JSON.stringify(param));
  }else if (typeof param == "string") {
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  }else{
    xhttp.setRequestHeader('Content-type', 'multipart/form-data');
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText, this.statusText, this);
    }
  };
  xhttp.send(param);
  return xhttp;
}
XMLHttpRequest.prototype.then = function () {
  for (var i = 0; i < arguments.length; i++) {
    this.addEventListener("loadend", arguments[i]);
  }
  return this;
};
XMLHttpRequest.prototype.meanwhile = function () {
  for (var i = 0; i < arguments.length; i++) {
    this.addEventListener("loadstart", arguments[i]);
  }
  return this;
};
XMLHttpRequest.prototype.incase = function (theCase, callback) {
  this.addEventListener(theCase, callback);
  return this;
}
