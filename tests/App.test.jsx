import { render, screen } from '@testing-library/react'
import { App } from '../src/App'

describe('<App /> tests', () => {
  const title = 'This is the title'
  const subtitle = 'This is a subtitle'

  test('<App /> should match the snapshot', () => {
    const { container } = render(<App title="Title!!!" subtitle="Subtitle" />)
    expect(container).toMatchSnapshot()
  })

  test('<App /> should render the title in h1', () => {
    render(<App title={title} subtitle={subtitle} />)
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
  })

  test('<App /> should render the subtitle sent in props', () => {
    render(<App title={title} subtitle={subtitle} />)
    expect(screen.getByText(subtitle)).toBeTruthy()
  })
})
