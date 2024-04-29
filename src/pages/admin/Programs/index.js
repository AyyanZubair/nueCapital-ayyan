import React from 'react'
import DashboardFilterCard from './components/DashboardFilterCard'
import { LuFileX } from 'react-icons/lu'
import Link from 'next/link'

function DashBoard() {
  return (
    <div>
      <div className='bg-orange-200 flex items-center gap-2 rounded-md text-orange-700 ml-1 pl-2 py-1'>
        <LuFileX className='text-orange-800 text-2xl hidden lg:block' />
        <div className='text-xs md:text-sm'>
          <Link href='/admin/kyc' className='font-medium '>
            Please re-upload your proof of address. We are sorry, but we were unable to accept the proof of address
            document you submitted.
          </Link>
        </div>
      </div>
      <DashboardFilterCard />
    </div>
  )
}

export default DashBoard
