window.onload=function(){
    AOS.init();
    boxUpper();
}
window.addEventListener("scroll",function(){
 let header=document.querySelector("header");
 header.classList.toggle("sticky",window.scrollY > 0);
})
window.addEventListener("pageshow",function(){
    let home =  document.querySelector("#id_home");
   home.style.color="rgba(228, 31, 31, 0.9)";
})

const boxUpper=()=>{
    let myVar = document.querySelector('.para').innertext;
    let myVarUpper;
    myVarUpper = myVar.toUpperCase();
    document.querySelector('.para').innerHTML=myVarUpper;
    let myVar2 = document.querySelector('.para2').innerText;
    let myVarUpper2;
    myVarUpper2 = myVar2.toUpperCase();
    document.querySelector('.para2').innerHTML=myVarUpper2;
    let myVar3 = document.querySelector('.para3').innerText;
    let myVarUpper3;
    myVarUpper3 = myVar3.toUpperCase();
    document.querySelector('.para3').innerHTML=myVarUpper3;
}