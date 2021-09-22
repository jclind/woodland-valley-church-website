import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import EmailList from '../EmailList/EmailList'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <EmailList />
      <Footer />
    </>
  )
}

export default Layout
