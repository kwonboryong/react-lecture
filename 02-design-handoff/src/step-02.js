// ---------------------------------------------------------
// [ ] STEP 1. Vanilla Script (ES + DOM API)
// [x] STEP 2. Class Programming
// [ ] STEP 3. Web Components API
// ---------------------------------------------------------
import SortableList from './SortableList.js';

// Class => Instance
// API 1. new Class()
const sortableList1 = new SortableList('.list');
console.log(sortableList1);

// 클래스 재사용(reuse)
// API 2. Class.create()
const sortableList2 = SortableList.create('.another-list');
console.log(sortableList2);
