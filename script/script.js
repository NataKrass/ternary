'use strict';

function checkType(data){
    if (typeof data != 'string'){
        console.log('Это не строка');
    } else if (data.length > 30){
        
        return data.trim().slice(0, 30) + '...';

    } else {
        return data.trim();
    }

}
console.log(checkType('                                                           01234567891011121314151251461718192021222324252627282930'));
