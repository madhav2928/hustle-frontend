'use strict'
const scoreplayer1 = document.querySelector('.p1');
const scoreplayer2 = document.querySelector('.p2');
const buttonp1 = document.querySelector('#btn1');
const buttonp2 = document.querySelector('#btn2');
const buttonreset = document.querySelector('#reset');

const target = 50;
let currp1 = 0 ;
let currp2 = 0 ;
let flag = 1;


buttonreset.addEventListener('click',function(){
    currp1 = 0;
    currp2 = 0;
    scoreplayer1.textContent = 0;
    scoreplayer2.textContent = 0;
    flag =1;
});

buttonp1.addEventListener('click',function(){
    if(!flag){
        alert('Wrong Player');
        return ;
    }
    flag = 0;
    currp1 += Math.trunc(Math.random()*10)+1;
    scoreplayer1.textContent = currp1;
    if(currp1>=target)
    {
        alert(`Player 1 won with a score of ${currp1}`);
    }
});

buttonp2.addEventListener('click',function(){
    if(flag){
        alert('Wrong Player');
        return ;
    }
    flag = 1;
    currp2 += Math.trunc(Math.random()*10)+1;
    scoreplayer2.textContent = currp2;
    if(currp2>=target)
    {
        alert(`Player 2 won with a score of ${currp2}`);
    }
})