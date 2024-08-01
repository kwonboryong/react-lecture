type StatusMessage =
  | '⌛️ 대기'
  | '⏳ 로딩 중...'
  | '✅ 로딩 성공!'
  | '❌ 로딩 실패.';

type ImageType = 'react' | 'vite' | 'next.js' | 'kakao talk';

interface ReactLibrary {
  name: string;
  author: string;
  writtenIn: string;
  type: string;
  license: string;
}

interface StatusMessageObject {
  id: string;
  message: string;
}
