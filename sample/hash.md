## MD4 Algorithm Validator Example 

```js
import React, { useState } from 'react';
import { useValidate } from 'reactrix';

function Reactrix() {
  const [data, setData] = useState({});
  const [msg, setValidator] = useValidate();

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    );
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setValidator(data, {
      algo: 'md4',
    }); 
    
  }

  return (
    <>
      <input type="text" name="algo" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Test Now</button>  
    </>
  )

}

```

