import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <>
    <h1>{firstValue}</h1>
    <h2>value: {secondValue}</h2>



  {/* {if(){console.log('hello world')}} will not work */}
  </>;
};

export default ShortCircuit;
