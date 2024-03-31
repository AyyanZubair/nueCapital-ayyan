import React from 'react'
import PublicLayout from '../layout'
import BlankLayout from 'src/@core/layouts/BlankLayout';
import ImageGrid from './components/ImageGrid';
import ProprtyDeatails from './components/ProprtyDeatails';
import Calculator from './components/Calculator';
import OverviewSection from './components/OverviewSection';
import PriceSection from './components/PriceSection';

function Detail() {
  return (
    <PublicLayout>
        <div className="bg-gray-50  px-3">
      <div className="max-w-7xl flex flex-col gap-2 mx-auto py-10">
        <ImageGrid />
        <section className="grid grid-cols-5 py-16 gap-5">
          <div className="col-span-full lg:col-span-3">
            <ProprtyDeatails />
            <Calculator />
            <OverviewSection />
          </div>
          <div className=" col-span-full lg:col-span-2">
            <PriceSection />
          </div>
        </section>
      </div>
    </div>

    </PublicLayout>
  )
}
Detail.getLayout = page => <BlankLayout>{page}</BlankLayout>
Detail.guestGuard = true;

export default Detail