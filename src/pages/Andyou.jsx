import React from 'react'
import Layout from '../components/Layout'

const Andyou = () => {
  return (
    <Layout>
      <div className='grid sm:grid-cols-1 lg:grid-cols-1'>
        <div className='flex flex-col lg:flex-row justify-center items-center mb-16'>
        <img src={`./img/multiple.jpg`} alt="" className='h-16 lg:h-24 mr-4' />
        <h1 className='text-2xl lg:text-4xl font-bold text-center'>
        8 Multiple Intelligences
        </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-around items-center gap-6 lg:gap-20">
          <div className="text-center lg:text-left">
          <h1 className="text-xl lg:text-2xl">แล้วคุณเป็นคนแบบไหน?</h1>
        </div>

        <div className="w-full lg:w-auto">
        <textarea
          className="shadow-md w-full lg:w-96"
          rows="4"
          placeholder="ข้อความ"
        ></textarea>
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default Andyou