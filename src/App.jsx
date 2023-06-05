import { PropTypes } from 'prop-types'

export const App = ({ title, subtitle }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
    </>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

App.defaultProps = {
  title: 'Default title',
  subtitle: 'subtitle',
}
