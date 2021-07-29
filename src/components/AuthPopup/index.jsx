import React from 'react'
import './index.sass'


const AuthPopup = ({popup, email, password, setEmail, setPassword, setPopup}) => {

   return (
    <div className={`auth-popup${popup ? ' auth-popup--open' : ''}`}>
        <div className="auth-popup__container">
          <div className="auth-form__header">
            <h3 className="auth-form__title">Sign in form</h3>
            <span
              className='js-close-popup'
              onClick={()=>{
                setPopup(!popup);
                setPassword('');
                setEmail('');
              }
              }
            >
            </span>
          </div>
          <form
            className='auth-form__form'>
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
  )
}
export default AuthPopup