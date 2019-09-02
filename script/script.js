'use strict';

let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

for (let i = 0; i < 7; i++) {
   if (week[i] == 'сб' || week[i] == 'вс') {
     document.write(`<i>${week[i]}</i><br>`);
   } else if (week[i] == 'пн') {
    document.write(`<b>${week[i]}</b><br>`);
   } else {
     document.write(`${week[i]}<br>`);
   }
 }
console.log(week);