import { StatusMessagesType } from '../@types/types.d';
import { randomNumber } from '../utils';

function DataBinding({ statusMessages }) {
  // [미션] 랜덤 로직을 작성해서 임의의 상태 메시지가 표시되도록 설정합니다.
  // JavaScript 프로그래밍
  // Math.random() / Math.floor() / Math.round()

  // 리액트에서 이렇게 하는 거 아닙니다!!!
  // 전달된 props의 각 속성 타입 검사
  // if (!Array.isArray(statusMessages)) {
  //   console.warn('statusMessages가 배열이 아니야! 다시 확인해~');
  //   return null;
  // }

  const statusMessage =
    statusMessages[randomNumber(0, statusMessages?.length - 1)];

  return (
    <>
      <dt>데이터 바인딩(data binding)</dt>
      <dd>
        <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
        <span className="status">
          {/* statusMessage 값을 화면에 표시합니다. (랜덤 표시도 도전!) */}
          {statusMessage}
        </span>
      </dd>
    </>
  );
}

export default DataBinding;

// 컴포넌트 속성 타입 검사
// Prop Types Validation

// 리액트가 제공하는 방법
// Component.propTypes

DataBinding.propTypes = {
  // 필수 속성 설정 시, isRequired 추가
  // statusMessages: array.isRequired,

  // 특정 타입만 허용하는 배열 검사
  // Typed Array
  // [TS] string[] -> [props-types] arrayOf(string)
  // [TS] number[] -> [props-types] arrayOf(number)
  // [TS] boolean[] -> [props-types] arrayOf(bool)
  // statusMessages: arrayOf(string).isRequired, // string[] or Array<string>
  statusMessages: StatusMessagesType.isRequired,
};
