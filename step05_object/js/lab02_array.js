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

// 요소 추가 : push() 배열의 맨 뒤에 순차적으로 요소 추가
let arr3 = [1, 2, 3, 4, 5];
// arr3.push(6, 7, 8, 3);
// console.log(arr3);

// unshift() : 배열의 맨 앞에 요소 추가
// arr3.unshift(0, 1, 2);
// console.log(arr3);

// pop() : 배열의 맨 뒤의 요소 삭제(+반환)
// console.log(arr3);
// arr3.pop();
// console.log(arr3);

// shift() : 배열의 맨 앞 요소 삭제(+)반환
// console.log(arr3);
// arr3.shift();
// console.log(arr3);

// splice() : 시작 인덱스의 요소를 포함하여 끝 인덱스까지 삭제
// console.log(arr3);
// arr3.splice(1, 3);
// console.log(arr3);

// slice() : 시작 인덱스부터 끝인덱스까지의 요소를 복사한 새로운 배열 반환
// console.log(arr3);
// let arr4 = arr3.slice(2, 3);
// console.log(arr4);

// indexOf : 해당 요소의 인덱스 값 반환
// 없는 요소를 입력하면 -1값 반환
// console.log(arr3);
// console.log(arr3.indexOf(0));

// find : 테스트 함수의 조건에 맞는 첫 번째 요소 값을 반환
// findIndex : 테스트 함수의 조건에 맞는 첫 번째 인덱스(위치) 값을 반환
console.log(arr3);

// find
let even = arr3.find((value) => value % 2 === 0);
let even2 = arr3.findIndex((value) => value % 2 === 0);

console.log(even);
console.log(even2);

// --
let cats = [
  {
    name: 'milo',
    age: '10',
  },
  {
    name: 'yongki',
    age: '8',
  },
  {
    name: 'pow',
    age: '12',
  },
  {
    name: 'pony',
    age: '5',
  },
];

console.log(cats);
let underTen = cats.find((cat) => cat.age < 10);
console.log(underTen);

let underTenAge = cats.filter((cat) => cat.age < 10);
console.log(underTenAge);

// for ~ of : 순차적으로 내부 요소에 접근 할수 있는 이터러블(배열을 일반화)한 객체만 사용 가능
let cities = ['Busan', 'Seoul', 'Paris', 'Jeju'];
for (let city of cities) {
  console.log(city);
}

// 유사배열 : 배열처럼 인덱스와 같이 길이 프로퍼티가 존재
let likeArray = {
  0: '오늘 점심',
  1: '뭐먹지',
  length: 2,
};

// not iterable => is iterable
// Array.from

// Array.from() : 유사 배열을 받아서 진짜 배열로 만들어줌
let arr5 = Array.from(likeArray);
console.log(arr5);

for (let el of arr5) {
  console.log(likeArray);
  console.log(el);
}

// join()
console.log(arr5.join(' '));

// foreach
let avengers = ['스파이더맨', '호크아이', '헐크'];

// version 1
// avengers.forEach((avenger) => console.log(avenger));

// version 2
// avengers.forEach(printName);
// function printName(avenger) {
//   console.log(avenger);
// }

// version 3
// avengers.forEach(function printName(avenger) {
//   console.log(avenger);
// });

let arr6 = [1, 2, 3, 4, 5];
// ? arr5 요소들을 제곱하여  expo라고 하는 배열에 담아줄 것
let expo = [];

for (let i = 0; i < arr6.length; i++) {
  expo.push(arr6[i] * arr6[i]);
  console.log(arr6[i]);
}
console.log(expo);

arr6.forEach((e) => {
  let double = e * e;
  console.log(double);
  expo.push(double);
});
console.log(expo);

// map
arr6.map((n) => expo.push(n * n));
let expo2 = arr6.map((n) => n * n);

const info = [
  {
    id: 1,
    name: 'js',
  },
  {
    id: 2,
    name: 'javascript',
  },
];

let getName = info.map((info) => info.name);
console.log(getName);

// filetr()
const todos = [
  {
    id: 1,
    todo: '자격증공부',
    done: true,
  },
  {
    id: 2,
    todo: '프로젝트',
    done: false,
  },
  {
    id: 3,
    todo: '운동',
    done: false,
  },
];

console.log(todos);
console.log(todos.find((todo) => todo.id === 3));
console.log(todos.find((todo) => todo.done === true));
console.log(todos.find((todo) => todo.done === false)); // 객체 하나만 찾음
console.log(todos.filter((todo) => todo.done === false));

// arr6 총합
console.log(arr6);
let sum = 0;
arr6.forEach((num) => {
  sum += num;
});
console.log(sum);

// reduce
let sumReduce = arr6.reduce((sum, current) => {
  sum + current;
});
console.log(sumReduce);
