import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="bg-[#EFEFEF] p-5 md:px-10 m-5 dark:bg-[#1C1C1C] rounded-lg shadow-lg display-font">
      <div className="flex justify-between items-center">

        <div className="flex items-center justify-between gap-3">
          <Link to='/'><span className="font-semibold display-font hover:border-b hover:border-teal-500">AI Development</span></Link>
        </div>

        <div onClick={() => setToggle(!toggle)} className='text-3xl cursor-pointer md:hidden transition-all duration-900 ease'>
          {
            toggle === false ? (
              <HiOutlineMenu />
            ) : (
              <IoClose />
            )
          }
        </div>
        <ul className={`bg-[#EFEFEF] dark:bg-[#1C1C1C] md:border-none border rounded-lg md:shadow-none shadow-lg md:m-0 p-5 m-5 md:p-0 flex flex-col items-center gap-4 md:flex-row absolute md:static md:z-auto z-[2] md:right-0 right-0 w-[200px] md:w-auto md:pl-0 transition-all duration-100 ease-in-out ${toggle ? 'top-24 opacity-100' : 'top-24 z-[-99] right-72 opacity-0 md:opacity-100'}`}>
          <li className="border-b p-1 border-[#1C1C1C] dark:border-[#EFEFEF] hover:border-teal-500 dark:hover:border-teal-500"><Link to='/onboarding'>Home</Link></li>
          <li className="border-b p-1 border-[#1C1C1C] dark:border-[#EFEFEF] hover:border-teal-500 dark:hover:border-teal-500"><Link to='/silabus'>Silabus</Link></li>
          <li className="border-b p-1 border-[#1C1C1C] dark:border-[#EFEFEF] hover:border-teal-500 dark:hover:border-teal-500"><Link to='/assignment'>Tugas</Link></li>
          <li className="border-b p-1 border-[#1C1C1C] dark:border-[#EFEFEF] hover:border-teal-500 dark:hover:border-teal-500"><Link to='/data'>Peserta</Link></li>
          <li className="border-b p-1 border-[#1C1C1C] dark:border-[#EFEFEF] hover:border-teal-500 dark:hover:border-teal-500"><Link to='/capstone'>Capstone</Link></li>
        </ul>
      </div>
    </nav>
  )
}