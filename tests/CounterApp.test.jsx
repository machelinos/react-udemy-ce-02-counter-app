import { render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('<CounterApp /> tests', () => {
  const value = 0

  test('<CounterApp /> render should match the snapshot', () => {
    const { container } = render(<CounterApp value={value} />)
    expect(container).toMatchSnapshot()
  })

  test('<CounterApp /> render should render the initial value given as a prop', () => {
    render(<CounterApp value={value} />)
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe(
      String(value),
    )
  })
})
