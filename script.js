"use strict";

// We define the TRIGGERS first - things that will be hovered and need a background behind
const triggers = document.querySelectorAll("a");
console.log(triggers);

// we CREATE THE HIGHLIGHT
const highlight = document.createElement("span");

// we add the class
highlight.classList.add("highlight");

// put it into the DOM
// document.querySelector("body").append(highlight);
document.body.append(highlight);

//listen when the link is hovered

function higlhlightLink(e) {
  console.log(`please highlight`, this);

  // WE NEED TO FIGURE OUT WHERE ON THE PAGE IS THE ELEMENT
  console.log(this.getBoundingClientRect());
  // const x = this.getBoundingClientRect().x
  // const y = this.getBoundingClientRect().y
  let x, y;
  [x, y] = [this.getBoundingClientRect().x, this.getBoundingClientRect().y];
  console.log(x, y);

  // transform: translate(275px, -37px);
  //   display: inline-block;
  //   width: 10px;
  //   background-color: white;
  //   height: 10px;
}

triggers.forEach((item) => item.addEventListener("mouseenter", higlhlightLink));

console.log(highlight);
