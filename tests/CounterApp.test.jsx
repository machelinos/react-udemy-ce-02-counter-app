import { fireEvent, render, screen } from '@testing-library/react'
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

  test('Clicking in the +1 button should increment the value by 1', () => {
    render(<CounterApp value={value} />)
    fireEvent.click(screen.getByRole('button', { name: 'add-btn' }))
    expect(screen.getByTestId('count-field').innerHTML).toBe(String(value + 1))
  })

  test('Clicking in the -1 button should decrement the value by 1', () => {
    render(<CounterApp value={value} />)
    fireEvent.click(screen.getByRole('button', { name: 'substract-btn' }))
    expect(screen.getByTestId('count-field').innerHTML).toBe(String(value - 1))
  })

  test('Clicking in the Reset button should reset the count value to intial value', () => {
    render(<CounterApp value={value} />)
    fireEvent.click(screen.getByRole('button', { name: 'add-btn' }))
    fireEvent.click(screen.getByRole('button', { name: 'add-btn' }))
    fireEvent.click(screen.getByRole('button', { name: 'add-btn' }))
    fireEvent.click(screen.getByRole('button', { name: 'reset-btn' }))
    expect(screen.getByTestId('count-field').innerHTML).toBe(String(value))
  })
})
