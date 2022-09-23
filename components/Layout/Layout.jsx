import React from 'react'
import NavBar from '../NavBar/NavBar'
const Layout = ({children}) => {
  return (
    <>
    <NavBar />
    <main className='container pt-20 mx-auto lg:px-4'>
        {children}
    </main>
    </>
  )
}

export default Layout