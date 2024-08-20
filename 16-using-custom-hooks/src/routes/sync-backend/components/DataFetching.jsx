import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import S from './DataFetching.module.css';
import LoadingMessage from './LoadingMessage';
import PrintError from './PrintError';

const ENDPOINT = '//yamoo9.pockethost.io/api/collections/olive_oil/records';

const STATE = {
  keyPoint: '상태가 복잡해지면 관리도 덩달아 어려워진다.',
  stateData: {
    one: {
      isLoading: false,
      error: null,
      data: null,
    },
  },
  two: {
    three: {
      four: {
        five: 'deep state object',
      },
    },
  },
};

function DataFetching() {
  const [state, setState] = useImmer(STATE);

  useEffect(() => {
    const abortController = new AbortController();

    setState((draft) => {
      draft.stateData.one.isLoading = true;
    });

    const fetchOliveOil = async () => {
      try {
        const response = await fetch(ENDPOINT, {
          signal: abortController.signal,
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setState((draft) => {
          draft.stateData.one.data = responseData;
          draft.stateData.one.isLoading = false;
        });
      } catch (error) {
        if (!(error instanceof DOMException)) {
          setState((draft) => {
            draft.stateData.one.error = error;
            draft.stateData.one.isLoading = false;
          });
        }
      }
    };

    fetchOliveOil();

    return () => {
      abortController.abort();
    };
  }, [setState]);

  if (state.stateData.one.isLoading) {
    return <LoadingMessage />;
  }

  if (state.stateData.one.error) {
    return <PrintError error={state.stateData.one.error} />;
  }

  return (
    <div className={S.component}>
      <ul>
        {state.stateData.one.data?.items.map?.((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
