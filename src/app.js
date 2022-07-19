/* eslint-disable */
window.onload = function() {
  //write your code here
  document.body.style.background = "green";
  let cardShape = document.querySelector(".cardShape");
  cardShape.style.height = "35em";
  cardShape.style.width = "25em";
  cardShape.style.borderRadius = "2em";
  cardShape.style.background = "white";
  cardShape.style.margin = "auto";
  cardShape.style.display = "flex";
  cardShape.style.flexDirection = "column";
  cardShape.style.justifyContent = "space-around";

  //let masoStyle = document.getElementsByClassName("maso")[0];
  //masoStyle.style.fontSize = "2.8em";

  let masoUp = document.querySelector("#up");
  let masoDown = document.querySelector("#down");
  masoDown.style.transform = "rotate(180deg)";
  masoDown.style.cssFloat = "right";

  masoUp.style.paddingLeft = masoDown.style.paddingLeft = "1.2em";
  masoUp.style.paddingTop = masoDown.style.paddingTop = "0.6em";
  masoUp.style.fontSize = masoDown.style.fontSize = "2.8em";

  let numeroStyle = document.querySelector(".numero");
  numeroStyle.style.paddingTop = numeroStyle.style.paddingBottom = "1.3em";
  numeroStyle.style.fontSize = "2.6em";
  numeroStyle.style.textAlign = "center";

  let maso = ["♦", "♥", "♠", "♣"];
  let numero = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  const randIndex = array => Math.floor(Math.random() * array.length);
  var indexMaso = randIndex(maso);

  if (indexMaso < 2)
    masoDown.style.color = masoUp.style.color = numeroStyle.style.color = "red";
  if (indexMaso > 1)
    masoDown.style.color = masoUp.style.color = numeroStyle.style.color =
      "black";

  let firstH1 = document.createElement("h1");
  firstH1.innerHTML = maso[indexMaso];
  masoUp.append(firstH1);

  let secondH1 = document.createElement("h1");
  secondH1.innerHTML = numero[randIndex(numero)];
  numeroStyle.appendChild(secondH1);

  let thirdH1 = document.createElement("h1");
  thirdH1.innerHTML = firstH1.innerHTML;
  masoDown.appendChild(thirdH1);

  firstH1.style.margin = secondH1.style.margin = thirdH1.style.margin = "0px";
};
