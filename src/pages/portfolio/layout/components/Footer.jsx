import { FiUser } from 'react-icons/fi'
import { FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTelegramPlane } from 'react-icons/fa'

import Link from 'next/link'

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // For smooth scrolling behavior
  })
}

function Footer() {
  return (
    <section className='bg-themeDarkGreen pt-11 pb-7 '>
      <div
        className='text-white grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
        max-w-7xl px-4 mx-auto'
      >
        <div className='text-start  grid gap-3'>
          <Link href='/page/home'>
            <img src='/portfolioImages/footerlogo.png' alt='' className='w-[152px]' />
          </Link>
          <p className='text-sm font-medium'>Office 182, Level 1, Dammam Saudi Arabia</p>
          <p className='text-sm font-semibold'>Connect with us</p>
          <p className='text-sm font-normal'>contact@nuecapital.com</p>
          <div className='md:justify-between justify-center'>
            <div className='grid grid-cols-3'>
              <div className='flex justify-between  mt-3 text-xl'>
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
        <div className='text-md-center text-start grid sm:gap-1 gap-3 mt-[20px]'>
          <Link href='/page/home' onClick={scrollToTop}>
            <p className='neu-head'>NUECapital</p>
          </Link>
          <ul className='grid sm:gap-0 gap-3  sm:mt-[-41px] mt-0'>
            <Link href='/page/properties' onClick={scrollToTop}>
              <li className='neu-list '>Properties</li>
            </Link>
            <Link href='/page/about' onClick={scrollToTop}>
              <li className='neu-list'>About</li>
            </Link>

            <Link href='/page/sell' onClick={scrollToTop}>
              <li className='neu-list'>Sell with NUE</li>
            </Link>
          </ul>
        </div>

        <div className='flex flex-col gap-7'>
          <p className='text-base font-medium'>Join Our Newsletter Now</p>
          <p className='text-base font-normal'>Register now to get updates on promotions...</p>
          <form action='#' className='flex items-center gap-3 px-2 border bg-white rounded-lg'>
            <div className='text-themeDarkGreen'>
              <FiUser className='text-[24px]' />
            </div>
            <input type='text' placeholder='E-mail Address' className='p-4 flex-1 outline-none text-black' />

            <button className='rounded-[50%] text-white bg-themeDarkGreen px-2 py-2'>
              <FaTelegramPlane className='' />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Footer