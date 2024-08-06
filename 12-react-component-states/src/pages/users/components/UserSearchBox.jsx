import { useId } from 'react';
import { string, func } from 'prop-types';
import './UserSearchBox.css';

UserSearchBox.propTypes = {
  searchTerm: string.isRequired,
  onSearch: func, // optional
};

function UserSearchBox({ searchTerm, onSearch }) {
  const id = useId();

  const handleSearch = () => {
    // Side Effects
    // DOM 접근, 속성 값 읽기
    const input = document.getElementById(id);
    const value = input.value.trim();

    onSearch?.(value);
    // if (value.length > 0) {
    // } else {
    //   alert('검색어를 입력해주세요.');
    // }
  };

  return (
    <div className="UserSearchBox">
      <div className="control">
        <label htmlFor={id}>사용자 검색</label>
        <input
          id={id}
          defaultValue={searchTerm}
          // value={searchTerm}
          // onChange={handleChange}
          // readOnly
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
