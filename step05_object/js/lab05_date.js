// DATE
let dateObj = new Date();
console.log(dateObj);
console.log(dateObj.getFullYear());
console.log(dateObj.getMonth() + 1);
console.log(dateObj.getDate());
console.log(dateObj.getDay());
console.log(dateObj.getHours());
console.log(dateObj.getMinutes());
console.log(dateObj.getSeconds());

// 2020년 6월 1일
console.log(new Date(2020, 6, 1));
console.log(new Date('2020-06-01'));
console.log(new Date('2020/06/01'));

// Date.parse(str) : 문자열에서 날짜 타입으로 변경
// 단, 형식은 YYYY-MM-DDTHH:mm:ss
console.log(Date.parse('2020-06-01T09:00:00'));
console.log(new Date(Date.parse('2020-06-01T09:00:00')));
