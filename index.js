const input = [
  "Square TopRight 1 1 Side 1",
  "Rectangle TopRight 2 2 BottomLeft 1 1",
  "Circle Center 1 1 Radius 2",
];

const squareCalc = (items) => {
  const side = Number(items[items.length - 1]);

  return {
    perimeter: 4 * side,
    area: side * side,
  };
};

const rectangleCalc = (items) => {
  const x1 = Number(items[2]);
  const y1 = Number(items[3]);
  const x2 = Number(items[5]);
  const y2 = Number(items[6]);

  const width = Math.abs(x1 - x2);
  const heigh = Math.abs(y1 - y2);

  return {
    perimeter: (width + heigh) * 2,
    area: width * heigh,
  };
};

const circleCalc = (items) => {
  const radius = Number(items[items.length - 1]);
  const pi = 3.14;

  return {
    perimeter: 2 * pi * radius,
    area: pi * Math.pow(radius, 2),
  };
};

const shapeCalc = (line) => {
  const parts = line.split(" ");
  const type = parts[0];

  if (type === "Square") return squareCalc(parts);
  if (type === "Rectangle") return rectangleCalc(parts);
  if (type === "Circle") return circleCalc(parts);
};

for (const line of input) {
  const type = line.split(" ")[0];
  const { perimeter, area } = shapeCalc(line);

  console.log(`${type} Perimeter ${perimeter} Area ${area}`);
}
