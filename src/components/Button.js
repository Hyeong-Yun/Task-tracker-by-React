import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({color, text, onClick}) => {
    return (
    <button onClick = {onClick} style = {{backgroundColor: color}}>{text}</button>
    )
}

Button.prototypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button