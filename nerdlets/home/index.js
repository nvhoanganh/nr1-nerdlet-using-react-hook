import React, { useState, useEffect } from 'react';

export default function HomeNerdlet() {
  const [data, setData] = useState(0);
  return <>
    <button onClick={() => setData(data + 1)}>Increment</button>
    <h1>Hello, home Nerdlet!</h1>
    <h1>{data}</h1>
  </>
}
