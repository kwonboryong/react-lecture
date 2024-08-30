import pb from './pb';

// 회원 가입 기능
// - 사용자를 등록하는 비동기 함수
// - 매개변수(username, email, password): 가입할 때 필요한 사용자 정보
export async function userSignUp(username, email, password) {
  // 새로 생성할 사용자 객체
  const newUser = {
    email,
    username,
    password,
    passwordConfirm: password, // 비밀번호 확인용 필드
    emailVisibility: true, // 사용자의 이메일을 공개하도록 설정
  };

  // users 컬렉션에 새로운 사용자를 생성
  // - 반환된 값을 authData에 저장
  const authData = await pb.collection('users').create(newUser);

  // 인증된 사용자 정보 컨텍스트에 저장
  // 값을 반환
  return authData;
}

// ----------------------------------------------------

// 로그인 기능
// - 매개변수 (email, password): 로그인에 필요한 사용자 정보
export async function userSignIn(email, password) {
  // users 컬렉션에서 주어진 이메일과 비밀번호를 사용해 사용자 인증을 시도
  const authData = await pb
    .collection('users')
    .authWithPassword(email, password);

  // 인증된 사용자 정보를 반환
  // - 사용자 데이터와 인증 토큰 등이 포함
  return authData;
}

// ----------------------------------------------------

// 로그아웃 기능
export function signOut() {}
