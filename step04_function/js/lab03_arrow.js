'use strict';
// 화살표 함수 : => 표기법, 변수에 익명함수를 지정할 때
// let arrow = function () {
//   console.log(`화살표함수`);
// };

let arrow = () => {
  console.log('화살표 함수');
};

arrow();

// let add = function (x, y) {
//   console.log(x + y);
//   return x + y;
// };

// add(1, 2);

let add = (x, y) => {
  console.log(x + y);
  return x + y;
};

add(2, 5);

let printName = (name) => console.log(name);

printName('yong ki');

// 즉시 실행 함수
(function imdFunction1() {
  console.log('즉시실행 함수 1');
})();

(function imdFunction2() {
  console.log('즉시실행 함수 2');
})();

// ? 매개변수가 있는 즉시실행 함수를 만들기

let name1 = 'yong ki jjang';
(function imdFunction3() {
  console.log(name1);
})(name1);
