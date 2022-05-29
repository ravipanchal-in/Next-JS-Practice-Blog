import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <ul>
      <li> <Link href='/'>Home</Link></li>
      <li> <Link href='/about'>About</Link></li>
      <li> <Link href='/blog'>Blog</Link></li>
    </ul>
  )
}

export default Navbar