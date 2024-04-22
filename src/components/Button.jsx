import PropTypes from 'prop-types'

export function Button({ children, ...rest }) {
    return <button className="button" {...rest}><strong>{children}</strong></button>
}

export default Button

Button.propTypes = {
    children: PropTypes.string,
}