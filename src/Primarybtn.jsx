import React from 'react'

export const Primarybtn = () => {
  return (
    <button type="submit" className="p-btn">Go</button>

  )
}

export const BtnName = ({btn_name}) =>{
    return <button type="submit" className="p-btn">{btn_name}</button>

}
