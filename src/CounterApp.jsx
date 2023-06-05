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
      <h2 data-testid="count-field">{count}</h2>
      <button aria-label="add-btn" onClick={handleAdd}>
        +1
      </button>
      <button aria-label="substract-btn" onClick={handleSubstract}>
        -1
      </button>
      <button aria-label="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}
