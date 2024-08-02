import { string, number } from 'prop-types';

ExtandableText.propTypes = {
  text: string.isRequired,
  limit: number,
};

function ExtandableText({ text: originalText, limit = 100 }) {
  let displayText = '';

  const isALotText = originalText.length > limit;

  if (isALotText) {
    displayText = originalText.slice(0, limit) + '...';
  }

  const handleToggle = () => {
    const component = document.querySelector('.ExtandableText');
    const paragraph = component.querySelector('p');
    const button = component.querySelector('button');

    if (paragraph.textContent.length - 3 <= limit) {
      paragraph.textContent = originalText;
      button.textContent = '접기';
    } else {
      paragraph.textContent = displayText;
      button.textContent = '펼치기';
    }
  };

  return (
    <div className="ExtandableText">
      <p>{isALotText ? displayText : originalText}</p>
      {isALotText && (
        <button type="button" onClick={handleToggle}>
          펼치기
        </button>
      )}
    </div>
  );
}

export default ExtandableText;
