let price;
let result = 0;

let count1;
let result1 = 0;
let count2;
let result2 = 0;
let count3;
let result3 = 0;
let count4;
let result4 = 0;
let count5;
let result5 = 0;
let count6;
let result6 = 0;
let count7;
let result7 = 0;
let count8;
let result8 = 0;
let count9;
let result9 = 0;
let count10;
let result10 = 0;
let count11;
let result11 = 0;

function plus1(count1,price) {
  result += parseInt(price);
  result1 += parseInt(count1);
  document.querySelector("#order1").innerText = "이탈리안b.m.t " + result1 ;
  document.querySelector("#total").innerText = result+ "원";
}

function plus2(count2,price) {
  result += parseInt(price);
  result2 += parseInt(count2);
  document.querySelector("#order2").innerText = "로티세리 치킨 " + result2 ;
  document.querySelector("#total").innerText = result+ "원";
}
function plus3(count2,price) {
  result += parseInt(price);
  result2 += parseInt(count2);
  document.querySelector("#order").innerText = "터키베이컨" + result2 ;
  document.querySelector("#total").innerText = result+ "원";
}

function minus1(count1,price) {
  if(result1>=1){
  result -= parseInt(price);
  result1 -= parseInt(count1);
  }
  if(result1==0){
    document.querySelector("#order1").innerText = "" ;
  }
  else
  document.querySelector("#order1").innerText = "이탈리안b.m.t " + result1 ;
  document.querySelector("#total").innerText = result + "원";
}

function reset() {
  price;
  result = 0;
  count1 = 0;
  result1 = 0;
  count2 = 0;
  result2 = 0;
  count3 = 0;
  result3 = 0;
  count4 = 0;
  result4 = 0;
  count5 = 0;
  result5 = 0;
  count6 = 0;
  result6 = 0;
  count7 = 0;
  result7 = 0;
  count8 = 0;
  result8 = 0;
  count9 = 0;
  result9 = 0;
  count10 = 0;
  result10 = 0;
  count11 = 0;
  result11 = 0;


  
document.querySelector("#order1").innerText = "";
document.querySelector("#order2").innerText = "";
document.querySelector("#order3").innerText = "";
document.querySelector("#order4").innerText = "";
document.querySelector("#order5").innerText = "";
document.querySelector("#order6").innerText = "";
document.querySelector("#order7").innerText = "";
document.querySelector("#order8").innerText = "";
document.querySelector("#order9").innerText = "";
document.querySelector("#order10").innerText = "";
document.querySelector("#order11").innerText = "";
document.querySelector("#total").innerText = "";
}

function ordercom() {
  alert('주문완료입니다.');
}