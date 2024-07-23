
// 이름 내보내기
/**@type {(n: number) => string} */
function numberWithComma(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}


//  기본 내보내기
export default numberWithComma;

