'use strict';
// 순서
// var
var x; // 선언
// 할당
x = 10;

// 선언 + 할당 = 초기화
var x2 = 20;

console.log(x);
console.log(x2);

x = 30; // 재초기화
console.log(x);

// var x = 40; => error

// let
let y = 5;
y = 15;

// let y = 25; error

// 변수의 범위
{
  let y = 35;
}

// const : Constant 상수
const c = 10;
console.log(10);

// Uncaught TypeError: Assignment to constant variable.
// c = 20;
