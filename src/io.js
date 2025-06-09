import fs from 'fs';

export function saveJSON(sprite, file='sprite.json'){
  fs.writeFileSync(file, JSON.stringify({w:sprite.width,h:sprite.height,p:sprite.pixels}));
}

export function loadJSON(file='sprite.json'){
  const data = JSON.parse(fs.readFileSync(file,'utf8'));
  return data;
}
