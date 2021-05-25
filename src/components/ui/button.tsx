import React from 'react'
import { IButton } from '../interface'

const Button = (props:IButton) => {
    const {title, onPress, className} = props
    return (
        <button className={className} onClick={onPress}>{title}</button>
    )
}

export default Button