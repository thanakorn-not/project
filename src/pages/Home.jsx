import React from 'react'
import Layout from '../components/Layout'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <Layout>
        <div className='max-w-6xl mx-auto p-6'>
          <p className='mb-2'>คำแนะนำสำหรับคุณ</p>
          <h1 className='text-4xl fond-bold mb-4'>โดยทฤษฎี 8 multiple intelligences เชื่อว่า</h1>
          <p className='mb-2'>    “ทฤษฎีของเขาอธิบายโต้แย้งว่าความฉลาด โดยเฉพาะอย่างยิ่งตามที่เคยระบุความหมายไว้แต่เดิมซึ่งเรียก “ไอคิว” (IQ)”นั้นไม่เพียงพอที่จะชี้นำไปสู่การแสดงความสามารถของมนุษย์ที่มีมากมายหลากหลาย ในความคิดของเขาเด็กที่ฝึกคูณเลข(คณิตศาสตร์) ได้อย่างคล่องแคล่วไม่จำเป็นว่าจะฉลาดกว่าคนที่คิดเลขไม่ค่อยได้
          เด็กคนที่สองอาจมีปัญญาชนิดอื่นที่แกร่งกว่าก็ได้ ดังนั้นการเรียนรู้ที่ดีที่สุดอาจเกิดจากวัตถุดิบที่ให้ผ่านวิธีการที่ต่างกัน เขาอาจจะทำได้ดีในเรื่องที่ไม่ใช่คณิตศาสตร์หรืออาจจะกำลังดูผ่าน กระบวนการเรียนรู้การคูณที่ระดับพื้นฐานที่ลึกซึ้งกว่าซึ่งซ่อนศักยภาพ ที่เหนือชั้นกว่าปัญญาทางคณิตศาสตร์ไว้สูงกว่าคนที่แค่จำหลักคิดได้เท่านั้น</p>
        </div>
        <div className='inline-flex gap-6 p-12'>
          <NavLink to="/multiple"className='inline-flex justify-center items-center bg-sky-400 border-black border rounded-lg px-4 py-2 font-bold'>คุณไม่ได้โง่!</NavLink>
          <NavLink to="/multiple"className='inline-flex justify-center items-center '>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-copy"><path d="M2 16V4a2 2 0 0 1 2-2h11"/><path d="M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"/><path d="M5 14H4a2 2 0 1 0 0 4h1"/></svg>
            <span className='ml-2'>ถ้าคุณอยากรู้ว่าคุณพิเศษแค่ไหน ลองดูในเว็บไซส์เรา</span>
          </NavLink>
        </div>
        <div className='flex flex-col items-end p-12'>
          <img src="https://ethics.harvard.edu/sites/hwpi.harvard.edu/files/center-for-ethics/files/howard-gardner-316.jpg" alt="" className=' rounded-full object-cover mb-2'/>
          <p className='text-center'>Dr. Harward Gardner <br />ผู้สร้างทฤษฎี 8 multiple intelligences</p>
        </div>
    </Layout>
  )
}

export default Home