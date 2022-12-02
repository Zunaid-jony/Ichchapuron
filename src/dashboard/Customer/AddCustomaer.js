import React from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const AddCustomaer = () => {
  return (
    <div>
      <div className='flex   justify-between text-gray-600 md:px-6 mt-10'>
      
      
        <p className='text-2xl font-bold'>Add New Customer </p>
          <Link to="/dashboard/customer">
        <p className='bg-[#5e23e7] p-2 rounded-md w-20 flex text-white'> <span className='mr-2 mt-1'><BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill></span> Back</p>
        </Link>
        

      </div>
    </div>
  )
}

export default AddCustomaer
