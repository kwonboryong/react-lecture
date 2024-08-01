import { randomNumber } from '../utils';

// 사용자 정의 타입 알리아스(별칭)
// 1. type (primitives, interface + type)
// export type StatusMessage =
//   | '⌛️ 대기'
//   | '⏳ 로딩 중...'
//   | '✅ 로딩 성공!'
//   | '❌ 로딩 실패.';

// 2. interface (object)
interface Props {
  statusMessages: StatusMessage[];
}

function DataBinding({ statusMessages }: Props): JSX.Element {
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
