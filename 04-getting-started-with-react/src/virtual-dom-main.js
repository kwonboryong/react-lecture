import { createElement, isValidElement } from "./lib/virtual/index.js";
import { createRoot } from "./lib/virtual-dom/index.js";

// 선언형 프로그래밍 (Declarative Programming)

// Data 
const listData = {
  items: [
    { id: "1", title: "Climatology" },
    { id: "2", title: "History of Architecture" },
    { id: "3", title: "Graphics" },
    { id: "4", title: "Building design" },
  ],
};

// Data + JavaScript Markup = Virtual DOM (VirtualElement Tree)
const listItems = listData.items.map(({ id, title }) => {

  // 가상 요소 반환
  const itemElement = createElement(
    // <li> 삽입
    "li",
    { className: "item" },

    // <img> 삽입
    createElement(
      "img", 
      {src: `/architectures/architecture-${id}.jpg`, alt: "" }
    ),

    // <span> 삽입
    createElement(
      "span", 
      { className: "content" }, 
      title
    ),

    // <button> 삽입
    createElement(
      "button",
      {type: "button", title: "아이템 이동 (위/아래 화살표 키 활용)"},

      // <img> 삽입
      createElement(
        "img", 
        {src: "/icons/handle.svg", alt: "아이템 이동 (위/아래 화살표 키 활용)",
      })
    )
  );

  return itemElement;
});

console.log(...listItems);


// <ul> 생성
const list = createElement(
  'ul',
  { className: 'architectures', lang: 'en' },
  ...listItems
);


// 가상 DOM 렌더링
const root = createRoot(document.getElementById('virtual-dom'));
root.render(list);


// 가상 요소 객체
console.log(isValidElement(list));

// 일반 JavaScript 객체
console.log(isValidElement({ $$typeof: Symbol('virtual.element') }));


// 정적으로 넣기
// <ul class="architectures" lang="en"></ul> 생성하기
// const list = createElement(
//   // type
//   "ul",
//   // props
//   { className: "architectures", lang: "en" },

//   // <li class="item"></li> 삽입(추가)하기
//   createElement(
//     "li",
//     { className: "item" }

//     // <img> 삽입
//     createElement(
//       'img',
//       {src:'/architectures/architectures-1.jpg',alt:''}
//     ),

//       // <span> 삽입
//       createElement(
//         'span',
//         {className:'content'},
//         'Climatology'
//       ),

//       createElement(
//         'button',
//         {type:'button',title:'아이템 이동(위/아래 화살표 키 활용'},

//         createElement(
//           'img',
//           {src:'/icons/handle.svg',alt:'아이템 이동 (위/아래 화살표 키 활용)'}
//         )
//       )
//     )
//   )
// );

// // 가상 DOM 렌더링
// const root = createRoot(document.getElementById("virtual-dom"));
// root.render(list);

// console.log(root);
