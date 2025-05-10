#!/usr/bin/env node
import { Sprite } from '../src/sprite.js';
import fs from 'fs';
const [,,cmd,...args]=process.argv;

function save(sprite, file='sprite.json'){
  fs.writeFileSync(file, JSON.stringify({w:sprite.width,h:sprite.height,p:sprite.pixels}));
}

if (cmd==='init'){
  const [w,h]=args.map(Number);
  const s=new Sprite(w||16,h||16);
  save(s);
  console.log('created sprite.json');
} else if (cmd==='fill'){
  const [color=1]=args.map(Number);
  const data = JSON.parse(fs.readFileSync('sprite.json','utf8'));
  const s=new Sprite(data.w,data.h);
  s.pixels=data.p;
  s.fill(color);
  save(s);
  console.log('filled with', color);
} else {
  console.log('usage: pase <init|fill>');
}
