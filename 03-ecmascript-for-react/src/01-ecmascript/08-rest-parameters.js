// --------------------------------------------------------------------------
// rest parameters

function _sum() {
  // 유사 배열임(진짜 배열이 아님)
  console.log(Array.isArray(arguments), arguments.length);
  // [ false, 5 ] [ false, 3 ]

  // 유사 배열 -> (진짜) 배열로 바꿈
  const numbers = Array.from(arguments); // array? like array object

  // 진짜 배열이 됨
  console.log(Array.isArray(numbers), numbers.length);
  // [ true, 5 ] [ true, 3 ]

  return numbers.reduce((result, number) => result + number, 0);
}

// 🔶 나머지 매개변수를 사용해 sum 함수 코드 로직을 다시 작성합니다.
const sum = (...numbers) => numbers.reduce((total, number) => total + number);

// arguments
let result1_1 = _sum(2, 3, 9, 12, 105);
let result1_2 = sum(2, 3, 9, 12, 105);

console.log(result1_1); // 131
console.log(result1_2); // 131
console.log(Object.is(result1_1, result1_2)); // true

let result2_1 = _sum(90, 418, -7);
let result2_2 = sum(90, 418, -7);

console.log(Object.is(result2_1, result2_2)); // true
