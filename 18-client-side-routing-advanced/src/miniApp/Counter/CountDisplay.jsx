import { memo } from 'react';
import { useCountStore } from './@store';
import S from './style.module.css';

function CountOutput() {
  const count = useCountStore((s) => s.count);

  return <output className={S.output}>{count}</output>;
}

export default memo(CountOutput);
