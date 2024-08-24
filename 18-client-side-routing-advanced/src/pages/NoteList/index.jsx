/* eslint-disable react-refresh/only-export-components */
import pb from '@/api/pb';
import { NavLink, useLoaderData } from 'react-router-dom';
import S from '@/styles/components/NoteList.module.css';

export function Component() {
  const data = useLoaderData();

  return (
    <section id="page">
      <div className="learn">
        <h1>노트 리스트</h1>
        <p>노트 아이템 링크를 클릭하면 세부 내용을 확인할 수 있습니다.</p>
      </div>

      <ul className={S.NoteList}>
        {data.items.map((note) => {
          return (
            <li key={note.id}>
              <NavLink to={`${note.id}/${note.title}`}>
                <img src={note.cover} alt="" />
                <h2>{note.title}</h2>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export async function loader() {
  const response = await pb.collection('notes').getList();

  const items = response.items.map((item) => ({
    ...item,
    cover: pb.files.getUrl(item, item.cover),
  }));

  response.items = items;

  return response;
}
