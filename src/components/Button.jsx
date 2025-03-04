import React from 'react'

const Button = ({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) => {
  return (
    <button 
        className={`px-4 py-2 rounded-lg hover:scale-105 transition-all focus:bg-slate-600 ${bgColor} ${textColor} ${className}`} {...props}
        type = {type}
    >{children}</button>
  )
}

export default Button