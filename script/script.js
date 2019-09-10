'use strict';

let input = document.querySelector('input');

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height; 
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.create = function(){
        if(input.value.split('')[0] === '.'){
            let newDiv = document.createElement("div");
            document.querySelector('body').appendChild(newDiv);
            newDiv.textContent = input.value;
            let newDivClass = input.value.split('');
            newDivClass.shift();
            newDiv.className = newDivClass.join('');
        }else if(input.value.split('')[0] === '#'){
            let newParag = document.createElement("p");
            document.querySelector('body').appendChild(newParag);
            newParag.textContent = input.value;
        }
       
    }
}

let dom = new DomElement(input, '35px', '100%', '#202020', '14px');
document.querySelector('body').addEventListener('click', function(){
    dom.create();  
})
