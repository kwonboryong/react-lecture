// --------------------------------------------------------------------------
// ✅ 틱택토 게임 만들기 (Game 컴포넌트)
// --------------------------------------------------------------------------
// - [x] Game 컴포넌트 내부에서 게임 플레이어 말을 게임의 상수로 설정합니다.
// - [x] 게임의 상수인 플레이어를 Game 컴포넌트에서 모듈로 불러옵니다.
// - [x] 구현할 게임의 마크업을 분석해서 하위 컴포넌트 트리를 구성합니다. (컴포넌트 추출)
// - [x] Board 컴포넌트의 상태를 Game 컴포넌트로 끌어올립니다. (이유: History 컴포넌트와 상태 공유)
// - [x] Game 컴포넌트의 상태를 어떻게 공유해야 할 지 고민해야 합니다.
// - [x] 핵심 포인트는 게임의 말판 상태가 일일이 기록되어야 합니다. (즉, 중첩된 배열로 상태 관리 필요)
// - [x] Game 컴포넌트의 상태를 Board와 History에 공유합니다.
// --------------------------------------------------------------------------

import { useState } from 'react';
import {
  checkWinner,
  INITIAL_SQUARES,
  PLAYER,
  PLAYER_COUNT,
} from './constants';
import History from './components/History/History';
import Board from './components/Board/Board';
import Reset from './components/Reset/Reset';
import S from './Game.module.css';
import './styles/main.css';

function Game() {
  // [게임 상태] --------------------------------------------------------------

  // 게임판(9개의 말판) 상태를 나타내는 리액트의 상태 선언
  const [gameHistory, setGameHistory] = useState([INITIAL_SQUARES]);
  
  // 게임 진행 순서
  const [gameIndex, setGameIndex] = useState(0);


  // [게임 파생된 상태] ----------------------------------------------------------

  // 게임 히스토리에서 현재 게임판은?
  const currentSquares = gameHistory[gameIndex];


  // 반환 값에 따라 게임을 진행할 지, 아닐 지 결정
  // - 현재 게임판을 게임이 끝났는 지, 아직 게임 중인지 확인해 결과를 반환하는 함수에 넣기
  const winnerInfo = checkWinner(currentSquares);


  // 첫번째 플레이어 ([0] PLAYER.ONE ↔ [1] PLAYER.TWO)
  // - 말을 놓은 개수(null이 아닌 경우, boolean)와 플레이어 수를 나눴을 때 나머지가 0이면 첫번째 플레이어의 턴
  const isPlayerOneTurn =
    currentSquares.filter(Boolean).length % PLAYER_COUNT === 0; // true

  // 첫번째 플레이어의 턴일 때 말 지정
  const nextPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;


  // 게임이 비겼을 때
  // - 승자가 없고(!winnerInfo) && 모든 게임판의 말이 채워졌다(currentSquares.every(Boolean))
  const isDraw = !winnerInfo && currentSquares.every(Boolean);


  // [게임 상태 업데이트 기능] ----------------------------------------------------

  // 게임 진행 함수
  // - 특정 위치에 사용자가 말을 놓을 때 호출
  const handlePlayGame = (index) => () => {

    // 다음 게임의 인덱스 -----------------------------------------------
    const nextGameIndex = gameIndex + 1;

    // 다음 게임 인덱스 상태 업데이트
    setGameIndex(nextGameIndex);

    
    // 이미 게임이 종료된 경우 -------------------------------------------------------
    if (winnerInfo) {
      // GAME OVER 메시지를 사용자에게 출력
      alert('GAME OVER');

      // 함수 실행되지 않도록 함수 종료(return)
      return;
    }


    // 게임 히스토리에 기록 추가 -------------------------------------------------------

    // 다음 상태의 게임판을 정의
    // - 현재 게임판 정보 저장 ['🍟', ..., 🤡', null]
    // - 플레이어의 이동을 기록, 게임의 다음 상태를 정의
    const nextSquares = currentSquares.map((square, idx) => {

      return idx === index ? nextPlayer : square;
      // 사용자가 클릭한 위치(index)에 해당하는 칸을 업데이트
      // 해당 위치에 현재 플레이어의 기호를 설정
    });


    // 게임의 각 턴마다의 상태를 저장
    // - 게임을 진행한 회차들을 잘라서 배열로 저장 [ [null, ..., null], ['one', ..., null] ] 
    // - 게임의 히스토리(기억) 또한 되돌려야 함
    // - 선택된 게임의 인덱스 정보를 사용해 게임 히스토리를 잘라야 한다.
    const nextGameHistory = [
      // 배열 결합
      ...gameHistory.slice(0, nextGameIndex),
      nextSquares, // 현재 게임판 정보(사용자가 마지막으로 클릭한 위치의 상태가 업데이트된 게임판 상태를 포함)
    ];

    setGameHistory(nextGameHistory);
  };


  // 시간 여행 기능(함수) ----------------------------------------------------------
  const handleTimeTravel = (index) => {

    // 되돌리고 싶은 시간의 기억으로 게임 진행을 (인덱스를) 업데이트 요청
    // - 원하는 인덱스의 게임으로 업데이트
    setGameIndex(index);
  };


  const handleReset = () => {
    setGameHistory([INITIAL_SQUARES])
    setGameIndex(0)
  }


  return (
    <div className={S.component}>

      <Board
        squares={currentSquares}
        winnerInfo={winnerInfo}
        nextPlayer={nextPlayer}
        onPlay={handlePlayGame}
        isDraw={isDraw}
      />

      <History
        onTimeTravel={handleTimeTravel}
        gameHistory={gameHistory}
        gameIndex={gameIndex}
      />

      <Reset onReset={handleReset}></Reset>
    </div>
  );
}

export default Game;
