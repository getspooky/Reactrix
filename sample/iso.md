## ISO Algorithm Validator Example 

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
      test: 'ISO31661Alpha2',
    }); 
    
  }

  return (
    <>
      <input type="text" name="test" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Test Now</button>  
    </>
  )

}

```

