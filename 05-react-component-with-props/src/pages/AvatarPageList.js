import React from 'https://esm.sh/react';

function Avatar({ img }) {
  return React.createElement(
    'li',
    { className: "avatar" },

    React.createElement(
      'img',
      {
        src: `/architectures/architecture-${img}.jpg`,
        alt: "",
      }
    ),

    React.createElement (
      "span",
      {
        className: "content",
      },
    )
  )
}

export default Avatar;