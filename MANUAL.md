# Code Convention

## Introduction
obj.js is built with simplicity in mind. Every line of code is as simple as possible, yet preserves the meaning of the code. You should treat it like an actual object, rather than an attribute of an abstract entity.
Let's start with getting document body from DOM

```js 
the("body");
```
because document body represented by the tag `body`, we can use the tag to call it, or use `document.body` to call it directly without using obj.js shortcut.
```js
document.body;
```
Now that we can pick body element from document, let's make some components.
We usually want a component to have both id and classes, because that will lets you call the element in JavaScript easily, and keep CSS Selector simple, and if you think you may want to use it later, make sure you keep it in variable.
```js
var newE = a("div").called("container").is("styled");
```
Now we have an element that looks like this
```html
<div id="container" class="styled"></div>
```
but it won't be shown in the page until you explicitly tell it to, like so…
```js
// consider we made an element and keep it in a variable called newE
document.body.has(newE);
// or
the("body").has(newE);
// or
newE.in(document.body);
// or
newE.in(the("body"));
```
Notice that we have 2 functions to perform this action, `in` and `has`, the difference is `in` is spelled shorter than has, and can put only one element inside one container, while `has` can put multiple elements into one container by `chaining` the function together like this:
```js
document.body.has(elem1).has(elem2).has(elem3);
```
In version `0.0.9`, we are making it even easier by accepting unlimited amount of parameters into the `has` function, so you don't have to type it multiple times to get multiple elements inside one container.

## Chapter 1 - Multiple Element Manipulation
obj.js is not just a set of shorrtcuts for manipulating one element at a time, it also manipulate multiple elements in one line too, but there's some limitation: it can only turn them into the same thing you tell them to be.
```js
all("div").are("styled");
```
If we have html code like this
```html
<div id="d0">
  <div id="d1"></div>
  <div id="d2"></div>
  <div id="d3"></div>
</div>
```
every single `<div>` will have the class `styled` attached to them.
`NOTE`: We do not allow manipulating id of multiple elements to the same string, not only because it doesn't make sense to do, but it can cause problem in your code. 
