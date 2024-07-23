export default class SortableList {
  // 클래스 멤버
  static DRAGGING_CLASSNAME = "dragging";

  static create(...args) {
    return new SortableList(...args);
  }

  // 비공개 필드 멤버
  #list = null;
  #items = [];

  // 생성자
  constructor(listSelector) {
    this.#list = document.querySelector(listSelector);
    this.#items = Array.from(this.#list.children /* 자식 요소들 */);

    // 컴포넌트 초기화(initialization)
    this.#init();
  }

  #init() {
    // 구조 분해 할당
    const { DRAGGING_CLASSNAME } = SortableList; // SortableList.DRAGGING_CLASSNAME

    const list = this.#list;
    const items = this.#items;

    // 이벤트 바인딩(연결)

    // 1. 리스트 이벤트 핸들링
    list.addEventListener("dragover", (e) => {
      e.preventDefault();

      const draggedItem = items.find((item) =>
        item.classList.contains(DRAGGING_CLASSNAME)
      );

      const restItems = items.filter((item) => !Object.is(item, draggedItem));

      const replaceItem = restItems.find((item, index) => {
        return e.clientY <= item.offsetTop + item.offsetHeight * 0.5;
      });

      list.insertBefore(draggedItem, replaceItem);
    });

    // 2. 리스트 아이템 순환, 각 아이템 이벤트 핸들링
    items.forEach((item) => {
      item.setAttribute("draggable", true);

      item.addEventListener("dragstart", (e) => {
        e.currentTarget.classList.add(DRAGGING_CLASSNAME);
      });

      item.addEventListener("dragend", (e) => {
        e.currentTarget.classList.remove(DRAGGING_CLASSNAME);
      });

      const handleButton = item.querySelector('[data-role="handle"]');

      if (handleButton) {
        handleButton.addEventListener("keyup", (e) => {
          switch (e.key) {
            case "ArrowUp": {
              const prevItem = item.previousElementSibling;
              if (prevItem) {
                prevItem.before(item);

                e.currentTarget.focus();
              }

              break;
            }

            case "ArrowDown": {
              const nextItem = item.nextElementSibling;
              if (nextItem) {
                nextItem.after(item);

                e.currentTarget.focus();
              }

              break;
            }
          }
        });
      }
    });
  }

  // 인스턴스 메서드 (공유)
}
