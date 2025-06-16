// Minimal PNG writer using pngjs would be ideal, but avoid deps.
// For now, stub an exporter that writes PPM (portable pixmap) ASCII
// which many tools can convert to PNG. Keeps repo simple.
import fs from 'fs';

export function savePPM(sprite, file='sprite.ppm', palette={0:[255,255,255],1:[0,0,0]}){
  const w=sprite.width, h=sprite.height;
  const header=`P3\n${w} ${h}\n255\n`;
  const body=[];
  for(let y=0;y<h;y++){
    const row=[];
    for(let x=0;x<w;x++){
      const idx=sprite.pixels[y][x]||0;
      const [r,g,b]=palette[idx]||[0,0,0];
      row.push(`${r} ${g} ${b}`);
    }
    body.push(row.join(' '));
  }
  fs.writeFileSync(file, header+body.join('\n'));
}
