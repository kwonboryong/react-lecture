// 문자 타입 관리
export const imageType = 'kakao talk'; // 'react' | 'vite' | 'next.js' | 'kakao talk'

// 이미지 타입 배열 관리
export const IMAGE_TYPES = ['react', 'vite', 'next.js', 'kakao talk'];

export const isShowReactImage = false;

export const statusMessages = [
  '⌛️ 대기',
  '⏳ 로딩 중...',
  '✅ 로딩 성공!',
  '❌ 로딩 실패.',
];

export const statusMessagesWithID = [
  { id: 'message-xyz', message: '⌛️ 대기' },
  { id: 'message-air', message: '⏳ 로딩 중...' },
  { id: 'message-ckd', message: '✅ 로딩 성공!' },
  { id: 'message-eiu', message: '❌ 로딩 실패.' },
];

export const reactLibrary = {
  name: 'React',
  author: '조던 워케(Jordan Walke)',
  writtenIn: 'JavaScript',
  type: 'JavaScript 라이브러리',
  license: 'MIT',
};
