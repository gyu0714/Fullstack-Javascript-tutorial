// 문자열 길이 length
let str1 = '부산광역시 해운대구 센텀동로 41 센텀 벤처타운';
console.log(str1.length);

// charAt(idx) : 해당 위치 인덱스의 문자 반환
console.log(str1.charAt(3));

// substring(idx1, idx2) : idx1 부터 idx2 -1 값 까지
console.log(str1.substring(5, 9));

// replace(바꾸려는 글자, 바꿀 글자);
console.log(str1.replace('센텀', '대연'));

// split('') : 기준에 따라 문자열을 분할하여 배열로 반환
console.log(str1.split(' '));

// concat() : 문자열 결합
console.log(''.concat(`조금있으면 밥 먹는다~`));
