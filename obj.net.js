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
    param = JSON.stringify(param);
  }else if (typeof param == "string") {
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  }else{
    xhttp.setRequestHeader('Content-type', 'multipart/form-data');
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText, this.statusText);
    }
  };
  xhttp.send(param);
}
