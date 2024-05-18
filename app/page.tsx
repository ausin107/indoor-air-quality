'use client'
import Image from 'next/image'
import Sun from '@/app/assets/sun.png'
import Drop from '@/app/assets/drop.png'
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
    <main className='w-screen h-screen flex justify-center items-center md:bg-black'>
      <div className='md:p-10 md:border-4 md:border-black rounded-2xl md:shadow-xl bg-white'>
        <div className='lg:mb-7 md:mb-5'>
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold'>Home</h1>
            <h6 className='text-2xl font-bold mb-10 md:mb-0'>Indoor Air Quality</h6>
          </div>
        </div>
        <div className='w-[20rem]'>
          <div className={`flex p-6 rounded justify-between ${lightColors[status || 0]}`}>
            <div
              className={`text-white rounded-lg w-20 h-20 items-center justify-center flex flex-col ${
                darkColors[status || 0]
              }`}>
              <p className='text-xl font-semibold'>AQI</p>
            </div>
            <div className='flex flex-col items-center justify-between'>
              <div className={`font-semibold text-3xl ${textColors[status || 0]}`}>{iaqStatus[status || 0]}</div>
              <div className={`bg-white font-medium px-3 py-1 rounded-lg ${textColors[status || 0]} `}>
                PM2.5 <span className='font-bold text-sm'>{Math.round(parseFloat(data[2])) || 0} µg/m³</span>
              </div>
            </div>
          </div>
          <div className='shadow-2xl p-6 flex items-center justify-between rounded md:mb-14 mb-10'>
            <div className='flex items-center'>
              <Image src={Sun} alt='Image' className='w-14 mr-4' />
              <p className='font-bold text-2xl'>{Math.round(parseFloat(data[0])) || 0}°C</p>
            </div>
            <div className='flex items-center'>
              <Image src={Drop} alt='Image' className='w-14 mr-1' />
              <p className='font-bold text-2xl'>{Math.round(parseFloat(data[1])) || 0}%</p>
            </div>
          </div>
          <div className='bg-[#E1DD72] py-5 px-6 pr-2 mb-6 rounded-lg flex justify-between items-center shadow'>
            <p className='text-2xl font-semibold'>PM2.5</p>
            <div className='flex items-center'>
              <p className='font-bold text-4xl mr-2'>{parseFloat(data[2]).toFixed(1) || 0}</p>
              <p className='text-base'>µg/m³</p>
            </div>
          </div>
          <div className='bg-[#A8C66C] py-5 px-6 mb-6 rounded-lg flex justify-between items-center shadow'>
            <p className='text-2xl font-semibold'>ECO2</p>
            <div className='flex items-center'>
              <p className='font-bold text-4xl mr-2'>{+data[3] || 0}</p>
              <p className='text-base'>ppb</p>
            </div>
          </div>
          <div className='bg-[#24B589] py-5 px-6 rounded-lg flex justify-between items-center shadow'>
            <p className='text-2xl font-semibold'>TVOC</p>
            <div className='flex items-center'>
              <p className='font-bold text-4xl mr-2'>{+data[4] || 0}</p>
              <p className='text-base'>ppm</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
