// 조건문 : 조건을 만족(참 일떄) 할 때, 실행
// if(조건) {
// 실행 로직;
// }
// else : 조건을 만족하지 않을 때 실행 가능한 로직 작성

let age = -30;
if (age <= 33) {
  console.log(`ktx 할인 가능`);
} else {
  console.log(`그것은 바로 용기형`);
}

if (age > 33) {
  console.log(`ktx 할인 불가능`);
}

// else if
if (age <= 28 && age > 0) {
  console.log(`ktx 50% 할인가능`);
} else if (age <= 33 && age > 28) {
  console.log(`ktx 30% 할인가능`);
} else {
  console.log(`ktx 할인 불가능`);
}

console.log('------ CASE ------');
// switch / case 문
// break
// switch (값 or 변수) {
//     case 지정값 1 :
//         실행 로직1;
//     case 지정값 2 :
//         실행 로직 2;
//          break
// }

let lastNum = 3;

switch (lastNum) {
  case 1:
    console.log(`1일만 예약 가능`);
    break;
  case 2:
    console.log(`2일만 예약 가능`);
    break;
  case 3:
    console.log(`3일만 예약 가능`);
    break;
  case 4:
    console.log(`4일만 예약 가능`);
    break;
  case 5:
    console.log(`5일만 예약 가능`);
    break;
  case 6:
    console.log(`6일만 예약 가능`);
    break;
  case 7:
    console.log(`7일만 예약 가능`);
    break;
}
