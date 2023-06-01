import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({ value }) => {
  const [count, setCount] = useState(value)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleSubstract = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(value)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}
