import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#53c028] h-64 gap-4 p-6">
      <div className="flex gap-4 text-2xl">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-linkedin"></i>
      </div>
      <p className="text-center text-white text-sm">Copyright ©2020 All rights reserved</p>
    </div>
  )
}


export default Footer
