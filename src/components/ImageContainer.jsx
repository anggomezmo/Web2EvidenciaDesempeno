import React from 'react'
import './ImageContainer.css'
function ImageContainer({variety,varietyDiv}) {
  
  return (
    <div className={varietyDiv}>
        <img src="../src/assets/mondongo.jpg" alt="mondongo" className={variety}/>
    </div>
  )
}


export default ImageContainer