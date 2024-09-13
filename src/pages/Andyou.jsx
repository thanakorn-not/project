import React from 'react'
import Layout from '../components/Layout'

const Andyou = () => {
  return (
    <Layout>
      <div className='flex justify-center items-center mb-16'>
        <img src={`./img/multiple.jpg`} alt="" className='h-16 mr-4' />
        <h1 className='text-4xl font-bold text-center'>
        8 Multiple Intelligences
        </h1>
      </div>
      <div className="flex justify-around  gap-20">
        <div>
          <h1 className="text-2xl">แล้วคุณเป็นคนแบบไหน?</h1>
        </div>

        <div>
          <textarea
            className="shadow-md"
            rows="4"
            cols="50"
            placeholder="ข้อความ"
          ></textarea>
        </div>
      </div>
    </Layout>
  )
}

export default Andyou