import { typeOf } from './typeOf';

// 타입 검사 함수 생성 (JavaScript 클로저 사용)
const generateTypeValidation =
  (allowedType) => (props, propName, componentName) => {
    // 컴포넌트 속성의 값은?
    const propValue = props[propName];

    // 컴포넌트 속성 값의 타입은? (문자 값을 원해~)
    const propType = typeOf(propValue);

    // 허용할 데이터 타입 이름은?
    // const allowedType = type;

    // 컴포넌트 속성 검사 타입 수행
    if (propType !== allowedType) {
      // 오류가 있네??
      // 오류 메시지를 출력하자!
      // 오류 메시지
      // `[ componentName ] 컴포넌트 [ propName ] 속성 타입은 "[ allowedType ]" 타입이 요구되나, 실제 전달된 타입은 "[ propType ]"입니다.`
      // 오류 표시 (리액트 렌더링을 멈추고 화면에 아무 것도 렌더링 하지 않아요.)
      // 개발자가 확인
      throw new Error(
        `${componentName} 컴포넌트 ${propName} 속성 타입은 "${allowedType}" 타입이 요구되나, 실제 전달된 타입은 "${propType}"입니다.`
      );
    }

    // 아무런 오류가 없으니 패스~
  };

// 타입 검사 함수 생성 (재사용)
export const string = generateTypeValidation('string');
export const number = generateTypeValidation('number');
export const bool = generateTypeValidation('boolean');
export const symbol = generateTypeValidation('symbol');
export const func = generateTypeValidation('function');
export const array = generateTypeValidation('array');
export const object = generateTypeValidation('object');

/**@type{(types: any[]) => void | Error} */
export function oneOf(types /* type[] */) {
  // JavaScript Closure
  return function innerFunction(props, propName, componentName) {
    // 컴포넌트 속성 값
    const propValue = props[propName];

    // 컴포넌트 속성 값의 타입
    const propType = typeOf(propValue);

    // 컴포넌트 속성이 허용하는 타입
    const allowedType = 'string';

    // 정규식을 사용해서 특정 문자 값이 매칭(일치)되는 지 검토
    const typeMatchString = types.reduce((result, type, index, array) => {
      const divider = index < array.length - 1 ? '|' : '';
      return result + type + divider;
    }, '');

    const typeMatch = new RegExp(`^(${typeMatchString})$`, 'i');

    // 타입 검사 수행
    if (propType !== allowedType || !typeMatch.test(propValue)) {
      // 타입이 다르면? 오류 처리
      throw new Error(
        `${componentName} 컴포넌트 ${propName} 속성에 설정 가능한 값은 "[${types.toString()}]" 중 하나가 요구되나, 실제 전달된 속성 값은 "${propValue}"입니다.`
      );
    }

    // 타입이 동일하고 속성 값이 매칭(일치)되면? 통과
  };
}

// export function arrayOf(type) {}
// export function shape(type) {}
// export function exact(type) {}

const PropTypes = Object.freeze({
  string,
  number,
  bool,
  symbol,
  func,
  array,
  object,
  oneOf,
});

export default PropTypes;
