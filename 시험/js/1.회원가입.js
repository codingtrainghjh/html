let userId = document.querySelector("#user-id");
let pw1 = document.querySelector("#user-pw1");
let pw2 = document.querySelector("#user-pw2");

userId.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkId(){
  if(userId.value.length < 4 || userId.value.length > 15){
    alert("4~15자 사이로 작성해 주세요.");
    userId.select();
  }
}
function checkPw(){
  if(pw1.value.length < 8){
    alert("8자 이상 영문과 숫자의 혼합으로 작성해 주세요.");
    pw1.value="";
    pw1.focus();
  }
}
function comparePw(){
  if(pw1.value != pw2.value){
    alert("비밀번호와 일치하지 않습니다.");
    pw2.value="";
    pw2.focus();
  }
}