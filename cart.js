let l=['rock','paper','sessior'];
function playgame(viv){
const randomIndex = Math.floor(Math.random() * 3);
const randomMove = l[randomIndex];
console.log(randomMove);
let img1=document.querySelector("#po");
let img2=document.querySelector("#op");
img2.src=`${viv}.jpg`;
img1.src=`${randomMove}.jpg`
if(randomMove==viv){
    showTie();
}
else if(viv=='rock'){

    if(randomMove=='sessior'){
        showWin();
    }
    else if(randomMove=='paper'){
        showLoss();
    }
}
else if(viv=='paper'){
    if(randomMove=='sessior'){
        showLoss();
    }
    else if(randomMove=='rock'){
        showWin();
    }
}
else if(viv=='sessior'){
    if(randomMove=='rock'){
        showLoss();
    }
    else if(randomMove=='paper'){
        showWin();
    }
}
function showWin() {
    let text=document.getElementById('message');
    text.textContent = 'Congratulations, you win!!';
    text.style.fontWeight = 'bold';  
    text.style.fontSize = '24px';    
    

}
function showLoss() {
    let te=document.getElementById('message');
    
    te.textContent = 'sorry, you loss!!';
    te.style.fontWeight = 'bold';  
    te.style.fontSize = '24px';    

}
function showTie() {
    let te=document.getElementById('message');
    te.textContent = 'Game,tie!!';
    te.style.fontWeight = 'bold';  
    te.style.fontSize = '24px';    
}
}