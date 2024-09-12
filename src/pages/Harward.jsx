import React from 'react'
import Layout from '../components/Layout'

const Harward = () => {
  return (
    <Layout>
  <div className="max-w-6xl mx-auto p-6">
    <h1 className='text-4xl font-bold text-center py-6'>
      Who is Dr. Howard Gardner?
    </h1>
    
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
      <div>
        <h2 className='text-2xl font-semibold mb-4'>
          ชีวิตและงานของโฮเวิร์ด การ์ดเนอร์
        </h2>
        <p className='text-justify leading-relaxed'>
          Howard Gardner เป็นศาสตราจารย์ด้านการวิจัยความรู้ความเข้าใจและการศึกษา John H. และ Elisabeth A. Hobbs ที่ Harvard Graduate School of Education ในปี 1967...
        </p>
        <p className='mt-4 text-justify leading-relaxed'>
          การ์ดเนอร์เป็นสมาชิกที่ได้รับการเลือกจาก American Academy of Arts and Sciences, American Philosophical Society...
        </p>
        <p className='mt-4 text-justify leading-relaxed'>
          "นักการศึกษาควรหันมาคิดว่า ทำอย่างไรจึงจะตระหนัก และช่วยกันหล่อเลี้ยงความสามารถความถนัด หรือสติปัญญาของมนุษย์ให้พัฒนาได้อย่างสมบูรณ์..."
        </p>
      </div>

      <div className="flex justify-center lg:justify-end">
        <img src="https://images.squarespace-cdn.com/content/v1/600727b753a1396eba98dd48/0974cc26-ace6-41c2-bd49-8b1351998605/HG+1+Summer+2016_credit+HGSE.JPG" 
             alt="Howard Gardner" 
             className='rounded-lg shadow-lg object-cover w-full max-w-sm h-auto' 
        />
      </div>
    </div>

    <div className='mt-8'>
      <h2 className='text-2xl font-semibold mb-4'>
        ผลงานและการวิจัยของ Gardner
      </h2>
      <p className='text-justify leading-relaxed'>
        สามารถติดตามผลงานปัจจุบันของ Gardner ได้ในสี่ไซต์ต่อไปนี้:
      </p>
      <ul className='list-disc ml-6 mt-4'>
        <li><a href="https://HowardGardner.com" className='text-blue-600 hover:underline'>HowardGardner.com</a></li>
        <li><a href="https://TheRealWorldofCollege.com" className='text-blue-600 hover:underline'>TheRealWorldofCollege.com</a></li>
        <li><a href="https://MultipleIntelligencesOasis.org" className='text-blue-600 hover:underline'>MultipleIntelligencesOasis.org</a></li>
        <li><a href="https://TheGoodProject.org" className='text-blue-600 hover:underline'>TheGoodProject.org</a></li>
      </ul>
    </div>
  </div>
</Layout>
  )
}

export default Harward