 //지정할 값 호출하기
 let userId= document.querySelector("#user-id");
 let pw1= document.querySelector("#user-pw1");
 let pw2= document.querySelector("#user-pw2");

 //콜백함수 역할부여
 //onchange : 값이 변화하면 이벤트 발생
 userId.onchange = checkId;
 pw1.onchange = checkPw;
 pw2.onchange = comparePw;

 //함수 - 오류시 역할 지정하기
 //(userId.value.length) = (어떤함수의.값의.길이가)
 function checkId(){
   if (userId.value.length < 4 || userId.value.length > 15){
     alert("4~15 자리의 영문과 숫자를 사용하세요.");
     userId.select(); //select : 그 블록의 값을 잡아라
   }
 }
 function checkPw(){
   if(pw1.value.length < 8){
     alert("비밀번호는 8자리 이상이어야 합니다.");
     pw1.value = "";
     pw1.focus(); //focus : 그 블록으로 시선(커서)을 옮겨라
   }
 }
 function comparePw(){
   if(pw1.value !=pw2.value){
     alert("암호가 다릅니다. 다시 입력하세요.");
     pw2.value = "";
     pw2.focus();
   }
 }