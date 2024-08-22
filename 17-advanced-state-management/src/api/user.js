import pb from './pb';

// 회원 가입 기능
export async function userSignUp(username, email, password) {
  const newUser = {
    email,
    username,
    password,
    passwordConfirm: password,
    emailVisibility: true,
  };

  const authData = await pb.collection('users').create(newUser);

  // 인증된 사용자 정보 컨텍스트에 저장
  // 값을 반환
  return authData;
}

// 로그인 기능
export async function userSignIn(email, password) {
  const authData = await pb
    .collection('users')
    .authWithPassword(email, password);

  return authData;
}

// 로그아웃 기능
export function signOut() {}
