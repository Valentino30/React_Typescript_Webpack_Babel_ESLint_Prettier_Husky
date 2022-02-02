import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <button
      style={{
        height: 40,
        color: 'white',
        border: 'none',
        borderRadius: 5,
        backgroundColor: 'lightskyblue',
      }}
      onClick={handleClick}
    >{`You have clicked me ${count} time${count !== 1 ? 's' : ''}`}</button>
  )
}
