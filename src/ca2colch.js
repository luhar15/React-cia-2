import React, { useState } from 'react'

export default function DropDown() {
    const [color,setColor] = useState("white");
  return (
    <div className='box__style'>
    <div>Colour
    <select onChange={e=>setColor(e.target.value)}  style={{"backgroundColor":color}}>
    <option value="lime">Lime</option>
    <option value="lavender">Lavender</option>
    <option value="darkblue">Darkblue</option>
    <option value="teal">teal</option>
    <option value="rebeccapurple">Rebeccapurple</option>
    <option value="ghostwhite">Ghost white</option>
    <option value="aquamarine">Aqua Marine</option>
    <option value="aliceblue">ALice blue</option>
    </select>
    
    </div>
    <div style={{'background': color, height : '200px',width:'200px', alignItems:'center', marginRight : '150px'}}>
    
    </div>
    </div>

  )
}