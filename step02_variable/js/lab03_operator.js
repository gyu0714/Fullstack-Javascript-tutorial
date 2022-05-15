// 연산(Operation), 연산자(Operator)
// 산술 연산

console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
let a = 1;
let b = 2;
console.log(a + b);

// % : 나머지 값
console.log(10 / 3);
console.log(10 % 3);

// ** : 제곱
console.log(10 ** 3);

// 단항 연산
let c = 3;
console.log(++c); // 4
console.log(c++); // 3
console.log(c); // 4

// 비교 연산 : ==, ..., !=, ===, !==
console.log('---비교 연산---');
console.log(3 != 3);

let y = 10;
let z = '10';
console.log(y == z); // true
console.log(y === z); // false 절대 비교 값과 타입

// 논리 연산
console.log('----- 논리 연산자 -----');
// && : 모든 결과가 참일 때
console.log(10 > 9 && 'a' === 'a'); // true

// || : (or연산자) 모든 결과가 거짓일 때 => false
//      둘 중 하나라도 참이라면 true
console.log(10 < 9 || 'a' === 'b'); //false

// !(부정연산자) : 최종 결과값의 반대 값
// boolean에만 사용가능
console.log(!(10 > 9 && 'a' === 'a')); // false
console.log(!false); // true
