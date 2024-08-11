// --------------------------------------------------------------------------
// ✅ 틱택토 게임 만들기 (Board 컴포넌트)
// --------------------------------------------------------------------------
// - Status, Squares 중간 컴포넌트
// --------------------------------------------------------------------------

import { bool, func } from 'prop-types';
import { OneOfPlayerListType, OneOfPlayerType, WinnerInfoType } from '@/tic-tac-toe/types/type.d';
import Squares from '../Squares/Squares';
import Status from '../Status/Status';
import S from './Board.module.css';

// 타입 검사
Board.propTypes = {
  winnerInfo: WinnerInfoType,
  nextPlayer: OneOfPlayerType.isRequired,
  isDraw: bool.isRequired,
  squares: OneOfPlayerListType,
  onPlay: func
}


// Stateless Component(마크업, 스타일링용 컴포넌트)
function Board({ winnerInfo, nextPlayer, isDraw, squares, onPlay }) {
  
  return (
    <div className={S.component}>
      
      <Status
        winner={winnerInfo?.winner}
        nextPlayer={nextPlayer}
        isDraw={isDraw}
      />

      <Squares
        squares={squares}
        winnerInfo={winnerInfo}
        onPlay={onPlay}
      />
    </div>
  );
}

export default Board;
