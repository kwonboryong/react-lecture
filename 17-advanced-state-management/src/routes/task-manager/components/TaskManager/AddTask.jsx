import { useId } from 'react';
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
    <form onSubmit={handleSubmit}>
      <label htmlFor={id} className="sr-only">
        add task
      </label>
      <input id={id} type="text" name="nextStep" placeholder="Next step" />
      <button type="submit">+</button>
    </form>
  );
}

export default AddTask;
