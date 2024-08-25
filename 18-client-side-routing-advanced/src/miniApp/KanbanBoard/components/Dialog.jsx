import { any, string, shape, bool, func } from 'prop-types';
import { useEffect } from 'react';

// 작업 추가 다이얼로그 컴포넌트
function Dialog({
  forwardRef,
  label,
  color,
  state,
  open = false,
  onInput,
  onSave,
  onClose,
}) {
  useEffect(() => {
    const dialog = forwardRef.current;
    let focusableElements = [];

    const handleKeyTrap = (e) => {
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement =
        focusableElements[focusableElements.length - 1];
      const pressedShiftKey = e.shiftKey;
      const pressedTabKey = e.key === 'Tab';

      if (
        Object.is(e.target, firstFocusableElement) &&
        pressedShiftKey &&
        pressedTabKey
      ) {
        e.preventDefault();
        lastFocusableElement.focus();
      }

      if (
        Object.is(e.target, lastFocusableElement) &&
        !pressedShiftKey &&
        pressedTabKey
      ) {
        e.preventDefault();
        firstFocusableElement.focus();
      }
    };

    if (dialog && open) {
      const inputs = dialog.querySelectorAll('input, textarea');
      Array.from(inputs).forEach((input) => (input.value = ''));

      focusableElements = Array.from(
        dialog.querySelectorAll(
          '[href], button:not(:disabled), input:not(:disabled), textarea:not(:disabled)'
        )
      );

      dialog.addEventListener('keydown', handleKeyTrap);
    }

    return () => {
      dialog.removeEventListener('keydown', handleKeyTrap);
    };
  }, [open, forwardRef]);

  return (
    <dialog
      ref={forwardRef}
      open={open}
      aria-modal="true"
      className="shadow-xl p-5 rounded-xl border border-slate-200"
    >
      <h3 className="text-lg mb-2">
        <span className={`font-bold ${color}`}>{label}</span> 입력 폼
      </h3>
      <form
        method="dialog"
        className="flex flex-col gap-5 w-[360px] py-2"
        onSubmit={onSave}
      >
        <div className="flex gap-2 items-center justify-start">
          <label htmlFor="taskTitle">제목</label>
          <input
            type="text"
            id="taskTitle"
            name="title"
            className="p-1 border border-slate-300 rounded-md flex-1 hover:border-slate-500"
            defaultValue={state.title}
            onChange={onInput}
          />
        </div>
        <div className="flex gap-2 items-start justify-start">
          <label htmlFor="taskDescription" className="translate-y-0.5">
            설명
          </label>
          <textarea
            id="taskDescription"
            name="description"
            className="p-1 border border-slate-300 rounded-md flex-1 hover:border-slate-500"
            defaultValue={state.description}
            onChange={onInput}
          />
        </div>
        <div className="flex gap-2 items-center justify-end">
          <button
            type="submit"
            className="py-1 px-2 border border-slate-300 rounded-md hover:border-slate-500"
          >
            저장
          </button>
          <button
            type="reset"
            className="py-1 px-2 border border-slate-300 rounded-md hover:border-slate-500"
            onClick={onClose}
          >
            취소
          </button>
        </div>
      </form>
    </dialog>
  );
}

Dialog.propTypes = {
  forwardRef: any.isRequired,
  label: string.isRequired,
  color: string.isRequired,
  state: shape({
    title: string,
    description: string,
  }).isRequired,
  open: bool,
  onInput: func,
  onSave: func,
  onClose: func,
};

export default Dialog;
