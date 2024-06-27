import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between p-4 bg-red-200'>
        <div className='text-3xl'>PasswordManager</div>
        <ul>
            <li className='text-xl'>
                <a className='hover:font-bold' href="#">Home</a>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
