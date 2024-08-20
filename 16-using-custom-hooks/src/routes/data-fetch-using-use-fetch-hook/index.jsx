import useFetch from '@/hooks/useFetch';

function DataFetchUsingUseFetchHook() {
  const {
    status: userStatus,
    error: userError,
    data: userData,
  } = useFetch('https://koreanjson.com/users');

  const {
    status: postStatus,
    error: postError,
    data: postData,
  } = useFetch('https://koreanjson.com/posts');

  return (
    <main id="page">
      <h1 className="headline">useFetch() 훅을 사용해 데이터 패칭</h1>
      <div className="description">
        <p>useFetch() 커스텀 훅을 사용해 데이터 패칭</p>
      </div>

      <div>
        {userStatus === 'loading' && <div>사용자 목록 로딩 중...</div>}
        {userStatus === 'error' && <div role="alert">{userError.message}</div>}
        {userStatus === 'success' && (
          <ul>
            {userData.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {postStatus === 'loading' && <div>포스트 리스트 로딩 중...</div>}
        {postStatus === 'error' && <div role="alert">{postError.message}</div>}
        {postStatus === 'success' && (
          <ul>
            {postData.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export default DataFetchUsingUseFetchHook;
