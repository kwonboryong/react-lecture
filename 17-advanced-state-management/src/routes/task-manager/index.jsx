import guideImage from './assets/task-manager-guide.png';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import TaskManager from './components/TaskManager';
import S from './style.module.css';

function TaskManagerUsingReducer() {
  useDocumentTitle('테스크 매니저 (리듀서 활용)');

  return (
    <main id="page" className={S.component}>
      <h1 className="headline">테스크 매니저 (리듀서 활용)</h1>

      <div className="description">
        <figure>
          <figcaption>
            <p>테스크 매니저 앱을 구현하는 실습을 진행합니다.</p>
            <p style={{ marginBlockStart: 12 }}>요구 사항</p>
            <ul style={{ marginBlockStart: 8 }}>
              <li>추가 기능</li>
              <li>삭제 기능</li>
              <li>수행 여부 체크 기능</li>
              <li>핀(pin) 체크 기능</li>
            </ul>
          </figcaption>
          <img src={guideImage} alt="" height={130} />
        </figure>

        <p hidden style={{ marginBlockStart: 28 }}>
          구현한 테스크 매니저 앱을{' '}
          <a
            href="https://ko.react.dev/reference/react/useReducer"
            rel="noreferrer noopener"
            target="_blank"
          >
            useReducer()
          </a>{' '}
          훅을 사용해 재구성합니다.
        </p>
      </div>

      <div className="divider" />

      <TaskManager />
    </main>
  );
}

export default TaskManagerUsingReducer;
