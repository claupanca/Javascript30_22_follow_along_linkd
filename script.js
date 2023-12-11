"use strict";

// We define the TRIGGERS first - things that will be hovered and need a background behind
const triggers = document.querySelectorAll("a");
console.log(triggers);

// we CREATE THE HIGHLIGHT
const highlight = document.createElement("span");
highlight.style.display = "inline-block";
highlight.style.backgroundColor = "white";
highlight.style.zIndex = -1;
highlight.style.position = "absolute";
// we add the class
highlight.classList.add("highlight");

// put it into the DOM
// document.querySelector("body").append(highlight);
document.body.append(highlight);

const highlighted = document.querySelector(".highlight");
const initHighlightY = highlighted.getBoundingClientRect().y;
console.log(highlighted);

//listen when the link is hovered

function higlhlightLink(e) {
  console.log(`please highlight`, this);

  // WE NEED TO FIGURE OUT WHERE ON THE PAGE IS THE ELEMENT
  console.log(this.getBoundingClientRect());

  // Set the Transform style to match the Link we hover over
  let hoverX, hoverY;
  [hoverX, hoverY] = [
    this.getBoundingClientRect().x,
    this.getBoundingClientRect().y,
  ];
  // console.log(hoverX, hoverY);
  const myY = -initHighlightY + hoverY;
  highlighted.style.transform = `translate(${hoverX - 3}px, ${myY}px)`;

  // Set the height and width of the span to match the Hover over word
  let hoverWidth, hoverHeight;
  [hoverWidth, hoverHeight] = [
    this.getBoundingClientRect().width,
    this.getBoundingClientRect().height,
  ];
  // console.log(hoverWidth, hoverHeight);
  highlighted.style.width = `${hoverWidth + 6}px`;
  highlighted.style.height = `${hoverHeight}px`;
}

triggers.forEach((item) => item.addEventListener("mouseenter", higlhlightLink));

// console.log(highlight);
