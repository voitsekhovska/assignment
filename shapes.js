class Shape {
  getPerimeter() {}
  getArea() {}
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  getPerimeter() {
    return 4 * this.side;
  }
  getArea() {
    return this.side * this.side;
  }
}

class Rectangle extends Shape {
  constructor(x1, y1, x2, y2) {
    super();
    this.width = Math.abs(x1 - x2);
    this.height = Math.abs(y1 - y2);
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const shapeCalc = (line) => {
  const parts = line.split(" ");
  const type = parts[0];

  switch (type) {
    case "Square":
      return new Square(Number(parts[parts.length - 1]));
    case "Rectangle":
      return new Rectangle(
        Number(parts[2]),
        Number(parts[3]),
        Number(parts[5]),
        Number(parts[6])
      );
    case "Circle":
      return new Circle(Number(parts[parts.length - 1]));
    default:
      return;
  }
};

export { shapeCalc };
