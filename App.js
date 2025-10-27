import React, { useState } from 'react';

function Child({ onButtonClick }) {
  return (
    <button onClick={() => onButtonClick('Hello from Child!')}>
      Click me
    </button>
  );
}

function Parent() {
  const [message, setMessage] = useState('');

  // This is the callback function that will be passed to the child
  const handleCallback = (childData) => {
    setMessage(childData);
  };

  return (
    <div>
      <h1>Message from child: {message}</h1>
      <Child onButtonClick={handleCallback} />
    </div>
  );
}

export default Parent;