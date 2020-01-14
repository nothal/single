![single](https://nothal.github.io/single/images/wordmark.svg)
Introducing single.js, the simpler stripped-down obj.js for manipulating one element at a time.

A more meaningful JavaScript syntax starts here.
1. Download [single.js](https://github.com/nothal/single/releases) to your project library
2. Add `<script src="single.js"></script>` to your html file (preferrably between `<head>` and `</head>`)
3. Start single coding!

# Single Manual
In order to use single, you have to understand the concept of single.
Single is a JavaScript library that expands the functionality of HTML Element, what it does is attaching its functions to the HTML Element prototype, so it can be called directly without using special function first. In HTML Element, there are a lot of properties already exists, so we cannot add functions with the same name to the element prototype, instead we have list of functions that can be called directly on element

| function | used for | parameters required | ⛓ | <img src="https://image.flaticon.com/icons/png/128/427/427513.png" width="24" height="24"> | sample |
| :--- | :--- | :--- | :---: | :---: | :--- |
| __as__ | modifying element's ID | 1 string | ✔️ | ❌ | `single.as("id")` |
| __clear__ | emptying an element's content | no parameters | ✔️ | ❌ | `single.clear()` |
| __has__ | appending element to a container element | 1 or more elements | ✔️ | ✔️ | `single.has(a("div"))` |
| __is__ | adding classes to an element | 1 or more strings | ✔️ | ❌ | `single.is("simple")` |
| __isnt__ | removing classes from an element | 1 or more strings | ✔️ | ❌ | `single.isnt("hard")` |
| __on__ | adding event listener to element | 1 object | ✔️ | ❌ | `single.on({load: init})` |
| __says__ | appending text to an element | 1 string | ✔️ | ❌ | `single.says("Hello")` |
| __set__ | setting other attributes for an element | 1 object | ✔️ | ❌ | `single.set({type: "text"})` |
| __text__ | replacing everything in an element with text | 1 string | ✔️ | ❌ | `single.text("Hello")` |

please note that these functions cannot be used to start the function chain, it has to be chained with variable or functions that return element.
### Standalone functions
These are functions which start the chain, all chainable functions can be used on them, and you must not use any of these names for any of your variables or functions as they will break the program.

| function | used for | parameters required | 🔗 | <img src="https://image.flaticon.com/icons/png/128/427/427513.png" width="24" height="24"> |  sample |
| :--- | :--- | :--- | :---: | :---: | :--- |
| __a__ | creating a new HTML5 element | 1 string | ✔️ | ❌ | `a("div")` |
| __the__ | selecting one HTML5 element | 1 string | ✔️ | ❌ | `the("#single")` |
| __one.before__ | traversing same level DOM tree | 1 string or element | ✔️ | ✔️ | `one.before("#single")` |
| __one.after__ | traversing same level DOM tree | 1 string or element | ✔️ | ✔️ | `one.after("#single")` |
| __one.above__ | traversing up DOM tree | 1 string or element | ✔️ | ✔️ | `one.above("#single")` |
| __one.within__ | traversing down DOM tree | 1 string or element | ✔️ | ✔️ | `one.within("#single")` |

# Single Sample Code
A function for creating template element
```js
// Single JS sample code
function itemTemplate(itemObject){
  return a("a").set({href: itemObject.link}).as(itemObject.id).is("product-preview").has(
    a("img").set({src: itemObject.img, alt: itemObject.name}),
    a("h3").as(`${itemObject.id}-name`).is("product-name").says(itemObject.name),
    a("p").as(`${itemObject.id}-description`).is("product-description").says(itemObject.description),
    a("p").as(`${itemObject.id}-price`).is("product-price").says(itemObject.price)
  ).on({mouseover: expand, mouseout: shrink});
}
```
```js
// mock item for sample code
var item = {
  id: "HB0123GL",
  name: "Fancy Hand Bag",
  img: "images/fancy-hand-bag.png",
  description: "Champaigne gold trimming with geniune lether",
  price: "£990"
  link: "products/accessories/fancy-hand-bag.html"
}
the("#product-list").has(itemTemplate(item))
```
This will make HTML Element that looks like this within `#product-list` element
```html
…
  <a href="products/accessories/fancy-hand-bag.html" id="HB0123GL" class="product-preview">
    <img src="images/fancy-hand-bag.png" alt="Fancy Hand Bag">
    <h3 id="HB0123GL-name" class="product-name">Fancy Hand Bag</h3>
    <p id="HB0123GL-description" class="product-description">
      Champaigne gold trimming with geniune lether
    </p>
    <p id="HB0123GL-price" class="product-price">
      £990
    </p>
  </a>
…
```
Compare to vanilla JS code, single is much more concise.
```js
// code doing the same task using vanilla JavaScript (no libraries)

function itemTemplate(itemObject){
  var image = document.createElement("img");
  var name = document.createElement("h3");
  var desc = document.createElement("p");
  var price = document.createElement("p");
  var item = document.createElement("a");

  item.href = itemObject.link;
  item.id = itemObject.id;
  item.classList.add("product-preview");
  item.addEventListener("mouseover", expand);
  item.addEventListener("mouseout", shrink);

  img.src = itemObject.img;
  img.alt = itemObject.name;

  name.id = `${itemObject.id}-name`;
  name.innerHTML = itemObject.name;
  name.classList.add("product-name");

  desc.id = `${itemObject.id}-description`;
  desc.innerHTML = itemObject.description;
  desc.classList.add("product-description");

  price.id = `${itemObject.id}-price`;
  price.innerHTML = itemObject.price;
  price.classList.add("product-price");

  item.appendChild(image);
  item.appendChild(name);
  item.appendChild(desc);
  item.appendChild(price);

  return item;
}
```
Single.js has several key advantages over vanilla js:
- it can do everything you can do without Single JS but more concise.
- it allows you to call many functions for the same element on the same line (chainable).
- it escapes special HTML characters such as `<` and `>`, so they can be displayed properly without using escape code.
- it's compatible with vanilla JavaScript.
- it is easy to learn and easy to start.

### Want to see the demo?
Head over [here](https://nothal.github.io/single) as new demos are being added

# ![single-v](https://nothal.github.io/single/images/Wordmark-black.svg)
A graphics library for single.
coming soon
