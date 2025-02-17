// --------------------------------------------------------------------------
// ✅ 틱택토 게임 만들기 (Squares 컴포넌트)
// --------------------------------------------------------------------------
// - [x] squares 배열 데이터를 게임의 상수로 설정합니다.
// - [x] squares 배열 데이터의 초기 상태 값은 9개의 `null`로 구성합니다.
// - [x] squares 배열 데이터 모듈을 불러온 후, 순환해 Sqaure 컴포넌트를 리스트 렌더링 합니다.
// - [x] 게임 진행을 처리하는 함수 로직을 작성하고, 리액트에게 다음 상태 변경에 대해 말해주세요.
// - [x] 게임이 이겼는 지, 졌는 지 확인하는 승리 조건을 게임의 상수로 선언합니다.
// - [x] Squares 컴포넌트 속성 타입 검사 (with 타입 모듈 분리)
// --------------------------------------------------------------------------
import { func } from 'prop-types';
import { WINNERS_COLOR } from '@/tic-tac-toe/constants';
import { OneOfPlayerListType, WinnerInfoType } from '@/tic-tac-toe/types/type.d';
import Square from '../Square/Square';
import S from './Squares.module.css';

// 타입 검사
Squares.propTypes = {
  squares: OneOfPlayerListType.isRequired,
  winnerInfo: WinnerInfoType,
  onPlay: func,
};


// 상태를 가지지 않는(Stateless) 컴포넌트
function Squares({ squares, winnerInfo, onPlay }) {
  
  // 리스트 렌더링
  return (
    <div className={S.component}>

      {squares.map((square, index) => {

        // 배경 색칠을 위한 스타일 객체
        const winnerStyles = {
          backgroundColor: null,
        };


        // 게임 승자가 있는 경우
        // - winnerInfo는 null 또는 { winner, condition } 둘 중 하나!
        if (winnerInfo) {
          // 게임 승자의 조건 저장하기
          const [x, y, z] = winnerInfo.condition;

          // 그럼 승리한 스퀘어(말판) 색칠하기
          if (index === x || index === y || index === z) {
            winnerStyles.backgroundColor = WINNERS_COLOR;
          }
        }

        return (
          <Square key={index} style={winnerStyles} onPlay={onPlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
