import greet from './dummy';
import Snap from 'snapsvg-cjs';

const app = document.querySelector('#app');
app.innerHTML = greet('World');

const snap = Snap('#svg');
const circle = snap.circle(100, 100, 50).attr({ fill: 'blue' });
circle.animate({ transform: 't500, 500'}, 3000, mina.bounce);
