import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { AppSpinner } from '@/components';

const KanBanBoard = lazy(() => import('@/miniApp/KanbanBoard'));

export function Component() {
  return (
    <>
      <Helmet>
        <title>칸반 보드(Kanban Board)</title>
        <meta
          name="description"
          content="칸반보드 앱은 Zustand로 상태를 관리합니다. 상태 관리 방법을 살펴봅시다."
        />
        <meta property="og:title" content="이듬(E.UID) 블렌디드 러닝" />
        <meta property="twitter:title" content="이듬(E.UID) 블렌디드 러닝" />
        <meta property="og:type" content="site" />
        <meta property="og:url" content="https://yamoo9.github.io/EUID" />
        <meta
          property="og:description"
          content="Front-End 개발자를 꿈꾸는 이들을 위한 블렌디드 러닝으로 개발에 필요한 모든 것!"
        />
        <meta
          property="og:image"
          content="https://yamoo9.github.io/EUID/og-image.jpg"
        />
        <meta property="og:site:author" content="야무(yamoo9)" />
      </Helmet>
      <section id="page">
        <div className="learn">
          <h1 className="mb-4">칸반 보드(Kanban Board)</h1>
          <p>
            칸반보드 앱은 Zustand로 상태를 관리합니다. 상태 관리 방법을
            살펴봅시다.
          </p>
        </div>
        <Suspense fallback={<AppSpinner />}>
          <KanBanBoard />
        </Suspense>
      </section>
    </>
  );
}
