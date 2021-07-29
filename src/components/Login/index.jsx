import React from 'react'
import './index.sass'

const Login = ({ popup, setPopup}) => {
  return (
    <div className='login'>
      <img src="" alt="" className='login__avatar'/>
      <div className="login__details">
        <div className="login__name"></div>
        <div className="login__btn" onClick={() => setPopup(!popup)}>Login</div>
      </div>
    </div>
  )
}

export default Login