#!/usr/bin/env node
import { Sprite } from '../src/sprite.js';
import fs from 'fs';
const [,,cmd,...args]=process.argv;
if (cmd==='init'){
  const [w,h]=args.map(Number);
  const s=new Sprite(w||16,h||16);
  fs.writeFileSync('sprite.json', JSON.stringify({w:s.width,h:s.height,p:s.pixels}));
  console.log('created sprite.json');
} else {
  console.log('usage: pase init [w h]');
}
