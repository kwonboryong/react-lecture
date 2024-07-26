import React, { createElement as h } from "https://esm.sh/react";

// 클래스 컴포넌트 --------------------------------------
export default class NumberList extends React.Component {
  // 컴포넌트 속성
  // 생성자
  constructor(props) {
    // 반드시 super()의 실행이 필요함
    super(props);

    // 암묵적으로 클래스로부터 생성된 인스턴스
    // return this;
  }

  // 렌더 메서드
  render() {
    // 컴포넌트 속성 접근
    // props: 읽기 전용
    console.log(this.props);


    // 동적으로 컴포넌트 생성
    const children = Array(this.props.count).fill(null).map((_, index) => 
      h('li', {}, `${index + 1}01`)
    );


    // 리액트 요소 반환
    return React.createElement(
      "ul",
      { className: "architectures", lang: "en", id: this.props.id },
      children
    );
  }
}


// const list1 = React.createElement(NumberList, { id: "list-1", count: 3 });
// const list2 = h(NumberList, { id: "list-2", count: 5 });
// const list3 = h(NumberList, { id: "list-3", count: 11 });

