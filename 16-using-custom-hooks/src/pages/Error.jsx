import { useRouteError } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';

function ErrorPage() {
  const { status, statusText, error } = useRouteError();

  return (
    <>
      <Header />
      <main role="alert">
        <h1>
          {status} {statusText} 오류 발생
        </h1>
        <p>{error.message}</p>
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;
