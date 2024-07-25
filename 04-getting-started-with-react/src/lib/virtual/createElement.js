// React API 유사
// React.createElement(type, props, ...children)

export const VIRTUAL_ELEMENT_TYPE = Symbol('virtual.element');

function createElement(type, props, ...children) {
  return {
    $$typeof: Symbol('virtual.element'),
    type,
    key: props?.key ?? null,
    props: { ...props, children: [...(props?.children ?? []), ...children] },
  };
}

export default createElement;
