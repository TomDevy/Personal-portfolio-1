import React from 'react'
import Form from './Form'
import { MailIcon } from '@heroicons/react/solid'

const Contact = () => {
  return (
    <div className='bg-gray-100 md:ml-24 ml-20 h-screen'>
        <div className='mb-6 mx-6 p-2'>
           <MailIcon className='w-5 h-5 text-indigo-700'/> 
           <p className='md:text-sm text-xs text-indigo-700 select-all'>Email: adetomokunisrael2001@gmail.com</p>
           <p className='md:text-sm text-xs text-indigo-700 select-all'>Telephone: +2347045008685</p>
        </div>
        <h1 className='text-2xl text-indigo-600 p-6 uppercase'>Contact Form</h1>
        <Form/>
    </div>
  )
}

export default Contact