import React from 'https://esm.sh/react';

function ArchitectureItem({ id, title }) {
  // 컴포넌트 속성(props) 설계(design)

  return React.createElement (
    "li",
    {
      key: id,
      className: "item",
    },

    React.createElement ("img", {
      src: `/architectures/architecture-${id}.jpg`,
      alt: "",
    }),

    React.createElement (
      "span",
      {
        className: "content",
      },
      title
    ),

    React.createElement (
      "button",
      {
        type: "button",
        title: "아이템 이동 (위/아래 화살표 키 활용)",
      },

      React.createElement ("img", {
        src: "/icons/handle.svg",
        alt: "아이템 이동 (위/아래 화살표 키 활용)",
      })
    )
  );
}

export default ArchitectureItem;
