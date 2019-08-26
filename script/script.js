'use strict';

let lang = 'ru';
let arr;

if (lang == 'ru') {
     arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang == 'en') {
    arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
console.log(arr);

switch (lang) {
    case 'ru':
     arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    break;
    case 'en':
        arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
    break;
}
console.log(arr);

 arr = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(arr[lang]);

let namePerson;

namePerson === 'Артем' ? console.log('директор') : console.log('студент');
namePerson === 'Максим' ? console.log('преподаватель') : console.log('студент');
