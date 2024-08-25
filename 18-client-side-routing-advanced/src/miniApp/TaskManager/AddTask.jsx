import { useId } from 'react';
import { PiPlus } from 'react-icons/pi';
import { useTask } from './@context';

function AddTask() {
  // 고유한 ID 생성
  const id = useId();

  // useTask 훅을 통해 가져온 작업 추가 메서드(@reducer.js)
  const {
    methods: { addTask },
  } = useTask();

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    // 기본 제출 동작(페이지 새로고침 등)을 방지
    e.preventDefault();

    // 폼 데이터를 추출
    const formData = new FormData(e.currentTarget);

    // 입력된 값을 가져옴
    let nextStep = formData.get('nextStep');
    // 입력값에서 불필요한 공백 제거
    nextStep = nextStep.trim();

    // ID를 통해 input 요소 선택
    const inputElement = document.getElementById(id);

    // 입력값이 비어있지 않은 경우
    if (nextStep.length > 0) {
      addTask(nextStep);
      inputElement.value = '';
      // 작업 추가 후 입력 필드 비움

    // 입력값이 비어있다면
    } else {
      alert('다음 단계를 입력하세요.');
      inputElement.select();
      // 입력 필드 선택(사용자가 입력을 쉽게 수정할 수 있도록)
    }
  };

  return (
    <form className="flex gap-1 items-center" onSubmit={handleSubmit}>
      <label htmlFor={id} className="sr-only">
        add task
      </label>

      <input
        id={id}
        type="text"
        name="nextStep"
        placeholder="Next step"
        className="flex-1 border border-solid border-accent rounded py-0.5 px-1 placeholder:text-slate-400 placeholder:font-extralight placeholder:text-sm"
      />

      <button
        type="submit"
        aria-label="add"
        className="opacity-90 hover:opacity-100 grid place-content-center w-8 h-8 bg-accent text-white rounded transition duration-200"
      >
        <PiPlus />
      </button>
    </form>
  );
}

export default AddTask;
