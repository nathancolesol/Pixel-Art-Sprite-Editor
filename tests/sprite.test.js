import { Sprite } from '../src/sprite.js';

test('setPixel/getPixel within bounds', () => {
  const s=new Sprite(2,2);
  expect(s.setPixel(1,1,7)).toBe(true);
  expect(s.getPixel(1,1)).toBe(7);
});

test('out of bounds returns null/false', () => {
  const s=new Sprite(2,2);
  expect(s.setPixel(2,2,1)).toBe(false);
  expect(s.getPixel(2,2)).toBe(null);
});

test('fill paints all pixels', () => {
  const s=new Sprite(3,3).fill(9);
  expect(s.pixels.every(row=>row.every(v=>v===9))).toBe(true);
});
