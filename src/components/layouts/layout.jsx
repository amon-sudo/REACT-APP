import React, { Children } from 'react'

function Layout(props) {

  const {children} = props
  return (
    <>
    
          <header>
            <h1>EL GRINGO LEARN</h1>
          </header>
          {children}
          <footer>
            <small>Created by</small>
            <a href='#' target='_blank'>

            </a>
            ICON
          </footer>
    
    </>
  )
}

export default Layout