#!/usr/bin/env node
import { Sprite } from '../src/sprite.js';
import { saveJSON, loadJSON } from '../src/io.js';
const [,,cmd,...args]=process.argv;

const save = saveJSON;

if (cmd==='init'){
  const [w,h]=args.map(Number);
  const s=new Sprite(w||16,h||16);
  save(s);
  console.log('created sprite.json');
} else if (cmd==='fill'){
  const [color=1]=args.map(Number);
  const data = loadJSON('sprite.json');
  const s=new Sprite(data.w,data.h);
  s.pixels=data.p;
  s.fill(color);
  save(s);
  console.log('filled with', color);
} else if (cmd==='set'){
  const [x,y,color=1]=args.map(Number);
  const data = loadJSON('sprite.json');
  const s=new Sprite(data.w,data.h);
  s.pixels=data.p;
  if(!s.setPixel(x,y,color)){
    console.error('coords out of bounds');
    process.exit(2);
  }
  save(s);
  console.log(`set (${x},${y}) to`, color);
} else {
  console.log('usage: pase <init|fill|set>');
}
