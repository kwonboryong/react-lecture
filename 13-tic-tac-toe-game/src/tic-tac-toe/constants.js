
// 게임에서 사용되는 말(플레이어)
export const PLAYER = { ONE: '🍟', TWO: '🤡' };

// 게임 플레이어 집합
export const PLAYER_LIST = Object.values(PLAYER);

// 게임 플레이어의 수
export const PLAYER_COUNT = Object.keys(PLAYER).length;

// 승리자의 색상
export const WINNERS_COLOR = '#fff047';


// 게임판: 초기 상태 값
// [ 0, 1, 2 ]
// [ 3, 4, 5 ]
// [ 6, 7, 8 ]
// export const INITIAL_SQUARES = [null, null, null, null, null, null, null, null, null];
export const INITIAL_SQUARES = Array(9).fill(null);


// 게임의 승리 조건
const WINNER_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


// 게임이 끝났는 지, 아직 게임 중인지 확인해 결과를 반환하는 함수
// 게임판 정보와 승리 조건 비교해 결과 반환
export const checkWinner = (squares) => {
  
  // 위너 정보
  let winnerInfo = null;
  
  // for of문을 사용해 배열을 순환
  // - 게임 승리 조건 배열을 각각 x, y, x로 쪼갬
  for (const [x, y, z] of WINNER_CONDITIONS) {

    const winner = squares[x];
    
    // 현재 게임판의 말이 게임 승리 조건의 x, y, z와 같은지 확인하여 승리 판결
    if (winner && winner === squares[y] && winner === squares[z]) {
      console.log('GAME OVER');
      
      winnerInfo = {
        winner,
        condition: [x, y, z] // 위너가 승리한 말의 위치
      };

      break;
    }
  }

  return winnerInfo;
};
