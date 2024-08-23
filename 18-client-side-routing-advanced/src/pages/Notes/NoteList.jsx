import pb from '@/api/pb';
import { Link, useLoaderData } from 'react-router-dom';

export function Component() {
  const data = useLoaderData();

  return (
    <section id="page">
      <div className="learn">
        <h1>노트 리스트</h1>
        <p>노트 목록을 화면에 렌더링 합니다.</p>

        <ul>
          {data.items.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/notes/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const response = await pb.collection('notes').getList(1, 10);
  return response;
};
