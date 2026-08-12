import { useState } from "react";


const Count = () => {
    const [count, setCount]=useState(0);
    const handleIncrease = ()=>{
        setCount(count+1);
    }
    const handleDecrease=()=>{
        if(count>0){
        setCount(count-1)
        }
    }
  return (
    <>
      <div>
        <p>{count}</p>
        <button   className='btn' onClick={handleIncrease}>Increase</button>
        <button className='btn' onClick={handleDecrease}>Decrease</button>
        {count===0 && <p>Count can not be less then zero</p>}
      </div>
    </>
  )
}

export default Count
