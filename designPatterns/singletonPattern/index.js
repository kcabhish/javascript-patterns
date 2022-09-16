import OneRing from './ring.js';

let x =new OneRing('ring or sauron');
// any other instance after the first one will fail
let y =new OneRing('proposal ring');