// --------------------------------------------------------------------------
// ✅ 테스트 시나리오
// --------------------------------------------------------------------------
// - [ ] imagesInfo 속성(prop)에 빈 배열이 전달된 경우, 아무 것도 표시하지 않습니다.
//   - 문서의 컨테이너(container)가 비어 있는 지 확인합니다.
// - [ ] imagesInfo 속성(prop)에 전달된 제품 이미지 목록 정보를 표시합니다.
//   - 표시된 이미지의 총 갯수가 제품 이미지 목록 갯수와 일치하는 지 확인합니다.
//   - 제품 이미지 목록 정보를 순환해 각 이미지가 문서에 표시되는 지 확인합니다.
//   - 제품 이미지 목록 정보를 순환해 각 이미지의 속성 값이 정확한 지 확인합니다.
// --------------------------------------------------------------------------

import { arrayOf } from 'prop-types';
import { ProductImageType } from '@/@types/entries.d';

ProductImageGalleryPage.propTypes = {
  imagesInfo: arrayOf(ProductImageType).isRequired,
};

function ProductImageGalleryPage({ imagesInfo }) {
  if (imagesInfo.length === 0) return null;

  return (
    <ul>
      {imagesInfo.map(({ id, label, url }) => (
        <li key={id}>
          <img src={url} alt={label} />
        </li>
      ))}
    </ul>
  );
}

export default ProductImageGalleryPage;
