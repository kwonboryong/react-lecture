// --------------------------------------------------------------------------
// ✅ 틱택토 게임 만들기 (Status 컴포넌트)
// --------------------------------------------------------------------------
// - 다음 플레이어 표시 컴포넌트
// --------------------------------------------------------------------------

import { OneOfPlayerType } from '@/tic-tac-toe/types/type.d';
import S from './Status.module.css';
import { bool } from 'prop-types';

// 타입검사
Status.propTypes = {
  winner: OneOfPlayerType,
  nextPlayer: OneOfPlayerType.isRequired,
  isDraw: bool,
};


function Status({ winner, nextPlayer, isDraw = false }) {

  // 기본 메시지 - 다음 플레이어 표시
  let statusMessage = `다음 플레이어 : ${nextPlayer}`;
  
  // 승자가 있으면 - 위너 표시
  if (winner) {
    statusMessage = `위너!! ${winner}`;
  }

  // 비겼으면 - 비긴 메시지 표시
  if (isDraw) {
    statusMessage = '음... 비겼네. 😩 한 판 더?!';
  }

  return <h2 className={S.component}>{statusMessage}</h2>;
}

export default Status;
