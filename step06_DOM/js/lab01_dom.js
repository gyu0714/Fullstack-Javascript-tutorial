'use strict';
// DOM 문서 객체 모델(Document Object Model)
// 웹페이지의 모든 컨텐츠를 객체로 표현하는 모델

// DOM tree
// DOM을 계층적으로 표현, 계층적인 단위는 Node(관계성에 대한 단위)

// Document 객체
// 웹 페이지 자체, 따라서 모든 HTML요소에 접근하기 위해서는 Document객체로 부터 시작

// DOM Selection(선택)
// Doc
// document.body.style.background = 'black';
// setInterval(() => (document.body.style.background = 'red'), 1000);

// getElementXXX
// getElementById
const domElement = document.getElementById('dom');
// console.log(domElement);

// getElementByClassName
const btnElement = document.getElementsByClassName('btn');
// console.log(btnElement);

// getElementByTagName
const divTags = document.getElementsByTagName('div');
// console.log(divTags);

const upBtn = document.getElementsByName('up-button');

// QuerySelector
const h1Tage = document.querySelector('#title');
// console.log(h1Tage);
const btns = document.querySelectorAll('.btn');
// console.log(btns);

// 노드를 통한 접근
// 종류
// 문서 노드
// 요소 노드
// 속성 노드
// 텍스트 노드
// 주석 노드

// 관계성
// 조상(상위) / 부모 parentNode
// 자손(하위) / 자식 childNodes, firstChild, lastChild
// 형제 nextSibling, perviousSibling
// console.log(document.childNodes);
// console.log(document.childNodes[1]);
// console.log(divTags.childNode); // undefined
// console.log(domElement.nextElementSibling);
// 노드로 특정 요소에 접근하는 경우는 어렵다

// Create
// document
const hrElement = document.createElement('hr');
// document.write('hr');

// setAttribute
// domElement.setAttribute('a', 'b');

// appendChild
const resultElement = document.getElementsByClassName('title');
// resultElement.appendChild(hrElement);

// removeChild / removeAttribute

// resultElement.innerHTML = '<strong>innerHTML</strong>';
// resultElement.innerText = '<strong>innerText</strong>';

// domElement.id = 'dom2';

// BOM Browser Object Model
// 자바스크립트를 이용하여 브라우저를 제어 가능하도록 설정하는 객체 모델!
// alert()
// prompt()
// confirm()

// console.log(location);

// setTimeout
// 일정시간 후에 함수를 실행하는 메서드
// setTimeout(print, 2000); 한번만 실행
// setInterval([handler], ms) 반복 실행
