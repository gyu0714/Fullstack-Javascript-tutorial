'use strict';
// 객체 : 존재하는 사물의 실체, 속성 / 기능(동작)
// 1. 리터럴
// let obj1 = {};
// console.log(obj1);
// console.log(typeof obj1);
// obj1.id = 1;
// obj1.name = 'js1';
// console.log(obj1);

// let obj2 = {
//   id: 1,
//   name: 'js1',
// };
// console.log(obj2);

// 2. 생성자 함수
// let obj3 = new Object();
// console.log(obj3);
// console.log(typeof obj3);

// 3. 사용자 정의 생성자 함수
// function Customer(id, name) {
//   step01;
//   this.id = 1;
//   this.name = 'yong ki';
// step02
// obj5 이후 변경
//   this.id = id;
//   this.name = name;

// 함수(method)
//   this.getName = () => {
//     return this.name;
//   };

//   this.getId = () => {
//     return this.id;
//   };
// }

// let obj4 = new Customer();
// console.log(typeof obj4);
// console.log(obj4);

// 문제 발생.
// let obj5 = new Customer();
// console.log(obj5);

// console.log(obj4 === obj5); // false

// let obj6 = new Customer(1, 'yongki');
// let obj7 = new Customer(2, 'mingyu');
// console.log(obj6);
// console.log(obj7);

// console.log(obj7.getName());

// property delete
// delete obj7.name;
// console.log(obj7);

// 객체 정보 반환
// console.log(obj7);
// console.log(obj7.id);
// console.log(obj7.name); // undefined
// console.log(obj7['id']);
// console.log('-------------');
// console.log(Object.entries(obj7));
// console.log(Object.keys(obj7));
// console.log(Object.values(obj7));
// console.log('-------------');
// for ~ in : ? property value도 출력?
// for (let info in obj7) {
//   console.log(`info : ${obj7[info]}`);
// }

// 화살표 함수로 변환
// 화살표 함수로 만든 this는 내부에 제대로 형성하지 않음
// const Cat = (name, age) => {
//   this.name = name;
//   this.age = age;
// };

// let cat = new Cat('yongki', 38);
// console.log(cat);

function Cat(name, age) {
  this.name = name;
  this.age = age;
}

let cat = new Cat('yongki', 38);
console.log(cat);
console.log(cat.toString());

//prototype
console.log(Cat.prototype);
console.log(Cat.prototype.toString());
console.log(Cat.prototype.constructor);

// 왜 출력이 되지 않을까?
// 객체가 만들어진 후에 사용 가능
// prototype : 객체가 만들어 지기 전의 범위에 존재하고 있기 때문에 출력이 되지 않는다
console.log(Cat.prototype.name);
console.log(Cat.prototype.age);

Cat.prototype.id = 1;
console.log(Cat.prototype.id);

// Object
console.log(Object.prototype);
// 모든 객체의 최상위, prototype은 객체의 설계도
// 모든 객체는 Object의, prototype을 통해 객체의 정보를 사용하고 있다.
// => 모든 객체는 Object를 상속하고 있다.

const user = [
  {
    id: 1,
    name: 'yongki',
    age: 38,
  },
  {
    id: 2,
    name: 'mingyu',
    age: 28,
  },
];

console.log(`${user[0].name}의 나이는 ${user[0].age} 입니다`);

// [obj] insatnceof [obj]
console.log(cat instanceof Cat);
console.log(cat instanceof Object);

// prototype을 통한 상속
function Person() {}
Person.prototype.getPlanet = function () {
  console.log('Earth');
};

function Korean(region) {
  this.region = region;
  this.getLoc = function () {
    console.log(this.region);
  };
}

// 상속 전
const k = new Korean('Busan');
// k.getPlanet();
console.log(k instanceof Korean); // true
console.log(k instanceof Person); // false

// 상속 후
Korean.prototype = Person.prototype;
const k2 = new Korean('Busan');
k2.getPlanet();
console.log(k2 instanceof Korean); // true
console.log(k2 instanceof Person); // true
