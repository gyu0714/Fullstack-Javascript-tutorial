// Event : : 이벤트 실행시 자바스크립트 내부적으로 만들어 지는 객체
const btnElement1 = document.querySelector('.btn');

btnElement1.addEventListener('click', (event) => {
  //   console.log(this);
  //   console.log(event);
  //   console.log(event.target);
  //   console.log(event.currentTarget);
});

// 이벤트 흐름 : 이벤트가 발생하는 HTML 요소는 계층적인 구조로 되어있기 때문에, 우리가 알게 모르게 주변 요소에 영향을 미치고 있음
// 이벤트 전파(Propagation) : 전파되는 방향을 기준으로 버블링(Bubbling), 캡쳐링(Capturing) 이 있음

const bodyElement = document.querySelector('body');
const divElement = document.querySelector('div');
const btnElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const linkElement = document.querySelector('a');

// Bubbling
// 형제관계에는 영향을 미치지 않는다.
bodyElement.addEventListener('click', () => {
  console.log(bodyElement);
  //   event.stopPropagation();
});
divElement.addEventListener('click', () => {
  console.log(divElement);
});

btnElement.addEventListener('click', () => {
  console.log(btnElement);
  //   event.stopPropagation();
});

inputElement.addEventListener('click', () => {
  console.log(inputElement);
});

//preventDefault();
linkElement.addEventListener('click', (event) => {
  // console.log(linkElement);
  event.preventDefault();
});

// Capturing : 부모요소 -> 자식요소
// bodyElement.addEventListener(
//   'click',
//   () => {
//     console.log(bodyElement);
//   },
//   true
// );
// divElement.addEventListener(
//   'click',
//   (event) => {
//     console.log(divElement);
//     event.stopPropagation();
//   },
//   true
// );

// btnElement.addEventListener(
//   'click',
//   (event) => {
//     console.log(btnElement);
//     event.stopPropagation;
//   },
//   true
// );

// nav
// ? 각각의 모든 li태그를 클릭 시, 해당 li태그의 텍스트 출력
const nav1 = document.querySelector('#nav1');
const nav2 = document.querySelector('#nav2');
const nav3 = document.querySelector('#nav3');
const nav4 = document.querySelector('#nav4');
const navElement = document.querySelector('ul');

// nav1.addEventListener('click', () => {
//   console.log(nav1.textContent);
// });

// target : 부모요소에서 지정, 자식요소 선택 가능
navElement.addEventListener('click', (event) => {
  //   console.log(navElement.textContent);
  console.log(event.target.textContent);
});
