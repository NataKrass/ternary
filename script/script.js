'use strict';

let arr = ['245', '5678', '458', '355', '325', '789', '4905'];

 arr.forEach((e) => {
   if (e[0] == '2' || e[0] == '4') {
    console.log(e);
   }
 });


Function: for ( let i = 2; i <= 100; i++){
    for (let n = 2; n < i; n++) {
        if (i % n == 0) continue Function;
    }
    console.log(i + ' Делители этого числа: 1 и ' + i)
}