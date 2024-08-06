import { useId } from 'react';
import { string, func } from 'prop-types';
import './UserSearchBox.css';

// 타입 검사
UserSearchBox.propTypes = {
  searchTerm: string.isRequired,
  onSearch: func, // optional
};


function UserSearchBox({ searchTerm, onSearch }) {
  // UsersPage의 input 검색어와 검색 이벤트 핸들러 함수 가져옴

  // 접근성을 위한 고유 ID 생성(useID API)
  const id = useId();


  // 검색 버튼 이벤트 핸들러1
  const handleSearch = () => {
    const input = document.getElementById(id);

    // input 검색어의 양 옆 공백 제거
    // - input.value === defaultValue(= searchTerm)
    const value = input.value.trim();

    // 검색 이벤트 핸들러 함수2에 input 검색어(value) 전달
    onSearch?.(value);
  };

  return (
    <div className="UserSearchBox">
      <div className="control">
        <label htmlFor={id}>사용자 검색</label>
        <input
          id={id}
          defaultValue={searchTerm}
          type="search"
          placeholder="사용자 이름 입력"
        />
      </div>
      <button type="button" onClick={handleSearch}>
        찾기
      </button>
    </div>
  );
}

export default UserSearchBox;
