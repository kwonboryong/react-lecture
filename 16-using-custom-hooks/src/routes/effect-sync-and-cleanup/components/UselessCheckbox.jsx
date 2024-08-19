import { useEffect, useId, useState } from 'react';
import S from './UselessCheckbox.module.css';
import useDocumentTitle from '@/hooks/useDocumentTitle';

function UselessCheckbox() {
  const documentTitle = '쓸모없는 체크박스 ← 이펙트 동기화 & 정리';
  useDocumentTitle(documentTitle);

  const id = useId();

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    let clearId = 0;

    if (checked === false) {
      clearId = setTimeout(() => {
        setChecked(true);
      }, 1000);
    }

    return () => {
      clearTimeout(clearId);
    };
  }, [checked]);

  const handleChecked = () => setChecked((c) => !c);

  return (
    <div className={S.component}>
      <label htmlFor={id} className="sr-only">
        쓸모없는 체크박스
      </label>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChecked}
      />
    </div>
  );
}

export default UselessCheckbox;
