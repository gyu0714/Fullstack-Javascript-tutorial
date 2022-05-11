'use strict';
// 배열 : [요소1, 요소2, ...]
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
console.log(typeof arr1);

let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);
console.log(typeof arr2);

// 조회 : 배열명[인덱스 번호]
console.log(arr1[2]);
console.log(arr1.length); // 데이터 갯수

// ? 배열의 마지막 데이터(요소) 조회
console.log(arr1[4]);

console.log('----------------');
// 반복문을 이용하여 배열 요소 출력
for (let i = 0; i <= arr1.length - 1; i++) {
  console.log(arr1[i]);
}
