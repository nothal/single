![obj.js](https://live.staticflickr.com/65535/47684683731_cbdc489f49_m.jpg)
# obj.js 
Small JavaScript Library That Only Has One Purpose, To Simplify The Create Element Process.

Go to [obj.net.js](#objnetjs)

# Installation
[Download](https://github.com/nothal/obj.js/releases) the file from this repo to your project directory and call the script normally
```html
<!-- example -->
<script src="path/to/obj.js" type="text/javascript"></script>
```
# Contents
### Standard functions
- [Selecting Elements](#selecting-elements)
- [Making New Element](#making-new-element)
- [Manipulating Element](#manipulating-element)
  - [Manipulating Multiple Elements](#manipulating-multiple-elements)
- [Traversing Element Node](#traversing-element-node)

### Deprecated functions (before v0.0.8)
| [Functions](#functions) | [Element Object](#element-object) | [obj.net.js](#objnetjs) |
|---|---|---|
| [make](#make) | [tag](#tag-must-specify) | [when](#when) |
| [the/all](#the-all) | [id](#id) | [then, meanwhile](#then-meanwhile) |
| [a/an](#a-an) | [classes](#classes) |[incase](#incase) |
| [in](#in) | [text](#text) ||
| [has/have](#has-have) | [type](#type) ||
| [is/are](#is-are) | [name](#name) ||
| [kill](#kill) | [attributes](#attributes) ||
| [props](#prop-props) | [children](#children) ||

# Selecting Elements
To select elements, we have 2 functions for 2 different situations:
1. `the`- select one element that matched the selector
2. `all`- select every element that matched the selector

To use element selecting functions, use CSS selector as a parameter.
```js
var oneE = the("#element");
var allE = all(".element");
```

# Making New Element
To make new element, we have 3 ways to make, but we recommend you use the first way.
### Use `a()` to specify what kind of element you want to make
```js
var newE = a("div").called("elem").is("objjs");
```
this will produce
```html
<div id="elem" class="objjs"></div>
```

### Use `a()` with `Element Object` to make an element
This method is deprecated, if you want to use it, jump to [How to use a/an in obj.js before 0.0.8](#a-an).
### Use `make()` with full selector
This method is deprecated, if you want to use it, jump to [How to use make in obj.js before 0.0.8](#make).

# Manipulating Element
We can do 4 main thing to manipulate an element
1. [class manipulation](#class-manipulation)
2. [property manipulation](#property-manipulation)
3. [event manipulation](#event-manipulation)
4. [content manipulation](#content-manipulation)

### Class Manipulation
To manipulate class, we have 2 functions to use, `is` and `isnt` to add/remove classes.
```js
the("#container").is("active", "green");
the("#container").isnt("active", "green");
```
In case you want to check if the element is any class, you can use `is` like you use for asking yes/no question in English. Please note that it is a different function from the one before, thus it returns different value.
```js
is(the("#container"), "active");
```
Use HTML Element as first parameter, and then class name as second parameter.

### Property Manipulation
To manipulate element's property, you can use `prop` to set certain property to certain value.
```js
an("a").called("anchor").prop("href", "anchor.html");
```
To set multiple properties in one line, we have 2 ways to use the function `props`.
```js
// pass JSON as a parameter (recommended)
the("input#name").props({name: "username", type: "text", placeholder: "your desired username"});
// pass arrays as parameter (deprecated)
the("input#name").props(["name", "username"], ["type", "text"], ["placeholder", "your desired username"]);
```
you can also chain `prop`'s together to add multiple properties to one element.

### Event Manipulation
To manipulate event, you can use `on` to add `event listeners` to an element
```js
the("#container").on("keyup", functionName); // to use pre-defined function as event listener
the("#container").on("keyup", function(e){    // to use anonymous function as event listener
    // your code goes here
});
```
You can also use `prop` and `props` to set event listener.
### Content Manipulation
We have 3 things that we can do to manipulate content using obj.js. 

#### 1. Adding and moving content with `in`, `has`, and `says`
```js
var title = the("#title").says("Hello");
document.body.has(title);
title.in(document.body);
// Please note that obj.js functions always return the element that's being manipulated
// so title, in this case, is the element that has the id `title`, not the string "Hello"
// thus allowing us to pass it as a parameter to `has()`.
```

__QUESTION__: Why `says` append the existed text in the container?
__ANSWER__: I'm working on that, but now you'll have to use `clear` before you use `says` to clear old contents first.

#### 2. Removing content with `clear` and `kill`
Use `clear` to clear the content of the container
Use `kill` to kill the container
```js
the("#container").clear() //container is now empty.
the("#container").kill() //container is now no longer existed in the document.
```
We can also pass elements as parameters to `clear` to remove those elements from the container
```js
the("#container").clear(the("#text1"), the("#text2"), the("#text3"));
```

__QUESTION__: How to kill multiple an elements?

__ANSWER__: You can use clear on its container and specify the elements you want to remove.

#### 3. Clone content with `cloneTo`, and `cloneHere` \[*New in v0.0.8*\]
It is not something we use a lot, but it's nice to know that we can. To clone an element to another place, do the following
```js
the("#cell").cloneTo(the("#other-cell")); // to clone an element and place it inside a container
the("#cell").cloneHere(3); // to duplicate an element 3 times and place all of them in the same container.
```
__NOTE__: `cloneHere` has no effect when 0 is a parameter, and clone ___once___ if no parameter is provided.
_DO NOT_ pass `null` as parameter, as it will be treated as no parameter and might confuse your code.

## Manipulating Multiple Elements
We have multiple functions than behaves the same way, but lets you manipulate multiple elements at the same time. It is highly recommended to use with `all`.
- `are` and `arent` to add/remove classes
- `prop` and `props` can be used with `all` too.
- `on` can be used to add the same event listener to multiple elements.
- `have` and `say` behave the same way that `has` and `says` do.
- `kill` and `clear` will work as you expected

# Traversing Element Node
\[*New in v0.0.8*\]
This is not recommended because it will make your code harder to read, only use if necessary.
Since you're interested, let's learn how we treat DOM tree, if not, that's all you need to know to start using obj.js.
```html
<body>
  <div id="elem0">
    <div id="elem1"></div>
    <div id="elem2"></div>
  </div>
  <div id="elem3">
    <div id="elem4"><div id="elem5"></div></div>
    <div id="elem6"><div id="elem7"></div></div>
  </div>
</body>
```
If `the("#elem0")` is our target element, then the("body") is its container. It has 2 members: `the("#elem1")` and `the("#elem2")`. It has one neighbor: `the("#elem3")`. The direct member of `the("body")` is root, so root of `the("#elem5")` is `the("#elem3")`, and so `the("#elem4")`. Because we already have an easy way to access the("body"), and it always is the("body"), and we typically divide each section of the page into many divisions, hence "div", so each division below body is the root of each section.

This is not fully implemented as of v0.0.8, only container is available. 
1. get the container of the element
```js
the("#element").container; // This only gets element's container (parent node)
```
2. get the neighbor elements within the same container 
```js
the("#element).next;
the("#element).prev;
```
3. get member of the same element
```js
the("#element").members // returns an array of all direct members.
```
4. get root of the element
```js
the("#element").root() // return its container that is directly under body.
```
----
# OLD MANUAL
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
This function can be used for removing the caller element
```js
the("#unwanted").kill();
//kill unwanted element
all(".unwanted").kill();
//kill all unwanted element
```

### clear
Use this function to clear all its content or remove specified contents inside the caller element
```js
the("#to-be-emptied").clear();
//clear all of its contents
the("#excessive-content").clear(the("#unwanted1"), the("#unwanted2"));
// clear specific items inside itself, can be one or more items
```

### prop, props
This can be used for adding attributes to an existing element, or during its creation with `make` method.
```js
let textfield = make("input#user.text-in");
textfield.props(["name", "username"], ["type", "text"], ["value", "KennyMcDoll"]);

// or

let anchor = make("a#logo.link").prop("href", "index.html");
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

![obj.net.js](https://live.staticflickr.com/65535/46827137095_73cebb677f_m.jpg)
# obj.net.js
A small JavaScript library to handle simple AJAX requests.

__Caution: this module is experimental.__

Go back to [obj.js](#objjs)

# Functions

### when
Send XMLHttpRequest to server destination, and then execute the function with `responseText` and `statusText`
```js
var runThisFunction = function(){
  // function content
};
var toBackEnd = "path/to/backend";
var requests = "data=1";
runThisFunction.when("post", toBackEnd, requests);
```
note: the request parameters can be in either urlencoded or JSON object, but your backend have to handle it properly.

### then, meanwhile
Add functions to execute while loading data and when finished loading.
```js
function executeThis(){
  // Things to do after the request is done.
}
function waitForIt(){
  // Things to do while loading the request.
}

runThisFunction.when("post", toBackEnd, requests).then(executeThis).meanwhile(waitForIt);
```

### incase
Add a function to execute when the event triggered
```js
function freakOut(){
  // Things to do when error.
}
runThisFunction.when("post", toBackEnd, requests).incase("error", freakOut);
```

note: this function acts as a `addEventListener`, you can add any event `XMLHttpRequest` supports. 
See [documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Events).
