// --------------------------------------------------------------------------
// Template literal
// - 데이터 + 템플릿 = 마크업 스트링
// - 템플릿 리터럴 구문을 사용해 마크업 스트링 생성
// --------------------------------------------------------------------------

// 데이터(상태: data)
// - 타입을 지정하기 위해 const 사용
// - 클라이언트가 요청 => 서버 => 응답(JSON)
const koreanFoods = {
  caption: "한식 메뉴",
  rows: [
    { headline: "뚝배기 불고기", content: 8000 },
    { headline: "스팸치즈볶음밥", content: 7500 },
    { headline: "불고기낙지덮밥", content: 9000 },
  ],
};

function renderTable(data) {
  return [
    '<table class="table">',
    '<caption class="sr-only">' + data.caption + "</caption>",
    data.rows.reduce(function (htmlString, rowData) {
      const rowString = [
        "<tr>",
        "<th>" + rowData.headline + "</th>",
        "<td>" + numberWithComma(rowData.content) + "원" + "</td>",
        "</tr>",
      ].join("");
      return htmlString + rowString;
    }, ""),
    "</table>",
  ].join("");
}


// 🔶 renderTableString 함수를 작성하세요.
// React 식: js 안에서 마크업 구성
function renderTableString(data) {
  const markup = /* html */ `
  <table class="table">
    <caption class="sr-only">${data.caption}</caption>
    ${data.rows.reduce(function (htmlString, rowItem) {
      return  htmlString + `
      <tr>
        <th>${rowItem.headline}</th>
        <td>${numberWithComma(rowItem.content)}원</td>
      </tr>`;
    }, "")}
  </table>
  `;

  return removeSpaceHTMLString(markup)
}

function run() {
  const renderedResult = renderTableString(koreanFoods);
  return renderedResult;
}

console.log(run());

// --------------------------------------------------------------------------
// utils

// 천 단위에 콤마
function numberWithComma(numberValue) {
  return numberValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function removeSpaceHTMLString(htmlString) {
  return htmlString.replace(/\s+<|\n|>\s+/g, function ($1) {
    return $1.indexOf("<") > -1 ? "<" : $1.indexOf(">") > -1 ? ">" : "";
  });
}
