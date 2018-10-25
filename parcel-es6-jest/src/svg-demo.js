import SVG from 'svg.js';

export default function() {
  const draw = SVG('drawing').size(300, 300)
  const rect = draw.rect(100, 100).attr({ fill: '#f06' })
  rect.move(50, 50);
}
