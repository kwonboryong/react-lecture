/* eslint-disable react-refresh/only-export-components */
import pb from '@/api/pb';
import { IoArrowBack } from 'react-icons/io5';
import { useLoaderData, useNavigate } from 'react-router-dom';
import S from '@/styles/components/NoteList.module.css';

export function Component() {
  const note = useLoaderData();
  const navigate = useNavigate();

  const handleGoBack = () => navigate('..');

  return (
    <section id="page">
      <div className="learn">
        <figure className={S.NoteDetail}>
          <img src={note.cover} alt="" />
          <h1>{note.title}</h1>
          <p>{note.description}</p>
        </figure>
        <button type="button" className={S.back} onClick={handleGoBack}>
          <IoArrowBack />
        </button>
      </div>
    </section>
  );
}

export async function loader({ params }) {
  const { noteId } = params;
  const note = await pb.collection('notes').getOne(noteId);

  note.cover = pb.files.getUrl(note, note.cover);

  return note;
}
