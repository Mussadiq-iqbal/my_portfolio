import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './headersection/Header'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default Layout
