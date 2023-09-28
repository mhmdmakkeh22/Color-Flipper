let colors=['red','green','blue','black','white'];
let btn=document.getElementById("btn");
let color=document.querySelector('.color');

btn.addEventListener('click',function(){
let randNum=getRandomNum();
document.body.style.backgroundColor=colors[randNum];
color.textContent=colors[randNum];
});

getRandomNum=()=>{return Math.floor(Math.random()*colors.length);}