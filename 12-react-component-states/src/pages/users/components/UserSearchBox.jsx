import { useId } from 'react';
import { string, bool, func } from 'prop-types';
import './UserSearchBox.css';
import { throttle } from '@/utils';

// 타입 검사
UserSearchBox.propTypes = {
  searchTerm: string.isRequired,
  isInstantSearch: bool,
  onSearch: func,
  onReset: func,
};

function UserSearchBox({ searchTerm, isInstantSearch = false, onSearch, onReset, }) {
  const id = useId();

  const handleSearch = (e) => {
    // <form> 요소의 action에 설정된 주소로 폼 데이터 전송 시도
    e.preventDefault();

    const input = document.getElementById(id);
    const button = input.closest('form').querySelector('[type="submit"]');
    const value = input.value.trim();

    if (value.length > 0) {

      // 사용자 찾기 기능 실행
      onSearch?.(value);

      // 실행 이후, 검색 필드 초기화
      input.value = '';

      // 검색 기능은 찾기 버튼을 눌렀을 때 실행되므로 버튼 요소에 초점 이동
      button.focus();

    } else {
      alert('검색어를 입력해주세요.');
      input.value = '';
      input.focus();
    }
  };

  // 초기화
  const handleReset = () => {
    onReset?.();
    const input = document.getElementById(id);
    input.focus();
  };

  let handleChange = null;


  // 쓰로틀링
  if (isInstantSearch) {

    // 리-렌더 쓰로틀링 처리 (사용자가 입력 중이더라도 0.6초마다 검색 실행)
    handleChange = throttle((e) => onSearch?.(e.target.value), 600);

    // 리-렌더 디바운싱 처리 (사용자가 0.2초라도 멈칫하면 검색 실행)
    // handleChange = debounce((e) => onSearch?.(e.target.value), 200);
  }

  return (
    <form
      className="UserSearchBox"
      onSubmit={handleSearch}
      onReset={handleReset}
    >

      <div className="control">
        <label htmlFor={id}>사용자 검색</label>
        <input
          id={id}
          type="search"
          placeholder="사용자 정보 입력"
          defaultValue={searchTerm}
          onChange={handleChange}
        />
      </div>

      {/* 조건부 표시 */}
      <button hidden={isInstantSearch} type="submit">
        찾기
      </button>

      <button hidden={isInstantSearch} type="reset">
        목록 초기화
      </button>
    </form>
  );
}

export default UserSearchBox;
