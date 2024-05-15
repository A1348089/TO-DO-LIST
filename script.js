document.getElementById("submit").addEventListener("click", function () {
  ///////////// Get Values from the Inputs /////////////
  let title = document.getElementById("title").value;
  let description = document.getElementById("desc").value;

  ////////////// create "h3","p", "li" element ////////////
  let heading = document.createElement("h3");
  let paragraph = document.createElement("p");
  let btn1 = document.createElement("button");
  let btn2 = document.createElement("button");
  let item = document.createElement("li");

  //////////// Attributes /////////////////////
  btn1.setAttribute("class", "done");
  btn2.setAttribute("class", "remove"),
    ////////////// add the values to "h3","p" /////////////
    (heading.textContent = title);
  paragraph.textContent = description;
  btn1.textContent = "Done";
  btn2.textContent = "Remove";
  /////////////// add childNodes to "li" ///////////
  item.appendChild(heading);
  item.appendChild(paragraph);
  item.appendChild(btn1);
  item.appendChild(btn2);

  ////////////// get ul //////////////////
  let list = document.getElementById("list");

  /////////////// append "li" to "ul" //////////

  list.appendChild(item);

  //////////////////// Buttons //////////////////

  btn1.addEventListener("click", function () {
    item.style.textDecoration = "line-through";
  });

  btn2.addEventListener("click", function () {
    btn2.parentNode.remove();
  });
});
