export default class Vector {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x || 0;
    this.y = y || 0;
  }

  mult(value: number) {
    return new Vector(this.x * value, this.y * value);
  }

  mag() {
    return Math.hypot(this.x, this.y);
  }

  normalize() {
    const mag = this.mag();

    return new Vector(this.x / mag, this.y / mag);
  }

  limit(max: number) {
    const magSquare = this.x * this.x + this.y * this.y;
    const maxSquare = max * max;
    if (magSquare > maxSquare) {
      return this.normalize().mult(max);
    }
    return this;
  }
}
