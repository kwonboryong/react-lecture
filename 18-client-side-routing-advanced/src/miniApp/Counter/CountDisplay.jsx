import { memo } from 'react';
import { number } from 'prop-types';
import S from './style.module.css';

CountOutput.propTypes = {
  count: number.isRequired,
};

function CountOutput({ count }) {
  return <output className={S.output}>{count}</output>;
}

export default memo(CountOutput);
