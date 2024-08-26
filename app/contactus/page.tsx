import ContactUs1 from '@/components/contactus/ContactUs1'
import ContactUs2 from '@/components/contactus/ContactUs2'
import FAQ from '@/components/contactus/FAQ'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen'>
        <ContactUs1 />
        <ContactUs2 />
        <FAQ />
    </div>
  )
}

export default page