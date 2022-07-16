import React from 'react'
import RgbToHex from './RgbToHex'

function SingleColor(props) {

  const [alert, setAlert] = React.useState(false)
  const bcg = props.rgb.join(',')
  const hex = RgbToHex(...props.rgb)

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [alert])

  function handleClick() {
    setAlert(true);
    navigator.clipboard.writeText(props.hexColor)
  }

  return (
    <div 
      className={`color ${props.index > 10 && 'color-lighter'}`} 
      style={{backgroundColor:`rgb(${bcg})`}}
      onClick={handleClick}
      >
      <p>{props.weight}%</p>
      <p>{hex}</p>
      {alert && <p className='alert'>copied to the clipboard</p>}
    </div>
  )
}

export default SingleColor