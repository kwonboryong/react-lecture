import Child from './Child';
import S from './style.module.css';

function Parent() {
  return (
    <div className={S.box}>
      <strong className={S.label}>Parent</strong>
      <Child />
    </div>
  );
}

export default Parent;
