// --------------------------------------------------------------------------
// operators (nullish, optional chaining)
// - null, undefined 처리 조건 연산자 활용
// - 선택적 연결 구문 활용
// --------------------------------------------------------------------------

function nullish() {
  let value = 0;

  let result = value || 100;
  console.log({ '||': result });

  function isNullOrUndefined(value) {
    return value === null || value === undefined ? true : false;
  }

  result = !isNullOrUndefined(value) ? value : 100;
  console.log({ isNullOrUndefined: result });

  // 🔶 null 병합 연산자 코드를 작성합니다.
  // 참고: https://mzl.la/3vQUYin | https://mzl.la/3PXiOQ9
}


function optionalChaining() {
  const topic = {
    _title: '매년 업데이트 되는 ECMAScript',

    getTitle() {
      return this._title;
    },

    setTitle(value) {
      this._title = value;
    },
  };


  // null이 아니고 배열[]이 아닌 객체(object)를 찾기 위한 조건문
  // - typeof는 null, [], {} => object로 보여주기 때문
  if (topic !== null && typeof topic === 'object' && !Array.isArray(topic)) {
    let title, name;

    if (typeof topic.getTitle === 'function') {
      title = topic.getTitle();
    }

    if (typeof topic.getName === 'function') {
      name = topic.getName();
    }

    console.log({ titleValue: title });
    console.log({ nameValue: name });
  }

  // 🔶 optional chaining 코드를 사용해 조건 처리하세요.
  // 참고: https://mzl.la/3xx6Arc
  console.log(topic?.getTitle?.());
  console.log(topic?.getName?.());
}

function run() {
  nullish();
  optionalChaining();
}

run();
