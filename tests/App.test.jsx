import { render } from '@testing-library/react'
import { App } from '../src/App'

describe('<App /> tests', () => {
  /*   test('<App /> should amtch the snapshot', () => {
    const { container } = render(<App title="Title!!!" subtitle="Subtitle" />)
    expect(container).toMatchSnapshot()
  }) */

  test('<App /> should render the title in h1', () => {
    const title = 'hello world'
    const { getByTestId } = render(<App title={title} subtitle="Test" />)

    expect(getByTestId('test-title').innerHTML).toContain(title)
  })

  test('<App /> should render the subtitle sent in props', () => {
    const title = 'This is the title'
    const subtitle = 'This is the subtitle'

    const { getByText } = render(<App title={title} subtitle={subtitle} />)

    expect(getByText(subtitle)).toBeTruthy()
  })
})
