import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {

  const { setIsSearched, SetSearchFilter } = useContext(AppContext)
  const titleRef = useRef(null)
  const locationRef = useRef(null)

  const onSearch = () => {

    SetSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value
    })

    setIsSearched(true)

  }

  return (
    <div className='container 2xl:px-20 mx-auto my-10'>

      <div className='bg-linear-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000+ jobs to apply</h1>
        <p className='mb-8 max-w-xl text-sm mx-auto font-light px-5'>Your Next Big Career Move Start Right Here - Explore the Best Job Opportunities And Take The First Step Toward Your Future!</p>
        <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>

          <div className='flex items-center'>
            <img className='h-4 sm:h-5' src={assets.search_icon} alt="" />
            <input type="text"
              placeholder='Search for Jobs'
              className='max-sm:text-xs p-2 rounded outline-none w-full'
              ref={titleRef}
            />
          </div>

          <div className='flex items-center'>
            <img className='h-4 sm:h-5' src={assets.location_icon} alt="" />
            <input type="text"
              placeholder='Location'
              className='max-sm:text-xs p-2 rounded outline-none w-full'
              ref={locationRef}
            
            />
          </div>
          <button onClick={onSearch} className='bg-blue-600 px-6 cursor-pointer py-2 rounded text-white m-1'>Search</button>
        </div>
      </div>

      <div className='border border-gray-300 shadow-md mx-2 mb-5 p-6 rounded-md flex'>
        <div className='flex justify-between gap-10 lg:gap-12 flex-wrap'>
          <p className='font-medium'>Trusted by</p>
          <img className='h-6' src={assets.microsoft_logo} alt="" />
          <img className='h-6' src={assets.walmart_logo} alt="" />
          <img className='h-6' src={assets.accenture_logo} alt="" />
          <img className='h-6' src={assets.samsung_logo} alt="" />
          <img className='h-6' src={assets.amazon_logo} alt="" />
          <img className='h-6' src={assets.adobe_logo} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Hero
