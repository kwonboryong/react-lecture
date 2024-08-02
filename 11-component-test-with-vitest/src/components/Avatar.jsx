// --------------------------------------------------------------------------
// ✅ 테스트 시나리오
// --------------------------------------------------------------------------
// - 컴포넌트 렌더링 관점에서 어떤 테스트를 수행할 지 고민해 작성하세요.
// --------------------------------------------------------------------------

import { number, string } from 'prop-types';
import { StatusMessagesType } from '@/@types/entries.d';

Avatar.propTypes = {
  name: string.isRequired,
  photo: string.isRequired,
  status: StatusMessagesType,
  size: number,
};

function Avatar({ name, photo, status = 'offline', size = 64 }) {
  let iconPath = '';
  let statusMessage = '';

  switch (status) {
    default:
    case 'offline':
      iconPath = '/icons/status-offline.svg';
      statusMessage = '오프라인';
      break;
    case 'online':
      iconPath = '/icons/status-online.svg';
      statusMessage = '온라인';
      break;
    case 'dont-disturb':
      iconPath = '/icons/status-dont-disturb.svg';
      statusMessage = '방해금지';
      break;
    case 'away':
      iconPath = '/icons/status-away.svg';
      statusMessage = '자리비움';
      break;
  }

  const label = `${name} (${statusMessage})`;

  return (
    <figure className="Avatar" aria-label={label} title={label}>
      <img src={`/faces/${photo}`} alt={name} width={size} height={size} />
      <figcaption>
        <img src={iconPath} alt="" />
      </figcaption>
    </figure>
  );
}

export default Avatar;
