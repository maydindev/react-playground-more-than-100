import React from 'react'

const SignOut = ({onClickSignOut}) => {
  return (
    <a href='#' className='navbar-link' onClick={onClickSignOut}>
            Sign out
          </a>
  )
}

export default SignOut