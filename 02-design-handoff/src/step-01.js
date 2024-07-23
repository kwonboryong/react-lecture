// ---------------------------------------------------------
// [x] STEP 1. Vanilla Script (ES + DOM API) -> 재사용하려면 복붙
// [ ] STEP 2. Class Programming -> 재사용 가능
// [ ] STEP 3. Web Components API
// ---------------------------------------------------------

const DRAGGING_CLASSNAME = "dragging";

const list = document.querySelector(".list");

list.addEventListener("dragover", (e) => {
  e.preventDefault();

  const draggedItem = listItems.find((item) =>
    item.classList.contains(DRAGGING_CLASSNAME)
  );

  const restItems = listItems.filter((item) => !Object.is(item, draggedItem));

  const replaceItem = restItems.find((item, index) => {
    return e.clientY <= item.offsetTop + item.offsetHeight * 0.5;
  });

  list.insertBefore(draggedItem, replaceItem);
});

<<<<<<< HEAD
const listItems = Array.from(list.querySelectorAll("li"));

listItems.forEach((item) => {
  item.setAttribute("draggable", true);

  item.addEventListener("dragstart", (e) => {
    e.currentTarget.classList.add(DRAGGING_CLASSNAME);
  });

  item.addEventListener("dragend", (e) => {
=======
const listItems = Array.from(list.querySelectorAll('li'));

listItems.forEach((item) => {
  item.setAttribute('draggable', true);

  item.addEventListener('dragstart', (e) => {
    e.currentTarget.classList.add(DRAGGING_CLASSNAME);
  });

  item.addEventListener('dragend', (e) => {
>>>>>>> main
    e.currentTarget.classList.remove(DRAGGING_CLASSNAME);
  });

  const handleButton = item.querySelector('[data-role="handle"]');

  if (handleButton) {
<<<<<<< HEAD
    handleButton.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowUp": {
=======
    handleButton.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'ArrowUp':
>>>>>>> main
          const prevItem = item.previousElementSibling;
          if (prevItem) {
            prevItem.before(item);

            e.currentTarget.focus();
          }

          break;
<<<<<<< HEAD
        }
        case "ArrowDown": {
=======

        case 'ArrowDown':
>>>>>>> main
          const nextItem = item.nextElementSibling;
          if (nextItem) {
            nextItem.after(item);

            e.currentTarget.focus();
          }

          break;
<<<<<<< HEAD
        }
=======
>>>>>>> main
      }
    });
  }
});
