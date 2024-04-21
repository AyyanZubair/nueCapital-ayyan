import { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../../../../../public/portfolioImages/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

const VerticalNavbar = () => {
  const [nav, setNav] = useState(false)

  const [activeItem, setActiveItem] = useState(localStorage.getItem('activeNav') || 1) // Initially set the active item to the first one
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('EN')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Change the breakpoint as needed
    }

    handleResize() // Call the function once to set initial value

    window.addEventListener('resize', handleResize) // Add event listener for window resize

    return () => window.removeEventListener('resize', handleResize) // Clean up on unmount
  }, [])

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const closeDropdown = () => {
    setDropdownOpen(false)
  }

  const handleLanguageSelect = language => {
    setSelectedLanguage(language)
    closeDropdown()
  }

  const handleNav = () => {
    setNav(!nav)
  }

  const handleItemClick = itemId => {
    localStorage.setItem('activeNav', itemId)
    setActiveItem(itemId)
    setNav(false) // Close the mobile menu after clicking on an item
  }

  const navItems = [
    { id: 1, text: 'Home', link: '/portfolio/home' },
    { id: 2, text: 'About', link: '/portfolio/about' },
    { id: 3, text: 'Properties', link: '/portfolio/properties' },
    { id: 4, text: 'Sell', link: '/portfolio/sell' }
  ]

  const router = useRouter()

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] xl:px-0 px-8 mx-auto text-black'>
      <Link href='/portfolio/home'>
        <img src={logo.src} className='logo-neu w-[100%] object-cover h-10' alt='Logo' />
      </Link>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex justify-center' id='nav'>
        {navItems.map(item => (
          <li
            key={item.id}
            className={`p-4 text-themeDarkGreen rounded-xl m-2 cursor-pointer duration-300 hover:text-black ${
              router.pathname === item.link && 'font-bold'
            }`}
          >
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {!isMobile && (
        <ul className='flex items-center'>
          <div className='relative inline-block text-left'>
            <button className='font-medium items-center py-2  rounded inline-flex ' onClick={toggleDropdown}>
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10.0133 1C15.0004 1 19.0226 5.018 19.0226 10C19.0226 14.982 15.0004 19 10.0133 19M10.0133 19C5.02608 19 1.00391 14.982 1.00391 10C1.00391 5.018 5.02608 1 10.0133 1'
                  stroke='#033329'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M8.17757 2.05975C5.28456 6.88475 5.28456 13.1158 8.17757 17.9408C9.02445 19.3538 10.9995 19.3538 11.8464 17.9408C14.7394 13.1158 14.7394 6.88475 11.8464 2.05975C10.9985 0.64675 9.02445 0.64675 8.17757 2.05975Z'
                  stroke='#033329'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M2.01562 5.85791C6.91271 7.36891 13.1152 7.36891 18.0112 5.85791M18.0122 14.1419C13.1152 12.6309 6.91271 12.6309 2.01663 14.1419'
                  stroke='#033329'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              {selectedLanguage === 'EN' ? (
                <>
                  <span className='ml-1'>EN</span>
                </>
              ) : (
                <span className='ml-1'>AR</span>
              )}
              <svg
                className={`w-7 h-7 ${dropdownOpen ? 'transform rotate-180' : ''}`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className='absolute text-gray-700 pt-1 bg-gray-100 border border-gray-300 rounded-md'>
                <li>
                  <button
                    className='hover:bg-gray-200 block px-4 py-2 text-sm w-full text-left'
                    onClick={() => handleLanguageSelect('EN')}
                  >
                    EN
                  </button>
                </li>
                <li>
                  <button
                    className='hover:bg-gray-200 block px-4 py-2 text-sm w-full text-left'
                    onClick={() => handleLanguageSelect('ar')}
                  >
                    AR
                  </button>
                </li>
              </ul>
            )}
          </div>
          {/* Vertical line */}
          <div className='border-l border-themeDarkGreen h-6 mx-2'></div>
          <Link href='/login'>
            <button className='text-themeDarkGreen font-medium text-base py-2 rounded mx-2'>Login</button>
          </Link>
          <Link href='/register'>
            <button className='bg-themeDarkGreen  text-white font-bold py-[6px] px-4 rounded mx-2'>SignUp</button>
          </Link>
        </ul>
      )}

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? '' : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <Link href={'/portfolio/home'} className='relative mt-3'>
          <img src={logo.src} className=' mt-2 ml-2' alt='Logo' />
          <div onClick={handleNav} className='absolute top-0 right-0 p-4'>
            {nav ? <AiOutlineClose size='20' /> : <AiOutlineClose size={20} />}
          </div>
        </Link>
        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className={`p-4 duration-300 text-themeDarkGreen cursor-pointer  ${
              activeItem === item.id ? 'font-bold' : ''
            }`}
            onClick={() => handleItemClick(item.id)}
          >
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
        {/* Language Dropdown */}
        <div className='flex pl-4 items-center'>
          <div className='relative  text-left flex items-center'>
            <button className='font-medium items-center py-2  rounded inline-flex ' onClick={toggleDropdown}>
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10.0133 1C15.0004 1 19.0226 5.018 19.0226 10C19.0226 14.982 15.0004 19 10.0133 19M10.0133 19C5.02608 19 1.00391 14.982 1.00391 10C1.00391 5.018 5.02608 1 10.0133 1'
                  stroke='#033329'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M8.17757 2.05975C5.28456 6.88475 5.28456 13.1158 8.17757 17.9408C9.02445 19.3538 10.9995 19.3538 11.8464 17.9408C14.7394 13.1158 14.7394 6.88475 11.8464 2.05975C10.9985 0.64675 9.02445 0.64675 8.17757 2.05975Z'
                  stroke='#033329'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M2.01562 5.85791C6.91271 7.36891 13.1152 7.36891 18.0112 5.85791M18.0122 14.1419C13.1152 12.6309 6.91271 12.6309 2.01663 14.1419'
                  stroke='#033329'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              {selectedLanguage === 'EN' ? (
                <>
                  <span className='ml-1'>EN</span>
                </>
              ) : (
                <span className='ml-1'>AR</span>
              )}
              <svg
                className={`w-7 h-7 ${dropdownOpen ? 'transform rotate-180' : ''}`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className='absolute text-gray-700 pt-1 bg-gray-100 border border-gray-300 rounded-md'>
                <li>
                  <button
                    className='hover:bg-gray-200 block px-4 py-2 text-sm w-full text-left'
                    onClick={() => handleLanguageSelect('EN')}
                  >
                    EN
                  </button>
                </li>
                <li>
                  <button
                    className='hover:bg-gray-200 block px-4 py-2 text-sm w-full text-left'
                    onClick={() => handleLanguageSelect('ar')}
                  >
                    AR
                  </button>
                </li>
              </ul>
            )}
            {/* Vertical line */}
            <div className='border-l border-themeDarkGreen h-6 mx-2'></div>
            <Link href='/login'>
              <button className='text-themeDarkGreen font-medium text-base py-2 rounded mx-2'>Login</button>
            </Link>
            <Link href='/register'>
              <button className='bg-themeDarkGreen  text-white font-bold py-[6px] px-4 rounded mx-2'>SignUp</button>
            </Link>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default VerticalNavbar