import { useImmer } from 'use-immer';
import { Form } from 'react-router-dom';
import { AppButton } from '@/components';
import { oneOf } from 'prop-types';

const INITIAL_FORM_DATA = {
  title: '',
  description: '',
  thumbnail: null,
};

NoteForm.propTypes = {
  method: oneOf('get', 'post', 'put', 'patch', 'delete').isRequired,
};

function NoteForm({ method }) {
  const [formData, setFormData] = useImmer(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    setFormData((draft) => {
      draft[e.target.name] = e.target.value;
    });
  };

  const handleThumbnail = (e) => {
    const [file] = e.target.files;

    const imageUrl = URL.createObjectURL(file);

    setFormData((draft) => {
      draft.thumbnail = imageUrl;
    });
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
  };

  const isReady =
    formData.title.trim().length > 0 && formData.description.trim().length > 0;

  return (
    <Form
      method={method}
      encType="multipart/form-data"
      onReset={handleReset}
      className="flex flex-col gap-5 w-full max-w-sm"
    >
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="title" className="text-accent">
          제목
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="border border-accent/20 rounded py-2 px-3 text-accent"
          placeholder="노트 제목"
          defaultValue={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="text-accent">
          내용
        </label>
        <textarea
          rows={3}
          cols={20}
          name="description"
          id="description"
          className="border border-accent/20 rounded py-2 px-3 min-h-24 text-accent"
          placeholder="노트 내용을 작성합니다."
          defaultValue={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-accent">커버</span>

        <div className="flex items-center justify-center w-full">
          <div className="focus-within:border-accent flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <label
              htmlFor="cover"
              className="overflow-hidden cursor-pointer relative w-full flex flex-col items-center justify-center pt-5 pb-6"
            >
              <svg
                className="w-8 h-8 my-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">클릭 업로드</span> 하거나,
                드래그 앤 드롭 하세요.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                JPG, PNG, WEBP, AVIF
              </p>
              {formData.thumbnail && (
                <div className="absolute top-0 flex rounded-md justify-center w-full h-full bg-accent/90">
                  <img
                    className="h-full aspect-auto"
                    src={formData.thumbnail}
                    alt=""
                  />
                </div>
              )}
            </label>
            <input
              id="cover"
              name="cover"
              type="file"
              accept="image/jpg,image/png,image/webp,image/avif"
              className="sr-only"
              onChange={handleThumbnail}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <AppButton
          disabled={!isReady}
          submit
          buttonProps={{ className: 'flex-1' }}
        >
          저장
        </AppButton>
        <AppButton
          reset
          buttonProps={{
            className: 'flex-1 bg-slate-400',
          }}
        >
          취소
        </AppButton>
      </div>
    </Form>
  );
}

export default NoteForm;
