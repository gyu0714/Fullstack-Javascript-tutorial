'use strict';

// 이벤트 적용 문법
const describeElement = document.getElementById('describe');
const checkElement = document.getElementById('check');
const contentElement = document.querySelector('#content');
const content2Element = document.querySelector('#content2');
const checkServiceElement = document.querySelector('.checkService');
const emailElement = document.querySelector('#email');
const invalidMsgElement = document.querySelector('#invalidMsg');
const emailOutput = document.querySelector('#emailOutput');
// 1. 인라인 방식
// function clickFunc() {
//   describeElement.innerHTML = '계좌 조회 서비스';
// }

// 2. 프로퍼티 방식
// 함수를 여러개 중복 할 수 없슘댱
// checkElement.onclick = function clickFunc() {
//   describeElement.innerHTML = '계좌 조회 서비스';
// };

// checkElement.onclick = function clickFunc() {
//   contentElement.innerHTML = '계좌 조회 서비스';
// };

// 3.이벤트 핸들러
// 중복 가능~
// version 1
// checkElement.addEventListener('click', function clickFunc() {
//   describeElement.innerHTML = '계좌 조회 서비스';
//   contentElement.innerHTML = '계좌 조회 서비스22';
// });

// version 2
// const clickFunc = () => {
//   describeElement.innerHTML = '계좌 조회 서비스';
//   contentElement.innerHTML = '계좌 조회 서비스22';
// };

// checkElement.addEventListener('click', clickFunc);

// 이벤트 종류
// MouseEvent : Click, dbclick, mouseup, mousedown, ...

const onCheckService = () => {
  //   console.log(checkServiceElement.classList.contains('hide'));
  checkServiceElement.classList.remove('hide');
};

const downCheckService = () => {
  checkServiceElement.classList.add('hide');
};
checkElement.addEventListener('mouseover', onCheckService);
checkElement.addEventListener('mouseout', downCheckService);

// FocusEvent : focus, blur, focusin, focusout, ...
// 이메일 입력 -> @ 없을 경우에 : 이메일 형식이 올바르지 않음

// const checkEmail = () => {
//   if (emailElement.value.includes('@')) {
//     invalidMsgElement.innerHTML = '굳';
//     invalidMsgElement.classList.remove('onRed');
//   } else {
//     invalidMsgElement.innerHTML = '이메일 형식이 올바르지 않음';
//     invalidMsgElement.classList.add('onRed');
//   }
// };

// emailElement.addEventListener('blur', checkEmail);

// KeyboardEvent : keydown, keypress, keyup, ...
// const onKeydown = (event) => {
//   emailOutput.innerHTML += event.key;
// };

// emailElement.addEventListener('keydown', onKeydown);
