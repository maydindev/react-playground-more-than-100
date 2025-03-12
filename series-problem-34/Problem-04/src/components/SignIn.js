import React from 'react'

const SignIn = ({onClickSignIn}) => {
  return (
    <a href='#' className='navbar-link' onClick={onClickSignIn}>
            Sign in
          </a>
  )
}

export default SignIn