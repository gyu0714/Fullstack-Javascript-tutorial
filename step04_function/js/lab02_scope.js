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
