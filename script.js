//console.log("this is js");
let eMail=document.querySelector(".mail");
let wrongEmail;
let sign=document.querySelector(".sign1");
sign.onclick=function(){
  console.log("get started was clicked");
  if(eMail.value==''){
    alert("email id is not entered;please enter");
  }
  /*else if(eMail.value!=){
    alert("invalid email id ; please enter a valid one")
  }*/
}