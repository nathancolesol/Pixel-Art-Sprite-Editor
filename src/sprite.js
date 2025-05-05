export class Sprite {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.pixels = Array.from({ length: height }, () => Array(width).fill(0));
  }
  fill(color) {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        this.pixels[y][x] = color;
      }
    }
    return this;
  }
  setPixel(x, y, color) {
    if (x<0||y<0||x>=this.width||y>=this.height) return false;
    this.pixels[y][x] = color;
    return true;
  }
  getPixel(x, y) {
    if (x<0||y<0||x>=this.width||y>=this.height) return null;
    return this.pixels[y][x];
  }
}
