import { AppDivider, AppLink } from '@/components';
import Counter from '@/miniApp/Counter';
import TaskManager from '@/miniApp/TaskManager/TaskManager';

function HomePage() {
  return (
    <section id="page">
      <div className="learn">
        <h1>앱 글로벌 상태 관리 with Zustand</h1>

        <p>
          <AppLink
            href="https://zustand.docs.pmnd.rs/getting-started/introduction"
            isExternal
          >
            Zustand
          </AppLink>{' '}
          라이브러리를 사용해 앱 또는 컴포넌트의 상태를 효과적으로 관리하는
          방법을 학습합니다.
        </p>

        {/* ------------------------------------- */}
        <AppDivider />

        <h2 lang="en" className="uppercase">
          Counter
        </h2>

        <p>간단한 카운터 앱의 상태를 Zustand를 사용해 관리합니다.</p>

        <Counter />

        {/* ------------------------------------- */}
        <AppDivider /> 

        <h2 lang="en" className="uppercase">
          Task Manager
        </h2>

        <p>
          태스크 매니저 앱의 상태를 컨텍스트 + 리듀서 대신, Zustand를 사용하도록
          변경해봅니다.
        </p>

        <TaskManager />
      </div>
    </section>
  );
}

export default HomePage;
