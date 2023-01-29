import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Aksiyonlar from '../redux/action' 

const Counter = () => {
  
  const count = useSelector(state=>state.countReducer)

  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={()=>dispatch(Aksiyonlar.sayiAksiyon.sayiArttir(1))}>ARTTIR</button>
      <button type="button" onClick={()=>dispatch(Aksiyonlar.sayiAksiyon.sayiAzalt(1))}>AZALT</button>

      <p>{count}</p>
    </div>
  )
}

export default Counter
