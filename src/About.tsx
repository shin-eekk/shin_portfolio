import css from './index.css';
import React from 'react';
import { useState } from 'react';

const About: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={css.container}>
      <h1>About</h1>
      <p>This is the about page.</p>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
};
export default About;
