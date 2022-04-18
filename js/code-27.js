//document.querySelector(".user-27").textContent="User Number 27";

const turnBig=document.querySelector(".user-27");
turnBig.textContent="User Number 27 test";
turnBig.addEventListener('click', big)
function big(){
    turnBig.style.backgroundColor="yellow"
}
