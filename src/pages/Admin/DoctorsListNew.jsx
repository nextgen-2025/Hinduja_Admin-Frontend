import React from 'react'

const DoctorsListNew = () => {
  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Doctors</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
          <div className='border border-[#C9D8FF] rounded-xl max-w-56 overflow-hidden cursor-pointer group'>
            <img className='bg-[#EAEFFF] group-hover:bg-primary transition-all duration-500' src="" alt="" />
            <div className='p-4'>
              <p className='text-[#262626] text-lg font-medium'>Hello</p>
              <p className='text-[#5C5C5C] text-sm'>fgggfg</p>
              <div className='mt-2 flex items-center gap-1 text-sm'>
                <input type="checkbox" />
                <p>Available</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default DoctorsListNew
