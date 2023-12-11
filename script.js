"use strict";

// We define the TRIGGERS first - things that will be hovered and need a background behind
const triggers = document.querySelectorAll("a");
console.log(triggers);

// we CREATE THE HIGHLIGHT
const highlight = document.createElement("span");
// we add css the properties

// WE can add all these into the CSS STYLE sheet under the .highlight class
highlight.style.display = "inline-block";
highlight.style.backgroundColor = "white";
highlight.style.zIndex = -1;
highlight.style.position = "absolute";
highlight.style.borderRadius = "5px";
highlight.style.transition = "all 0.2s";
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

  // get the coords of the hover element
  const coords = {
    // we will add the OFFSET in case the user scrolls
    top: this.getBoundingClientRect().y + window.scrollY,
    left: this.getBoundingClientRect().x + window.scrollX,
    width: this.getBoundingClientRect().width,
    height: this.getBoundingClientRect().height,
  };

  // Set the Transform style to match the Link we hover over

  // console.log(hoverX, hoverY);
  const myY = -initHighlightY + coords.top;
  highlighted.style.transform = `translate(${coords.left - 3}px, ${myY}px)`;

  // Set the height and width of the span to match the Hover over word
  // console.log(hoverWidth, hoverHeight);
  highlighted.style.width = `${coords.width + 6}px`;
  highlighted.style.height = `${coords.height}px`;
}

triggers.forEach((item) => item.addEventListener("mouseenter", higlhlightLink));

// console.log(highlight);
