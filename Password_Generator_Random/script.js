const Btn = document.querySelector(".btn");
const Inp = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alertCont = document.querySelector(".alert-container");
Btn.addEventListener("click",() => {
  createPassword();
});
copyIcon.addEventListener("click",() => {
  copyPassword();
  if(Inp.value){
    alertCont.classList.remove("active");
    setTimeout(() => {
      alertCont.classList.add("active");
    },2000);
  }
});

function createPassword() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz_@#ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordlength = 8;
  let password = "";
  for(let index= 0;index < passwordlength;index++){
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum,randomNum+1);
  }
  Inp.value = password;
  alertCont.innerText = password + "copied";
}

function copyPassword() {
  Inp.select();
  Inp.setSelectionRange(0,9999);
  navigator.clipboard.writeText(Inp.value);
}