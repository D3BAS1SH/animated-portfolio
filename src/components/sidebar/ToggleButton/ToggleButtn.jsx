import React from 'react'

const ToggleButtn = ({setOpen}) => {
  return (
    <button onClick={()=>{setOpen((prev)=>!prev)}}>Button</button>
  )
}

export default ToggleButtn