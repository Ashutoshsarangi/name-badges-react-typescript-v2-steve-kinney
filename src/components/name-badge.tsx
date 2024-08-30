import { useEffect, useReducer, useState } from 'react';

type Quote = {
  id?: string;
  content: string;
  source: string;
};

type InitialState = {
  count: number;
  draftCount: number;
};

const initialState: InitialState = {
  count: 0,
  draftCount: 0,
};

type Action = {
  type: 'increment' | 'decrement' | 'reset' | 'updateCountFromDraft';
};

type ΑctionWithPayload = {
  type: 'updateDraftCount';
  payload: number;
};

const reducer = (state = initialState, action: Action | ΑctionWithPayload) => {
  const { count, draftCount } = state;

  if (action.type === 'increment') {
    const newCount = count + 1;
    return { count: newCount, draftCount: newCount };
  }

  if (action.type === 'decrement') {
    const newCount = count - 1;
    return { count: newCount, draftCount: newCount };
  }

  if (action.type === 'reset') {
    return { count: 0, draftCount: 0 };
  }

  if (action.type === 'updateDraftCount') {
    console.log('updateDraftCount');

    return { count, draftCount: action.payload };
  }

  if (action.type === 'updateCountFromDraft') {
    return { count: Number(draftCount), draftCount };
  }

  return state;
};
const NameBadge = () => {
  const [counter, setCounter] = useState(0);
  const [quote, setQuote] = useState<Quote | undefined>();
  const [quotes, setQuotes] = useState<Quote[] | undefined>([]);
  const [{ count, draftCount }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {}, [counter]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="number"
          value={counter}
          onChange={(e) => setCounter(e.target.valueAsNumber)}
        />
        <button type="submit">Update Counter</button>
      </form>
      <div>
        {quotes?.map((item: Quote) => {
          return (
            <>
              <div>{item.content}</div>
              <div>{item.id}</div>
              <div>{item.source}</div>
            </>
          );
        })}
      </div>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
    </div>
    // <section className="badge">
    //   <header className="badge-header">
    //     <h1 className="text-5xl">HELLO</h1>
    //     <p>My name is…</p>
    //   </header>
    //   <div className="badge-body">
    //     <p className="badge-name">Steve</p>
    //   </div>
    //   <footer className="badge-footer" />
    // </section>
  );
};

export default NameBadge;
