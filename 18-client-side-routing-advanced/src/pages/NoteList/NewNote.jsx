import pb from '@/api/pb';
import { redirect } from 'react-router-dom';
import NoteForm from './NoteForm';

export function Component() {
  return (
    <section id="page">
      <div className="learn">
        <h1>노트 작성</h1>
        <p>오늘은 어떤 일을 기록하고 싶은가요?</p>
        <NoteForm method="post" />
      </div>
    </section>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get('title');
  const description = formData.get('description');
  const cover = formData.get('cover');

  const data = {
    title,
    description,
    cover,
  };

  await pb.collection('notes').create(data);

  return redirect('/notes');
};
