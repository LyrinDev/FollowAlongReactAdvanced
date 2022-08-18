import React, { useState } from 'react';
// use
//comp9onenet name musxt be uppercase
//must be in the function/component body
//cannot call conditionarlly
//invoke in fuction body

const UseStateBasics = () => {
  // console.log(useState('Hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler)
  const [text, setText] = useState('random title');
  const handleClick = () =>{
    if(text === 'random title'){
      setText('hello world');
    } else {
     setText('random title')
    }
  };
  return <React.Fragment>
    <h1>{text}</h1>
    <button type="button" onClick={handleClick}>
      change title
    </button>
  </React.Fragment>
  };

export default UseStateBasics;
