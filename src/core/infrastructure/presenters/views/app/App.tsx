import { type JSX, useEffect } from 'react';

import reactLogo from '../../assets/react.svg';
import { useApp } from '../../hooks';

import '../../styles/app.css';

/**
 * Represents the main application component.
 *
 * @returns  The rendered application component.
 */
const App = (): JSX.Element => {
  const { count, error, onDecrementHandler, onIncrementHandler, onMount } =
    useApp();

  useEffect(() => {
    if (error === '') void onMount();
  }, [error, onMount]);

  return (
    <>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        {error !== '' && <span>{error}</span>}
        <div className="card">
          <button type="button" onClick={onDecrementHandler}>
            Decrement
          </button>
          <p>count is {count}</p>
          <button type="button" onClick={onIncrementHandler}>
            Increment
          </button>
        </div>
      </div>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
