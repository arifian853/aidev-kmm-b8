import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const location = useLocation()

  // Function to check if current path is active
  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <>
      <nav className="backdrop-blur-sm p-5 md:px-10 m-5 rounded-lg shadow-lg display-font border-0 relative"
        style={{
          backgroundColor: 'rgba(239, 239, 239, 0.9)',
          boxShadow: '0 8px 25px rgba(20, 184, 166, 0.1)'
        }}>
        <div className="flex justify-between items-center">

          <div className="flex items-center justify-between gap-3">
            <Link to='/'>
              <span className="font-semibold display-font hover:border-b-2 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                AI Development
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div onClick={() => setToggle(!toggle)}
            className='text-3xl cursor-pointer md:hidden transition-all duration-300 ease hover:scale-110 z-50 relative'
            style={{ color: '#14b8a6' }}>
            {toggle ? <IoClose /> : <HiOutlineMenu />}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-row items-center gap-4">
            <li className={`p-1 transition-all duration-300 hover:scale-105 border-b-2 ${isActive('/onboarding') ? 'border-teal-500' : 'border-transparent hover:border-teal-500'}`}>
              <Link to='/onboarding'
                className="transition-colors duration-300"
                style={{ color: 'var(--black)' }}>
                Home
              </Link>
            </li>

            <li className={`p-1 transition-all duration-300 hover:scale-105 border-b-2 ${isActive('/silabus') ? 'border-teal-500' : 'border-transparent hover:border-teal-500'}`}>
              <Link to='/silabus'
                className="transition-colors duration-300"
                style={{ color: 'var(--black)' }}>
                Silabus
              </Link>
            </li>

            <li className={`p-1 transition-all duration-300 hover:scale-105 border-b-2 ${isActive('/assignment') ? 'border-teal-500' : 'border-transparent hover:border-teal-500'}`}>
              <Link to='/assignment'
                className="transition-colors duration-300"
                style={{ color: 'var(--black)' }}>
                Tugas
              </Link>
            </li>

            <li className={`p-1 transition-all duration-300 hover:scale-105 border-b-2 ${isActive('/data') ? 'border-teal-500' : 'border-transparent hover:border-teal-500'}`}>
              <Link to='/data'
                className="transition-colors duration-300"
                style={{ color: 'var(--black)' }}>
                Peserta
              </Link>
            </li>

            <li className={`p-1 transition-all duration-300 hover:scale-105 border-b-2 ${isActive('/capstone') ? 'border-teal-500' : 'border-transparent hover:border-teal-500'}`}>
              <Link to='/capstone'
                className="transition-colors duration-300"
                style={{ color: 'var(--black)' }}>
                Capstone
              </Link>
            </li>

            <li className={`p-1 transition-all duration-300 hover:scale-105 border-b-2 ${isActive('/memories') ? 'border-teal-500' : 'border-transparent hover:border-teal-500'}`}>
              <Link to='/memories'
                className="transition-colors duration-300"
                style={{ color: 'var(--black)' }}>
                Memories
              </Link>
            </li>

            <li className={`p-1 transition-all duration-300 hover:scale-105 border-b-2 ${isActive('/say') ? 'border-teal-500' : 'border-transparent hover:border-teal-500'}`}>
              <Link to='/say'
                className="transition-colors duration-300"
                style={{ color: 'var(--black)' }}>
                Say
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu - Outside nav for full width */}
      {toggle && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 z-40 bg-black bg-opacity-50"
          onClick={() => setToggle(false)}>
          <div className="absolute top-24 left-5 right-5 rounded-lg shadow-lg backdrop-blur-sm border-0"
            style={{
              backgroundColor: 'rgba(239, 239, 239, 0.95)',
              boxShadow: '0 8px 25px rgba(20, 184, 166, 0.1)'
            }}
            onClick={(e) => e.stopPropagation()}>
            <ul className="flex flex-col p-6 gap-4">
              <li className={`p-3 transition-all duration-300 hover:scale-105 border-b-2 rounded-lg ${isActive('/onboarding') ? 'border-teal-500 bg-teal-50' : 'border-transparent hover:border-teal-500 hover:bg-teal-50'}`}>
                <Link to='/onboarding'
                  className="transition-colors duration-300 block text-lg font-medium"
                  style={{ color: 'var(--black)' }}
                  onClick={() => setToggle(false)}>
                  Home
                </Link>
              </li>

              <li className={`p-3 transition-all duration-300 hover:scale-105 border-b-2 rounded-lg ${isActive('/silabus') ? 'border-teal-500 bg-teal-50' : 'border-transparent hover:border-teal-500 hover:bg-teal-50'}`}>
                <Link to='/silabus'
                  className="transition-colors duration-300 block text-lg font-medium"
                  style={{ color: 'var(--black)' }}
                  onClick={() => setToggle(false)}>
                  Silabus
                </Link>
              </li>

              <li className={`p-3 transition-all duration-300 hover:scale-105 border-b-2 rounded-lg ${isActive('/assignment') ? 'border-teal-500 bg-teal-50' : 'border-transparent hover:border-teal-500 hover:bg-teal-50'}`}>
                <Link to='/assignment'
                  className="transition-colors duration-300 block text-lg font-medium"
                  style={{ color: 'var(--black)' }}
                  onClick={() => setToggle(false)}>
                  Tugas
                </Link>
              </li>

              <li className={`p-3 transition-all duration-300 hover:scale-105 border-b-2 rounded-lg ${isActive('/data') ? 'border-teal-500 bg-teal-50' : 'border-transparent hover:border-teal-500 hover:bg-teal-50'}`}>
                <Link to='/data'
                  className="transition-colors duration-300 block text-lg font-medium"
                  style={{ color: 'var(--black)' }}
                  onClick={() => setToggle(false)}>
                  Peserta
                </Link>
              </li>

              <li className={`p-3 transition-all duration-300 hover:scale-105 border-b-2 rounded-lg ${isActive('/capstone') ? 'border-teal-500 bg-teal-50' : 'border-transparent hover:border-teal-500 hover:bg-teal-50'}`}>
                <Link to='/capstone'
                  className="transition-colors duration-300 block text-lg font-medium"
                  style={{ color: 'var(--black)' }}
                  onClick={() => setToggle(false)}>
                  Capstone
                </Link>
              </li>

              <li className={`p-3 transition-all duration-300 hover:scale-105 border-b-2 rounded-lg ${isActive('/memories') ? 'border-teal-500 bg-teal-50' : 'border-transparent hover:border-teal-500 hover:bg-teal-50'}`}>
                <Link to='/memories'
                  className="transition-colors duration-300 block text-lg font-medium"
                  style={{ color: 'var(--black)' }}
                  onClick={() => setToggle(false)}>
                  Memories
                </Link>
              </li>

              <li className={`p-3 transition-all duration-300 hover:scale-105 border-b-2 rounded-lg ${isActive('/say') ? 'border-teal-500 bg-teal-50' : 'border-transparent hover:border-teal-500 hover:bg-teal-50'}`}>
                <Link to='/say'
                  className="transition-colors duration-300 block text-lg font-medium"
                  style={{ color: 'var(--black)' }}
                  onClick={() => setToggle(false)}>
                  Say
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}