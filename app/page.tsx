'use client'
import Image from 'next/image'
import Sun from '@/app/assets/sun.png'
import Drop from '@/app/assets/drop.png'
import Moon from '@/app/assets/moon.png'
import { useEffect, useState } from 'react'
import { database } from './firebaseConfig'
import { ref, onValue } from 'firebase/database'
import { aiqStatus } from '@/app/utils/aiqStatus'
export default function Home() {
  const [data, setData] = useState<string[]>([])
  const [status, setStatus] = useState<number | undefined>(0)
  const lightColors = ['bg-lightGreen', 'bg-lightYellow', 'bg-lightOrange', 'bg-lightRed', 'bg-lightPurple']
  const darkColors = ['bg-darkGreen', 'bg-darkYellow', 'bg-darkOrange', 'bg-darkRed', 'bg-darkPurple']
  const textColors = ['text-textGreen', 'text-textYellow', 'text-textOrange', 'text-textRed', 'text-textPurple']
  const iaqStatus = ['Good', 'Moderate', 'Poor', 'Unhealthy', 'Hazardous']
  useEffect(() => {
    const dataRef = ref(database, 'Data/project')
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val().split('/')
      data.pop()
      const iaq = aiqStatus(+data[4], +data[3], parseFloat(data[2]))
      setData(data)
      setStatus(iaq)
    })
  }, [])
  return (
    <main className='lg:px-16 lg:pt-10 px-6 pt-7'>
      <div className='lg:mb-7 md:mb-5'>
        <div className='md:hidden flex flex-col items-center'>
          <h1 className='md:hidden text-4xl font-bold'>Home</h1>
          <h6 className='md:hidden text-2xl font-bold mb-10 md:mb-0'>Indoor Air Quality</h6>
        </div>
        <div className='md:block hidden'>
          <h1 className='lg:text-4xl md:text-lg text-xl font-bold mb-5 '>Indoor air quality at Home</h1>
          <p className='lg:text-lg md:text-base mb-3 font-semibold '>Air quality index (AQI) and PM2.5 air pollution</p>
          <p className='text-sm '>
            <strong>Last update:</strong> 10s ago
          </p>
        </div>
      </div>
      <div className='md:flex lg:flex-row flex-col hidden'>
        <div className='flex flex-col items-center lg:w-80 lg:px-8 lg:py-5 border shadow-xl mr-12 h-fit'>
          <div className='flex items-center justify-between w-full mb-5'>
            <h1 className='text-lg font-bold'>Home</h1>
            <Image src={Sun} alt='Image' className='w-16' />
          </div>
          <p className='mb-5'>Today, 13 May</p>
          <div className='mb-5 relative'>
            <span className='font-bold text-7xl'>28</span>
            <span className='text-4xl absolute top-0 -right-5'>°</span>
          </div>
          <p className='mb-3'>Humidity: 50%</p>
          <p className='mb-5'>Temperature: 28°C</p>
        </div>
        <div className='flex flex-col flex-grow shadow-lg'>
          <div className='flex bg-[#A8E05F] px-12 py-10 rounded'>
            <div className='bg-[#87C13C] px-3 py-5 rounded w-28 h-28 mr-10'>
              <p className='text-white text-sm'>HOME AQI</p>
              <p className='text-white font-semibold text-3xl items-end'>20</p>
            </div>
            <div className='pt-5'>
              <p className='text-[#607631] text-sm mb-2 font-medium'>LIVE AQI INDEX</p>
              <p className='text-[#607631] text-4xl font-bold'>Good</p>
            </div>
          </div>
          <div className='px-12 py-8 border-x border-b shadow'>
            <div className='flex bg-[#E1DD72] py-5 px-7 rounded w-full justify-between items-center mb-5'>
              <p className='font-bold text-2xl'>PM2.5</p>
              <div className='w-36'>
                <span className='font-bold text-4xl mr-3'>40</span>
                <span className='font-semibold'>µg/m³</span>
              </div>
            </div>
            <div className='flex bg-[#A8C66C] py-5 px-7 rounded w-full justify-between items-center mb-5'>
              <p className='font-bold text-2xl'>ECO2</p>
              <div className='w-36'>
                <span className='font-bold text-4xl mr-3'>55</span>
                <span className='font-semibold'>ppb</span>
              </div>
            </div>
            <div className='flex bg-[#24B589] py-5 px-7 rounded w-full justify-between items-center'>
              <p className='font-bold text-2xl'>TVOC</p>
              <div className='w-36'>
                <span className='font-bold text-4xl mr-3'>450</span>
                <span className='font-semibold'>ppm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='block md:hidden'>
        <div className={`flex p-6 rounded justify-between ${lightColors[status || 0]}`}>
          <div
            className={`text-white rounded-lg w-20 h-20 items-center justify-center flex flex-col ${
              darkColors[status || 0]
            }`}>
            <p className='font-semibold text-3xl'>20</p>
            <p className='text-sm'>AQI</p>
          </div>
          <div className='flex flex-col items-center justify-between'>
            <div className={`font-semibold text-3xl ${textColors[status || 0]}`}>{iaqStatus[status || 0]}</div>
            <div className={`bg-white font-medium px-3 py-1 rounded-lg ${textColors[status || 0]} `}>
              PM2.5 <span className='font-bold text-sm'>{Math.round(parseFloat(data[2]))} µg/m³</span>
            </div>
          </div>
        </div>
        <div className='shadow-2xl p-6 flex items-center justify-between rounded mb-5'>
          <div className='flex items-center'>
            <Image src={Sun} alt='Image' className='w-14 mr-4' />
            <p className='font-bold text-2xl'>{Math.round(parseFloat(data[0]))}°C</p>
          </div>
          <div className='flex items-center'>
            <Image src={Drop} alt='Image' className='w-14 mr-1' />
            <p className='font-bold text-2xl'>{Math.round(parseFloat(data[1]))}%</p>
          </div>
        </div>
        <div className='text-lg flex justify-center mb-8'>Last update: 10s ago</div>
        <div className='bg-[#E1DD72] py-5 px-6 pr-2 mb-6 rounded-lg flex justify-between items-center shadow'>
          <p className='text-2xl font-semibold'>PM2.5</p>
          <div className='flex items-center'>
            <p className='font-bold text-4xl mr-2'>{parseFloat(data[2]).toFixed(1)}</p>
            <p className='text-base'>µg/m³</p>
          </div>
        </div>
        <div className='bg-[#A8C66C] py-5 px-6 mb-6 rounded-lg flex justify-between items-center shadow'>
          <p className='text-2xl font-semibold'>ECO2</p>
          <div className='flex items-center'>
            <p className='font-bold text-4xl mr-2'>{+data[3]}</p>
            <p className='text-base'>ppb</p>
          </div>
        </div>
        <div className='bg-[#24B589] py-5 px-6 rounded-lg flex justify-between items-center shadow'>
          <p className='text-2xl font-semibold'>TVOC</p>
          <div className='flex items-center'>
            <p className='font-bold text-4xl mr-2'>{+data[4]}</p>
            <p className='text-base'>ppm</p>
          </div>
        </div>
      </div>
    </main>
  )
}
