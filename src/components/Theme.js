import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Aksiyonlar from '../redux/action' 

const Theme = () => {
  const tema = useSelector(state=>state.temaReducer)

  const dispatch = useDispatch();
  return (
    <div style={tema}>
     <button type="button" onClick={()=>dispatch(Aksiyonlar.temaAksiyon.acik_tema())}>AÇIK</button>
      <button type="button" onClick={()=>dispatch(Aksiyonlar.temaAksiyon.koyu_tema())}>KOYU</button>
    </div>
  )
}

export default Theme
