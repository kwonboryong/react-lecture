import KanBanBoard from '@/miniApp/KanbanBoard';

export function Component() {
  return (
    <section id="page">
      <div className="learn">
        <h1>칸반 보드(Kanban Board)</h1>
        
        <p>
          칸반보드 앱은 Zustand로 상태를 관리합니다. 상태 관리 방법을
          살펴봅시다.
        </p>
      </div>
      <KanBanBoard />
    </section>
  );
}
