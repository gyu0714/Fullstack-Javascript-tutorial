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
- `scope`
  > 범위
  - let, const
  - var
  - closure
    - 렉시컬 스코프 : 코드상에 작성된 문맥에서 스코프가 결정
      클로저의 조건
    1. 내부 함수가 익명함수로 외부 함수의 return값이 될 때
    2. return 내부 함수는 외부 함수 실행 환경에서 호출 될 때
    3. 내부 함수 스코프의 변수는 외부 함수 스코프에 존재 할 때
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
  - axios
    - GET : 조회
    - POST : 입력
    - PUT : 수정
    - DELETE : 삭제
    - PATCH : 기본 형태는 보존하고 입력한 정보만 수정
      Fetch

---

`HTTP 구조`

1. Start Line
   HTTP 메소드, Request(요청) 타겟 (= 목표 주소), HTTP 버전, HTTP 상태코드 ...
   HTTP 메소드 종류: GET(데이터 요청), POST(데이터 추가), PUT(데이터 수정), DELETE(데이터 삭제) : https://developer.mozilla.org/ko/docs/Web/HTTP/Methods
   HTTP 상태 코드 : (1xx, 2xx, 3xx, 4xx, 5xx) : https://developer.mozilla.org/ko/docs/Web/HTTP/Status

2. Header (key : value)
   Date(현재 시간), Content-type(MIME, body부분의 미디어 타입, ex.text/html, application/json, ...),
   Content-lenght(컨텐츠 길이), Host(서버 호스트 이름과 포트번호)
   Authorization(인증 토큰), Cookie(쿠키), Accept(미디어 타입 종류)

3. Body
   실제 데이터(Request - 전송하는 데이터, Response - 반환하는 데이터)
   전송 데이터 혹은 반환 데이터가 없다면 - Body는 비어 있을 수 있음

---

`POSTMAN` : REST API 잘 작동하는지 확인하는 툴
