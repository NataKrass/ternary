'use strict';

function checkType(data){
    if (typeof data != 'string'){
        document.write('Это не строка');
    } else if (data.length > 30){
        data.slice(0, -1);
        data + '...';
       return data.slice(0, 30).trim() + '...';
        return data.trim();
    } else {
        return data.trim();
    }

}
console.log(checkType(' 01234567891011121314151251461718192021222324252627282930'));
