'use strict';

// 변수의 유효범위 {}
// let, const : 블록 스코프
let scope1 = 10;
{
  let scope1 = 20;
  console.log(scope1);
}

let scpoe2 = 30;
{
  console.log(scpoe2);
}

{
  let scope3 = 40;
}
// console.log(scope3); // Uncaught ReferenceError: scope3 is not defined

// var : 함수 스코프
// 블록 스코프를 가지지 않는다.
{
  var scopeVar = 50;
}
console.log(scopeVar);

var scopeVar2 = 60;
console.log(scopeVar2);
(function () {
  scopeVar2++;
  console.log(scopeVar2);
});

(function () {
  var scopeVar3 = 70;
})();

// hoisting : 끌어올리다
console.log(hoist);
var hoist = 'rarara';

// hoist : let
// console.log(hoistLet);
// let hoistLet = 'hoist(let)';

// 함수의 선언식과 표현식의 차이점
print1();
print2(); // Uncaught TypeError: print2 is not a function

function print1() {
  console.log('print1');
}

var print2 = function () {
  console.log('print2');
};

// Closure

// 렉시컬 (Lexical) 스코프
// : 코드상에 작성된 문맥에서 스코프가 결정

// var x = 'global';
// function foo() {
//     var x = 'local';
//     bar();
// }

// function bar() {
//     console.log(x);
// }
// foo(); // global
// bar(); // global

// step01
// let one;
// one = 1;

// function addNum(num){
//     console.log(one + num);
// }

// addNum(5); // 오류 ? 6?

// step02
function makeSum(x) {
  return function (y) {
    return x + y;
  };
}

const add3 = makeSum(3);
console.log(add3(2)); // 5

// 클로저의 조건
// 1. 내부 함수가 익명함수로 외부 함수의 return값이 될 때
// 2. return 내부 함수는 외부 함수 실행 환경에서 호출 될 때
// 3. 내부 함수 스코프의 변수는 외부 함수 스코프에 존재 할 때

// function count() {
//     var i;
//     for(i = 1; i < 10; i++){
//         console.log(i);
//     };
// };
// count();

// function count2() {
//     var i;
//     for(i = 1; i < 10; i++){
//         setTimeout(function timer() {
//             console.log(i);
//         }, i*100);
//     };
// };
// count2();

function count3() {
  var i;
  for (i = 1; i < 10; i++) {
    (function printNum(num) {
      setTimeout(function timer() {
        console.log(num);
      }, i * 100);
    })(i);
  }
}
count3();
