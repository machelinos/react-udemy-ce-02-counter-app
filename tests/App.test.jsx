import { render } from '@testing-library/react'
import { App } from '../src/App'

describe('<App /> tests', () => {
  test('<App /> should amtch the snapshot', () => {
    const { container } = render(<App title="Title!!!" subtitle="Subtitle" />)
    expect(container).toMatchSnapshot()
  })

  test('<App /> should render the title in h1', () => {
    const title = 'hello world'
    const { container } = render(<App title={title} subtitle="Test" />)

    const h1 = container.querySelector('h1')
    expect(h1.innerHTML).toContain(title)
  })
})
