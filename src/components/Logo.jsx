import React from 'react'
import logo from '../assets/mylogo.png'

const Logo = ({width = '30px'}) => {
  return (
    <div>
      <img
      src={logo}
      className='rounded-2xl max-w-12'
      />
    </div>
  )
}

export default Logo
