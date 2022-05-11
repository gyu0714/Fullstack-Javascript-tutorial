// js의 자료형은 동적 타입(변수에 할당되는 데이터 타입이 정해져 있지 않은 상태)이다

'use strict';

// typeof
// 기본(원시, primitive)
// 객체(reference)

// Number (숫자)
console.log(10); // 양수
console.log(-10); // 음수
console.log(10.2); // 실수
console.log(typeof 10); // 10의 type
console.log(10 / 3);

// NaN : Not A Number
console.log(typeof ('Ten' / 3)); // NaN, type : Number
// Infinity
console.log(typeof (10 / 0)); // Infinity, type : Number

// String (문자열)
console.log('--------------String--------------');
console.log('큰따옴표 문자열');

// 백틱 ``
let lecture = 'JS';
console.log('우리는 JS 학습중입니다.');
console.log('우리는 lecture 학습중입니다.');
console.log('우리는' + lecture + '학습중입니다.');
// 템플릿 리터럴
console.log(`우리는 ${lecture} 학습중입니다.`);

// Boolean : true / false
console.log('--------------booleam--------------');

// Symbolic
let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1 === id2); // false
