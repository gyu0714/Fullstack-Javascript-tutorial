// Number() : 문자열을 숫자로 변환
let strNum = '10';
let strNaN = 'Ten';

console.log(typeof Number(strNum));

// parseXXX()
// parseInt : 소수점 제외한 정수 출력
console.log(parseInt(3.14)); // 3

// parseFloat : 소수점까지 숫자로 바꿔줌
console.log(parseFloat('6.89')); // 6.89
console.log(typeof parseFloat('6.89')); // number
console.log(parseFloat('육점팔구')); // NaN
