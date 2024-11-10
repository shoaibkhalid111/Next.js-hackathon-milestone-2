import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-[#53c028] ">
      <ul className="flex justify-end items-center h-24 gap-4 px-8">
        <li className="text-white text-lg"><Link href="/">Home</Link></li>
        <li className="text-white text-lg"><Link href="/works">Works</Link></li>
        <li className="text-white text-lg"><Link href="/posts">Posts</Link></li>
      </ul>
    </header>
  )
}


export default Header
