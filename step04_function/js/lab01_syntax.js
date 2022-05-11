'use strict';
// 함수 : 특정 기능을 수행하는 소스코드를 묶어놓은 코드뭉치

// 선언!!
// function 함수명([입력값, 매개변수]) {
//      실행 로직
//      [return  [value]];
// }

function print(num, num2) {
  console.log(`휌수 선언! ${num}, ${num2}`);
}

// 호출
print(123, 4);

// return
// 함수 전체에 대한 결과값을 return에 저장
function add(x, y) {
  return x + y;
}

// 함수를 만드는 방법 : 선언식, 표현식
// 선언식
function getName() {
  console.log('getName');
}

// 표현식
const checkAge = function () {
  console.log('표현식');
};
checkAge();

// 선언식, 표현식 차이?

// 함수 - 리턴
function minus(x) {
  return function (y) {
    console.log(y - x);
    return y - x;
  };
}

let firstVal = minus(10);
let secondVal = firstVal(20);

// 함수 - 인자(매개변수)로 함수를 호출
function hello(callBack) {
  console.log('hello');
  callBack();
}

hello(function () {
  console.log('callBack');
});
