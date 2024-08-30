import clsx from 'clsx';
import { useId, useState } from 'react';
import { bool, func, string } from 'prop-types';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { throttle } from '@/utils';
import S from './style.module.css';

AppInput.propTypes = {
  label: string.isRequired,
  email: bool,
  password: bool,
  passwordConfirm: bool,
  isHiddenLabel: bool,
  onInput: func,
};

function AppInput({
  label,
  email = false,
  password = false,
  isHiddenLabel = false,
  onInput,
  ...restProps
}) {

  // 각 입력 필드에 고유한 ID 생성
  const id = useId();

  /* 초기 입력 타입 설정 -------------------------------------------------- */
  const [type, setType] = useState(() => {
    let type = 'text';
    if (email) type = 'email';
    if (password) type = 'password';
    return type;
  });


  /* 입력 값과 이벤트 핸들러 ------------------------------------------------ */
  const [inputValue, setInputValue] = useState('');

  // 입력이 발생할 때 호출되는 함수
  const handleInput = throttle((e) => {
    const userInputValue = e.target.value;
    
    setInputValue(userInputValue);
    onInput?.(userInputValue);
  }, 600);

  // 공백 확인(사용자가 값을 입력했는지 여부 확인)
  const isInputed = inputValue.trim().length > 0;


  /* 비밀번호 가시성 토글 기능 ------------------------------------------------- */

  // 비밀번호가 현재 표시되고 있는지 여부를 관리
  const [isVisible, setIsVisible] = useState(false);

  // 마우스 오버 시 레이블
  const visibleLabel = `패스워드 ${isVisible ? '감춤' : '표시'}`;

  // 비밀번호 필드의 가시성을 토글하는 함수
  // - isVisible 상태에 따라 password 타입에서 text 타입으로 변경
  const handleToggle = () => {
    if (isVisible) {
      setIsVisible(false);
      setType('password');

    } else {
      setIsVisible(true);
      setType('text');
    }
  };


  /* 비밀번호 가시성 토글 버튼 렌더링 -------------------------------------------------------------- */

  let renderVisibleButton = null;

  // 비밀번호 필드에만 있어야 함
  if (type === 'password' || (type === 'text' && isVisible)) {
    renderVisibleButton = (
      <button
        type="button"
        className={S.visibleButton}
        aria-label={visibleLabel}
        title={visibleLabel}
        onClick={handleToggle}
      >
        {/* isVisible에 따라 다른 아이콘 표시 */}
        {isVisible ? <VscEyeClosed /> : <VscEye />}
      </button>
    );
  }

  /* 컴포넌트 렌더링 ------------------------------------------------------- */

  return (
    <div className={clsx(S.component, isInputed && S.inputed)}>
      <label htmlFor={id} className={clsx({ 'sr-only': isHiddenLabel })}>
        {label}
      </label>

      <input
        type={type}
        id={id}
        defaultValue={inputValue}
        onInput={handleInput}
        {...restProps}
      />
      {renderVisibleButton}
    </div>
  );
}

export default AppInput;
