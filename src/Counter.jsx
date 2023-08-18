
import React, { useState } from 'react';

function Counter() {
    const[Counter , setCounter] = useState(0)

    function add(){
      
          setCounter(Counter+1)
        
        
    }
    function sub(){
       
  setCounter(Counter-1)
}
    
  return (
   <>
   
   <button onClick={add}  disabled={Counter === 10}>increase</button>

   <p>{Counter}</p>
   <button onClick={sub} disabled={Counter === 0}>decrease</button>
   </>
  )
}

export default Counter;

