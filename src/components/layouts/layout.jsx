import React, { Children } from 'react'

function Layout(props) {

  const {children} = props
  return (
    <>
    
          <header>
            <h1 className='text-gradient'>EL GRINGO LEARN</h1>
          </header>
          {children}
          <footer>
            <small>Created by</small>
            <a href='https://github.com/amon-sudo' target='_blank'>
            <img href='' alt='pfp'></img>
            <p>@EL gringo</p>
            </a>
             <i className="fa-brands fa-github" ></i>
          </footer>
    
    </>
  )
}

export default Layout