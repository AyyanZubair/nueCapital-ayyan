import React from 'react'

function ContactForm() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 place-content-center h-full px-2' >
       <TextField title="First Name" placeholder="Enter Your First Name" type="text" />
       <TextField title="Last Name" placeholder="Enter Your Last Name" type="text"/>
       <TextField title="Email" placeholder="Enter Your Email" type="email"/>
       <TextField title="Phone Number" placeholder="Enter Your Phone Number" type="tel"/>

       <div className="text-start col-span-full">
          <p className="font-bold text-themeDarkGreen text-sm" >Select Subject?</p>
          <div className="flex items-center gap-x-2 pt-2" >
          <input
            type="checkbox"
            className=" accent-themeDarkGreen"
          />
           <span >General Inquiry</span>
          </div>
        </div>
        <div className="text-start col-span-full flex flex-col gap-5">
          <p className="labelMsg label-forms text-themeDarkGreen text-semibold font-medium">Message</p>
          <input
            as="textarea"
            className="border-b border-themeDarkGreen outline-none"
            rows={1}
            placeholder="Write your message.."
          />
      </div>
      <div className='col-span-full flex justify-end'>
        <button
          type="button"
          className="bg-themeDarkGreen text-white rounded-md text-lg hover:bg-themeDarkGreen border-0 font-medium pr-2 font-family: 'Poppins', sans-serif; w-56 min-h-12"
        >
          Send Message
        </button>
      </div>
    </div>

  )
}

export default ContactForm

const TextField = ({title, placeholder, type}) =>{
   return(
    <div className='flex flex-col col-span-1 gap-5'>
        <p className='text-themeDarkGreen text-sm font-semibold'>{title}</p>
        <input
         type={type}
         placeholder={placeholder}
         className='border-b border-themeDarkGreen outline-none'
        />
    </div>
   )
}