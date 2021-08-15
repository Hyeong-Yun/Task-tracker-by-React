import React from 'react'
import Proptypes from 'prop-types'
import Button from './Button'

export const Header = ({title, onAdd, showAdd}) => {
    return (
        <header>
            {title}
            <Button onClick ={onAdd} className = "btn" color = {showAdd ? 'red' : 'green'} text = {showAdd ? 'close' : 'Open'} />
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: Proptypes.string.isRequired
}


export default Header