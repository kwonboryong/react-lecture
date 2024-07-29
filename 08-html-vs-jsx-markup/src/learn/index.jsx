import JSX_Markup from './jsx-markup';
import ScrollUpAndDown from './scroll-up-and-down';

function Learn() {
  return (
    <div className="Learn">
      <Headline />
      <hr />
      <JSX_Markup />
      <ScrollUpAndDown />
    </div>
  );
}

export default Learn;

function Headline() {
  return (
    <h1>
      <abbr title="Hyper Text Markup Language">HTML</abbr> vs.{' '}
      <abbr title="JavaScript eXtension for ECMAScript">JSX</abbr> 마크업
    </h1>
  );
}
