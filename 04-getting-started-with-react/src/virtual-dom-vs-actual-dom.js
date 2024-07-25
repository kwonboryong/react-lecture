// Virtual DOM (가상 문서 객체 모델)
// : 실제 DOM을 추상화(단순화)
// * 단순화: 먼저 사물의 특징으로 단순화하여 사물을 인식할 수 있도록 하는 것

import { createElement } from "./lib/virtual/index.js";
import { createRoot } from "./lib/virtual-dom/index.js";

// -----------------------------------------------------------

// (추상화된, 단순화된) 가상 요소 생성

// 자식(하위) 요소
const figcationVElement = createElement('figcaption');

// 부모(상위) 요소
// API: createElement(type, props, child1, child2, ..., childN)
// API: createElement(type, props, child1, child2, ...children)
// - props는 attributes/ child는 children
const figureVElement = createElement('figure', null, figcationVElement);

// 가상 요소를 실제 DOM 요소로 렌더링
// - virtual-dom / 
// - createRoot(container): 가상 DOM을 추가할 HTML 컨테이너를 매개변수로 넣음
const virtualRootElement = document.getElementById('virtual-dom');
const vRoot = createRoot(virtualRootElement);
vRoot.render(figureVElement);
// vRoot는 render()를 갖고 있다.


console.dir(vRoot); // object 객체 (단순화됨)

// -----------------------------------------------------------

// 실제 DOM 
// (웹 API 사용 -> 문서 객체(Document Object) 생성)

// 부모(상위) 요소
const figureElement = document.createElement('figure');

// 자식(하위) 요소
const figcaptionElement = document.createElement('figcaption');

// 요소 간 관계 형성
figureElement.append(figcaptionElement); // figure 객체의 children에 figcation이 생김

// 실제 DOM에 마운트(착장, 렌더링)
const actualDomElement = document.getElementById('actual-dom');
actualDomElement.append(figureElement);


console.dir(figureElement); // figure 객체


