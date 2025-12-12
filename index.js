import { shapeCalc } from "./shapes.js";

const input = document.getElementById("shapeInput");
const button = document.querySelector(".btn");
const output = document.querySelector(".results");

const calculateShape = () => {
  const line = input.value;
  if (!line) return;

  const shape = shapeCalc(line);
  if (!shape) {
    output.textContent = "Invalid shape type";
  }

  const perimeter = shape.getPerimeter().toFixed();
  const area = shape.getArea().toFixed();
  const type = line.split(" ")[0];

  output.textContent = `${type} Perimeter ${perimeter} Area ${area}`;
  input.value = "";
};

button.addEventListener("click", calculateShape);
