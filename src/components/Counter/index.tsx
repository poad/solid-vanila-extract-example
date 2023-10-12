import { createSignal } from 'solid-js';
import { type JSX } from 'solid-js/jsx-runtime';
import * as style from './counter.css';

export function Counter(): JSX.Element {
  const [count, setCount] = createSignal(0);

  function decrement() {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  }

  function increment() {
    setCount((prev) => prev + 1);
  }

  return (
    <p class={style.container}>
      <button onClick={decrement} class={style.button}>
        -
      </button>
      <input readOnly value={count()} class={style.text} />
      <button onClick={increment} class={style.button}>
        +
      </button>
    </p>
  );
}

export default Counter;
