// data
const listData = {
  items: [
    { id: "3", title: "Graphics" },
    { id: "1", title: "Climatology" },
    { id: "2", title: "History of Architecture" },
    { id: "4", title: "Building design" },
  ],
};


// React.createElement 
// : 리액트 요소(React Element === 가상 DOM 요소 노드) 생성
// <li></li> React 엘리먼트 생성
const itemlist = React.createElement(
  "li",
  {
    className: "item",
  },
  React.createElement("img", {
    src: "/architectures/architecture-1.jpg",
    alt: "",
  }),
  React.createElement(
    "span",
    {
      className: "content",
    },
    "Climatology"
  ),
  React.createElement(
    "button",
    {
      type: "button",
      title: "아이템 이동 (위/아래 화살표 키 활용)",
    },
    React.createElement("img", {
      src: "/icons/handle.svg",
      alt: "아이템 이동 (위/아래 화살표 키 활용)",
    })
  )
);

// const children = [itemlist];


// React.createElement API
// <ul></ul> 리액트 엘리먼트 생성
const list = React.createElement(
  "ul",
  { className: "architectures", lang: "en" },
  // children
  itemlist
);

console.log(list);


// 리액트 앱 렌더링 (그림을 그리다, 화면에 표시)
// ReactDOM / Server or [Client]
// ReactDOM.createRoot(container/* 실제 DOM 노드: 요소 노드 */)
const container = document.getElementById("root");


// ReactDOM Root 생성
const reactDomRoot = ReactDOM.createRoot(container);
reactDomRoot.render(list);



// React.isValidElement API
console.log(React.isValidElement(list));

