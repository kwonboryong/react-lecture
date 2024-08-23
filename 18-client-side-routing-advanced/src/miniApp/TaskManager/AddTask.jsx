import { useId } from 'react';
import { PiPlus } from 'react-icons/pi';
import { useTask } from './@context';

function AddTask() {
  const id = useId();

  const {
    methods: { addTask },
  } = useTask();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    let nextStep = formData.get('nextStep');
    nextStep = nextStep.trim();

    const inputElement = document.getElementById(id);

    if (nextStep.length > 0) {
      addTask(nextStep);
      inputElement.value = '';
    } else {
      alert('다음 단계를 입력하세요.');
      inputElement.select();
    }
  };

  return (
    <form className="flex gap-1 items-center" onSubmit={handleSubmit}>
      <label htmlFor={id} className="sr-only">
        add task
      </label>
      <input
        id={id}
        type="text"
        name="nextStep"
        placeholder="Next step"
        className="flex-1 border border-solid border-accent rounded py-0.5 px-1 placeholder:text-slate-400 placeholder:font-extralight placeholder:text-sm"
      />
      <button
        type="submit"
        aria-label="add"
        className="opacity-90 hover:opacity-100 grid place-content-center w-8 h-8 bg-accent text-white rounded transition duration-200"
      >
        <PiPlus />
      </button>
    </form>
  );
}

export default AddTask;
