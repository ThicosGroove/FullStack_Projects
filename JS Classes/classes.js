class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }

  rgb() {
    return `rgb(${this.innerRGB()})`;
  }

  rgba(a = 1.0) {
    return `rgba(${this.innerRGB}, ${a})`;
  }
}

const red = new Color(255, 67, 89, "tomato");
const whit = new Color(255, 255, 255, "white");
