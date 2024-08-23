import pb from '@/api/pb';
import { useLoaderData } from 'react-router-dom';

export function Component() {
  const note = useLoaderData();

  return (
    <section id="page">
      <div className="learn">
        <h1>노트 상세 내용</h1>
        <p>선택된 노트의 자세한 내용을 화면에 표시합니다.</p>
        <figure>
          <figcaption>
            <strong>{note.title}</strong>
            <p>{note.description}</p>
          </figcaption>
          <img className="my-5" src={note.cover} alt="" />
        </figure>
      </div>
    </section>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  const noteId = params.noteId;
  const note = await pb.collection('notes').getOne(noteId);

  // await delay(2000);

  note.cover = pb.files.getUrl(note, note.cover);

  return note;
};
