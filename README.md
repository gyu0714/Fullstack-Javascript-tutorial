# javascript-tutorial

WEB-FULLSTACK EDUCATION for javascript

---

## step01_basic

- intro
- syntax
- script
- output
  - prompt
  - alert
  - document.write()
  - HTML 요소를 통한 출력
    - innerHTML

---

## step02_data

- variable
  - let
  - var
  - const
- type
  - Number
    - NaN
    - Infinity
  - String
  - Boolean
  - Symbol
- Operator
  - String op : 덧셈만 가능
  - 사칙연산
  - % : 나머지 값
  - \*\* : 제곱
  - 단항연산
  - 비교연산
  - 논리연산
    - &&
    - ||

---

## step03_controll_folw

- if
- switch / case
  - break
- loop
  - while
  - for

---

## step04_function

- function_syntax
  - 선언식
  - 표현식
- scope
  > 범위
  - let, const
  - var
- arrow function

---

## step05_object

- object
- 리터럴
- 생성자 함수
  - [var] = new [function()]
- 사용자 정의 생성자 함수
- 객체정보 반환
- 화살표 함수로 만든 this 객체 적용 불가능
- prototype
- constructor
- `array`
  - length : 배열 길이 확인
  - push() : 배열에 요소 추가
  - unshift() : 배열 맨 앞 요소 추가
  - shift() : 배열 맨 앞 요소 삭제,반환
  - pop() : 배열의 맨뒤 요소 삭제
  - splice() : 시작 인덱스의 요소를 포함하여 끝 인덱스까지 삭제
  - slice() : 시작인덱스 부터 끝 인덱스까지 복사 후 반환
  - indexOf() : 해당 요소의 인덱스 값 반환
  - find() : 테스트 함수의 조건에 맞는 첫 번째 요소 값을 반환
  - findIndex() : 테스트 함수의 조건에 맞는 첫 번째 인덱스(위치) 값을
  - Array.from() : 유사배열을 진짜 배열로 만들어줌
  - join() : 배열을 합쳐 줌
  - for ~ of : 순차적으로 내부 요소에 접근 할수 있는 이터러블(배열을 일반화)한 객체만 사용 가능
  - foreach
  - Map()
  - filter()
  - reduce()
  - 유사 배열 : 이터럴하지 않음
- string
  - length
  - charAt(idx)
  - substring()
  - replace()
  - split()
  - concat()
- number
  - Number()
  - parseInt()
  - parseFloat()
- DATE

## step06_DOM

- dom
- getelementXXX
- querySelector
- bom
- event
  - eventhandler
  - focus
- event-apply
  - bubbling
  - capturing
  - stopPropagation()
  - preventDefault()
  - target()

---

## step07_WEB_APPLY

- 삼항연산자
- Turthy / Falsy
- 논리연산자
- parameter / argument
- 비구조화 문법
- 파라미터와 인자
- rest
- spead
- `상속`
  - 프로토타입
- `JSON`
  - stringfy()
  - parse()
- `async / await 비동기`
  - callBack()
  - `Promise()`
    - pending
    - fullfilled
    - reject
      - try / catch / finally
    - `then`
    - error 처리
  - promise.all()
  - promise.rase()
  - chainingMethod : then()을 여러번 사용하는 방식
  - HTTP 통신 방식에 대한 이해
    - `method`
      - GET : 입력
      - POST : 조회
      - PUT : 수정
      - DELETE : 삭제
