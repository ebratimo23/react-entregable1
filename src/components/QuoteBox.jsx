import React from 'react'

const CardUsers = ({isRamdom, isColor, randomAll}) => {


  const objectStyle ={
    color: isColor,
  }

  const objectBgStyle ={
    backgroundColor: isColor,
  }

  return (
    <div className='card' style={objectStyle}>
      <h2 className='card-phrasse'>{`${isRamdom.quote}`}</h2>
      <h4 className='author'>{`${isRamdom.author}`}</h4>
      <div className='boton'>
        <button onClick={randomAll} className='btn' style={objectBgStyle}>&#62;</button>
      </div>
    </div>
  )
}

export default CardUsers