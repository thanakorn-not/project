import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center p-4'>
        <div className='flex items-center mb-12'>
          <img src={`./img/multiple.jpg`} alt="" className='h-16 mr-4 object-cover' />
          <h1 className='text-4xl font-bold text-center'>8 Multiple Intelligences</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='flex flex-col items-center'>
          <img src={`./img/8.png`} alt="" className='h-16 mb-4 object-cover' />
          <h1 className='text-3xl font-semibold mb-2'>8 Multiple Intelligences</h1>
          <p className='text-lg'>“ทฤษฎีพหุปัญญา (Multiple intelligence) ของการ์ดเนอร์(Gardner)ได้เสนอแนวคิดว่าสติปัญญาของมนุษย์ไม่ได้มีเฉพาะเหตุผลเชิงตระกะและความสามารถทางภาษาแต่ยังมีสติปัญญาอีกหลายๆด้าน”</p>
        </div>
        <div className='flex flex-col items-center text-center'>
          <h1 className='text-3xl font-semibold mb-4'>ที่อยู่</h1>
          <p className='text-lg'>66/1 หมู่ 5 ตำบลถนนขาด อำเภอนครปฐม จังหวัดนครปฐม 73000</p>
        </div>
        <div className='flex flex-col items-center text-center'>
          <h1 className='text-3xl font-semibold mb-4'>ติดตามพวกเรา</h1>
          <div className='flex space-x-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact