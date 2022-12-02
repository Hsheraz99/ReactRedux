import React from 'react'
import "./App.css"
import { useSelector,useDispatch,  } from 'react-redux'
import {incNumber,DecNumber} from "../src/action/contact"
const App = () => {
  const myState=useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch()
  return (
    <>
    <div className='container'>

<h1>Increment/Decrement  counter</h1>
<h4>using React and Redux</h4>
<div className='quantity'>
<a className='quantity-minus' title='Decrement' onClick={()=>dispatch(DecNumber())}><span>-</span> </a>
<input className='amount'    name="quantity" type="text" class="quantity-input"  value={myState}/>
<a className="quantity-plus" title='Increment' onClick={()=>dispatch(incNumber())}><span>+</span></a>
</div>
</div>
    </>
  )
}

export default App;