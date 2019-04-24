# ![obj.js](https://www.flickr.com/photos/nonth/47684683731)
Small JavaScript Library That Only Has One Purpose, To Simplify The Create Element Process.

# Installation
[Download](https://github.com/nothal/obj.js/releases) the file from this repo to your project directory and call the script normally
```html
<!-- example -->
<script src="path/to/obj.js" type="text/javascript"></script>
```
# Contents

| [Functions](#functions) | [Element Object](#element-object) |
|---|---|
| [make](#make) | [tag](#tag-must-specify) |
| [the/all](#the-all) | [id](#id) |
| [a/an](#a-an) | [classes](#classes) |
| [in](#in) | [text](#text) |
| [has/have](#has-have) | [type](#type) |
| [is/are](#is-are) | [name](#name) |
| [kill](#kill) | [attributes](#attributes) |
| [props](#props) | [children](#children) |

# Functions
Try avoid using any script that utilize functions with these names

### make
For making a new element from selector, the selector __must__ contain at least a html tag.
```js
let fullSelector = "div#id.class.more-class";
make(fullSelector);
```
### the, all
For selecting existing elements. 

Use `the` to select one element.

Use `all` to select multiple elements.
```js
let selector = "#elem-id"; // There is only one element per id.
the(selector);

let elements = ".element"; // There can be more than one element that have the same class.
all(elements);
```
note: `the` and `all` ___cannot___ be used interchangeably.

### a, an
For making a new element from an object in JSON string.
The object ___must___ contain `tag` data.
see [Element Object](#element-object) for more info.
```js
let obj = {tag: "p", text: "This is a child"};
an(obj);

let newObject = {
  tag: "div", 
  id: "id", 
  classes: ["class", "more-class"], 
  children: [obj]
};
a(newObject);
```
note: `a` and `an` can be used interchangeably, it was made to satisfy English grammar.
### in
```js
let obj = {tag: "p", text: "This is a child"};
let box = "#box";
an(obj).in(the(box));
```
### has, have
For giving some element a child element.

Use `has` to assign a child to __one__ element

Use `have` to assign a child to __more than one__ elements.
```js
let obj = {tag: "p", text: "This is a child"};

let box = "#box";
the(box).has(an(obj));

let boxes = ".box";
all(boxes).have(an(obj));
```
note: like `the` and `all`, `has` and `have` ___cannot___ be used interchangeably.
### is, are
This function is used for assigning a class to an element.
```js
let box = "#box";
let boxes = ".box";

the(box).is("mine", "awesome");
all(boxes).are("very", "cool");
```
note: like `has` and `have`, `is` and `are` ___cannot___ be used interchangeably.

### kill
This function can be used for removing specified elements from its parent or all of its child elements
```js
document.body.kill();
//kill all child elements from body
```

### props
This can be used for adding attributes to an existing element, or during its creation with `make` method.
```js
let textfield = make("input#user.text-in");
textfield.props(["name", "username"], ["type", "text"], ["value", "KennyMcDoll"]);

// or

let anchor = make("a#logo.link").props(["href", "index.html"]);
```
It is an alternative to `a(obj)` function.
# Element Object
these are all available data that one can give to an object to use with `a` and `an` function
### tag (must specify)
It is for telling JavaScript what kind of HTML Element it is going to make.
- value type: String
- possible value: HTML tag name (e.g. div, p, h1)

example:
```js
let obj = {tag: "div"}
```
### id
It is not necessary, but recommended to use. It is for when you want to pick it up to do something later on.
- value type: String
- possible value: plain text string

example:
```js
let obj = {
  tag: "h1",
  id: "topic"
}
```
### classes
It is for giving the element a class to group the same kind of elements that have similar purpose.
- value type: an array of string
- possible value: plain text string
- special characters allowed: - (dash)

example:
```js
let obj = {
  tag: "div",
  classes: ["class-one", "class-two"]
}
```
### text
It is for giving a text to an element to hold

example:
```js
let obj = {
  tag: "p",
  text: "Here's some text."
}
```
### type
It is for specify type of en element that require a type, like `input` element.

example:
```js
let obj = {
  tag: "input",
  type: "button"
}
```
### name
Use with type, to tell form which variable should its value be passed to.

example:
```js
let obj = {
  tag: "input",
  type: "text",
  names: "email"
}
```
### attributes
It is for giving element additional attributes that is not currently supported.
- value type: an array of objects containing `name` data and `value` data

example:
```js
let obj = {
  tag: "div",
  attributes: [{
    name: "onclick",
    value: "doSomething()"
  }]
}
```
### children
It very handy when you want to make element within element, you can have as many children as you'd like, hence the plural.
- value type: an array of element object

example:
```js
let child1 = {tag: "h1", text: "Chocolate"};
let child2 = {tag: "p", text: "It is dark, a little bitter, but mostly sweet."};
let obj = {
  tag: "div",
  children: [child1, child2]
}
```
