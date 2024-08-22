import { useReducer } from 'react';
import listReducer, {
  addItem,
  deleteItem,
  editItem,
  filterList,
  resetList,
  INITIAL_LIST,
} from '@/stores/list';

function ListManager() {
  const [list, dispatch] = useReducer(listReducer, INITIAL_LIST);

  const handleAddItem = () => {
    dispatch(addItem(crypto.randomUUID().split('-').at(0)));
  };

  const handleEditItem = (editId) => {
    dispatch(editItem(editId, crypto.randomUUID().split('-').at(0)));
  };

  const handleDeleteItem = (deleteId) => {
    dispatch(deleteItem(deleteId));
  };

  const handleFilterList = () => {
    dispatch(filterList(Math.floor(Math.random() * 10)));
  };

  const handleResetList = () => {
    dispatch(resetList());
  }

  return (
    <div>
      <h2 className="headline2">리스트 관리자</h2>

      <div role="group">
        <button type="button" onClick={handleAddItem}>
          추가
        </button>
        <button type="button" onClick={handleFilterList}>
          필터링
        </button>
        <button type="button" onClick={handleResetList}>리셋</button>
      </div>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button type="button" onClick={() => handleEditItem(index)}>
              수정
            </button>
            <button type="button" onClick={() => handleDeleteItem(index)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListManager;
