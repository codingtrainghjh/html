// let min=",sec=";
//       let timer='';

//       function startTimer(){
//         //인풋박스를 min에 가져옴
//         min = document.querySelector('#startMin').value;
//         //min이 비어있으면 0으로 세팅할 것
//         if(min == "")min = 0;
//         sec = document.querySelector('#startSec').value;
//         if(sec=="")sec = 0;
//         //1초마다 카운트를 실행
//         timer=setInterval(countTimer,1000);
//       }
//       function countTimer(){
//         if(sec !=0){
//           sec--;
//           document.querySelector('#display').innerText
//           =min + "분" + sec + "초 남았습니다.";
//         }
//         else{
//           if(min != 0){
//             min--;
//             sec = 59;
//           }
//           else{
//             clearTimer(timer);
//             document.querySelector('#display').innerText
//             ="종료 되었습니다.";
//           }
//         }
//       }
//       function resetTimer(){
//         clearTimer(timer);
//       }
//       function clearTimer(t){
//         clearInterval(t);
//         document.querySelector("#display").innerText="";
//         document.querySelector("#startMin").value="";
//         document.querySelector("#startSec").value="";
//       }