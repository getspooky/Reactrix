## Alpha Validator Example 

```js
import React, { useState } from 'react';
import { useValidator } from 'reactrix';

function Reactrix() {
  const [data, setData] = useState({});
  const [msg, setValidator] = useValidator();

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    );
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setValidator(data, {
      username: 'alpha',
    }); 
    
  }

  return (
    <>
      <input type="text" name="username" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Test Now</button>  
    </>
  )

}

```
