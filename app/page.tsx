import Image from 'next/image'
import Sun from '@/app/assets/sun.png'
export default function Home() {
  return (
    <main className='px-16 pt-10'>
      <div className='lg:mb-7 md:mb-5'>
        <h1 className='lg:text-4xl md:text-lg text-base font-bold mb-5'>Indoor air quality at Home</h1>
        <p className='lg:text-lg md:text-base mb-3 font-semibold'>Air quality index (AQI) and PM2.5 air pollution</p>
        <p className='text-sm'>
          <strong>Last update:</strong> 10s ago
        </p>
      </div>
      <div className='flex'>
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
    </main>
  )
}
