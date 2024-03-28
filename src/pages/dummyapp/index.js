import React from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'

function Dummy() {
  return (
    <div>index</div>
  )
}
Dummy.getLayout = page => <BlankLayout>{page}</BlankLayout>
Dummy.guestGuard = true

export default Dummy