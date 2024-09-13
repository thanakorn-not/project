import React from 'react'
import Layout from '../components/Layout'

const Multiple = () => {
  return (
    <Layout>
        <div className='flex justify-center items-center'>
        <img src={`./img/multiple.jpg`} alt="" className='h-16 mr-4' />
        <h1 className='text-4xl font-bold text-center'>
        8 Multiple Intelligences
        </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-pink-100 p-8 rounded-lg m-16'>
            <div className="flex justify-center ">
            <img src="https://englishgang.com/wp-content/uploads/2020/06/%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B9%E0%B8%94%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B8%AD%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%A4%E0%B8%A9%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%87-768x402.jpg" 
             alt="Howard Gardner" 
             className='rounded-full shadow-lg object-cover w-48  h-48' 
            />
            </div>
            <div>
                <p className='text-lg'>1. ด้านภาษา (Linguistic Intelligence)
                ขอบเขต ของปัญญาด้านนี้เกี่ยวกับเรื่องคำ ทั้งพูดและเขียน ผู้ที่มีปัญญาด้านนี้จะแสดงความสามารถในเรื่องคำและภาษา พวกเขามักจะเก่งการอ่าน การเขียนการเล่าเรื่อง และจดจำคำพร้อมกับวัน เดือน ปี ได้ดี พวกเขามีแนวโน้มเรียนได้ดีที่สุดผ่านการอ่าน การจดบันทึก ฟังการสอน และผ่านการอภิปรายถกเถียง และมักมีทักษะการอธิบาย การสอน การปราศรัยหรือพูดจูงใจ จะเรียนภาษาต่างประเทศได้อย่างสบายเพราะมีความจำเรื่องคำได้ดี สามารถนึกย้อนหลังได้ และมีความสามารถเข้าใจ และจัดการโครงสร้างประโยคได้</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-blue-100 p-8 rounded-lg m-16'>
            <div className="flex justify-center ">
            <img src="https://png.pngtree.com/illustration/20190226/ourmid/pngtree-teacher-blackboard-chalk-mathematics-image_3967.jpg" 
             alt="Howard Gardner" 
             className='rounded-full shadow-lg object-cover w-48  h-48' 
            />
            </div>
            <div>
                <p className='text-lg'>2. ด้านตรรกศาสตร์ / คณิตศาสตร์(Mathematical/ Logical Intelligence)
                ขอบ เขตของปัญญาด้านนี้เกี่ยวกับตรรกะ นามธรรม การใช้เหตุผลและตัวเลข คนที่มีปัญญาด้านนี้มักจะเก่งคณิตศาสตร์ หมากรุก การโปรแกรมคอมพิวเตอร์ และกิจกรรมอื่นที่เกี่ยวกับตัวเลขและตรรกะ คำนิยามที่ถูกต้องตั้งอยู่บนการเน้นย้ำบนความสามารถทางคณิตศาสตร์แบบเดิม ความสามารถในการใช้เหตุผล การจดจำรูปแบบนามธรรม การหาความจริงและการคิดอย่างวิทยาศาสตร์ และความสามารถในการคำนวณที่ซับซ้อน สามารถนำมาเทียบเคียงกับมโนทัศน์เรื่องปัญญาแบบเดิมหรือ</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-customLightBlue p-8 rounded-lg m-16'>
            <div className="flex justify-center ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPv0K-9WaT33H8DsbBdCzaMKxFHCZx7UqFaiKJXnfiq8SsM6HwXAXxFf1SHbdY4C0El8&usqp=CAU" 
             alt="Howard Gardner" 
             className='rounded-full shadow-lg object-cover w-48  h-48' 
            />
            </div>
            <div>
                <p className='text-lg'>3. ด้านมิติสัมพันธ์ (Visual-Spatial Intelligence)
                ขอบ เขตของปัญญาด้านนี้เกี่ยวกับการตัดสินภาพและพื้นที่ ผู้ที่มีปัญญาด้านนี้จะเป็นคนที่ใช้สายตา และวิเคราะห์วัตถุในมโนภาพได้ดี ผู้ที่มีปัญญาทางพื้นที่มักมีประสิทธิภาพในการแก้ปริศนาได้ดี พวกเขามีความจำทางสายตาที่ดีและโน้มเอียงไปในทางศิลปิน และมักมีสัมผัสเรื่องทิศทางได้ดีรวมถึงอาจมีเรื่องการประสานงานระหว่างมือ และตาที่ดีด้วย ซึ่งจะเหมือนกับลักษณะที่เห็นในกลุ่มปัญญาด้านการเคลื่อนไหว ดูเหมือนว่ามีความใกล้เคียงกันอย่างสูงระหว่างปัญญาด้านพื้นที่ และปัญญาด้านคณิตศาสตร์ ซึ่งเท่ากับว่าปัญญาทั้งสองชนิดนี้ไม่ได้เป็นอิสระต่อกัน เนื่องจากการแก้ปัญหาทางคณิตศาสตร์เกี่ยวข้องกับการจัดการสัญลักษณ์ จำนวน และปัญญาด้านพื้นที่ก็มีลักษณะเดียวกันด้วย</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-green-100 p-8 rounded-lg m-16'>
            <div className="flex justify-center ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlNJhpd9yBtO6-BBXfvq5-cetzxqxEpVOvL9PV-1lfc12QofvhbqcnmidiohXT8nOCllU&usqp=CAU" 
             alt="Howard Gardner" 
             className='rounded-full shadow-lg object-cover w-48  h-48' 
            />
            </div>
            <div>
                <p className='text-lg'>4. ด้านการเคลื่อนไหว (Bodily-Kinesthetic Intelligence)
                ขอบ เขตของปัญญาด้านนี้เกี่ยวกับการเคลื่อนไหวทางร่างกายและจิตวิทยา ตามทฤษฎีผู้ที่มีปัญญาด้านการเคลื่อนไหวของร่างกายจะเรียนรู้ได้ดีขึ้นเมื่อ เกี่ยวกับการเคลื่อนไหวของกล้ามเนื้อ เช่น การยืนขึ้นและเดินไปรอบๆ และมักจะเก่งในกิจกรรมทางร่างกายเช่น กีฬา หรือเต้นรำ พวกเขาอาจจะชอบการละครหรือการแสดง โดยทั่วไปมักถนัดการสร้างหรือทำบางสิ่ง มักจะเรียนรู้ได้ดีที่สุดโดยใช้ร่างกาย มากกว่าแค่อ่านหรือฟัง ผู้ที่มีความสามารถเช่นนี้มักจะใช้สิ่งที่เรียกว่า ความทรงจำจากกล้ามเนื้อ คือ พวกเขาจะจำสิ่งต่างๆผ่านร่างกายเช่นการจำถ้อยคำหรือรูป</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-customYellow p-8 rounded-lg m-16'>
            <div className="flex justify-center ">
            <img src="https://lh3.googleusercontent.com/proxy/5MbA3Jw3G94EvwoM3pSzNezUvdfleBkWhDInFE-Hgt9V_-TWLIOI4O4fwb9qd8ddxyfioCBhQQR75WXfHmMQxDm5tcIaup4gxHx0Ff5NVj3SQop9p6r2ANWKZmeDtvIf1sOoG0DPz2hwB8iBBzazXC9KEIuWItjsz1xy8QyRITI11g" 
             alt="Howard Gardner" 
             className='rounded-full shadow-lg object-cover w-48  h-48' 
            />
            </div>
            <div>
                <p className='text-lg'>5. ด้านดนตรี (Musical Intelligence)
                ขอบเขตของ ปัญญาด้านนี้เกี่ยวกับจังหวะ ดนตรี และการได้ยิน ผู้ที่มีปัญญาทางดนตรีและจังหวะสูง จะแสดงความสามารถในการสัมผัสทางเสียง จังหวะ ระดับเสียง และดนตรีได้ดีกว่าพวกเขามักมีช่วงเสียงที่ดี หรือแม้แต่ช่วงเสียงที่สมบูรณ์ สามารถร้องเพลง เล่นดนตรี และแต่งเพลงได้ เนื่องจากมีองค์ประกอบทางเสียงมาประกอบกับปัญญาด้านนี้ ผู้ที่มีปัญญานี้อาจจะเรียนได้ดีที่สุดผ่านการฟัง นอกจากนี้ยังใช้เพลงหรือจังหวะเพื่อเรียนและจดจำข้อมูลเสมอๆ และอาจทำงานได้ดีที่สุดด้วยการมีดนตรีเป็นพื้นภูมิ</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-orange-100 p-8 rounded-lg m-16'>
            <div className="flex justify-center ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbfyEvIx7tLLyflOHAiwM6IW0KkE0Hc7vKbiy5x2xuVFEZNsHsmBiV9bRlNrZ5SjYJV8&usqp=CAU
encrypted-tbn0.gstatic.comFO6FOhttps://www.starfishlabz.com/cdn-cgi/image/width=1280,quality=60/media/443500" 
             alt="Howard Gardner" 
             className='rounded-full shadow-lg object-cover w-48  h-48' 
            />
            </div>
            <div>
                <p className='text-lg'>6. ด้านมนุษยสัมพันธ์ (Interpersonal Intelligence)
                ขอบ เขตของปัญญาด้านนี้เกี่ยวกับการปฏิสัมพันธ์กับผู้อื่น ในทฤษฎีผู้ที่มีปัญญา ทางการปฏิสัมพันธ์สูงมีแนวโน้มเอาใจใส่ต่อสิ่งภายนอก ลักษณะนิสัยตามการสัมผัสถึงอารมณ์ ความรู้สึก ภาวะจิตใจ แรงจูงใจของผู้อื่น สามารถร่วมไม้ร่วมมือเพื่อเป็นส่วนหนึ่งของทีมให้ได้สื่อสารอย่างมี ประสิทธิภาพเอาใจใส่ผู้อื่นได้ง่าย เป็นได้ทั้งผู้นำและผู้ตาม ปกติเรียนรู้ได้ดีที่สุดผ่านการทำงานร่วมกับผู้อื่น ชอบการได้อภิปรายถกเถียง</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-customPink p-8 rounded-lg m-16'>
            <div className="flex justify-center ">
            <img src="https://www.starfishlabz.com/cdn-cgi/image/width=1280,quality=60/media/443500" 
             alt="Howard Gardner" 
             className='rounded-full shadow-lg object-cover w-48  h-48' 
            />
            </div>
            <div>
                <p className='text-lg'>7. ด้านการเข้าใจตนเอง (Intrapersonal Intelligence)
                ขอบเขตของปัญญาด้านนี้จะเกี่ยวกับความสามารถในการใคร่ครวญและวิเคราะห์ตนเอง คนที่มีปัญญาประเภทนี้มักเป็นคนเก็บตัวและชอบทำงานคนเดียว เป็นคนระวังตัวสูง สามารถเข้าใจอารมณ์ เป้าหมาย และแรงจูงใจของตนเองได้ มักมีความเกี่ยวข้องกับการแสวงหาทางความคิด เช่น ปรัชญา จะเรียนรู้ได้ดีที่สุดเมื่อรับอนุญาตให้จดจ่อสิ่งที่ตนสนใจ มีระดับการเป็นผู้พอใจในความเป็นเลิศสูง</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-pink-100 p-8 rounded-lg m-16'>
            <div className="flex justify-center ">
            <img src="https://img.pikbest.com/origin/09/27/59/165pIkbEsTnT9.jpg!sw800" 
             alt="Howard Gardner" 
             className='rounded-full shadow-lg object-cover w-48  h-48' 
            />
            </div>
            <div>
                <p className='text-lg'>8. ด้านธรรมชาติ (Naturist Intelligence)
                ขอบเขต ของปัญญาด้านนี้เกี่ยวกับการเข้าใจลึกซึ้งเรื่องธรรมชาติ การดูแล และเชื่อมโยงข้อมูลกับสิ่งแวดล้อมตามธรรมชาติของผู้นั้น ผู้ที่มีปัญญานี้อาจกล่าวได้ว่ามีความอ่อนไหวต่อธรรมชาติ และสถานที่ที่ตนอยู่ ความสามารถที่จะดูแลบางสิ่ง และเอาใจใส่ ฝึกสัตว์ให้เชื่อง และสัมพันธ์กับสัตว์ได้ดีกว่า ทั้งยังสามารถสังเกตการณ์เปลี่ยนแปลงในอากาศ หรือความแปรปรวนทั่วไปในสิ่งรอบตัวได้ การจดจำและจัดกลุ่มสิ่งของเป็นสิ่งหลักของผู้มีปัญญาเข้าใจธรรมชาติ พวกเขาจะต้องเชื่อมโยงประสบการณ์ใหม่กับความรู้ที่มีมาก่อนหน้านี้เพื่อจะ ได้เรียนรู้สิ่งใหม่ที่แท้จริง นักธรรมชาติวิทยา เรียนได้ดีที่สุดเมื่อสิ่งนั้นๆเกี่ยวกับการรวบรวม และการวิเคราะห์ หรือเกี่ยวพันกับบางสิ่งที่สะดุดตาอย่างยิ่งในธรรมชาติ ผู้เรียนแนวธรรมชาติจะสนใจเรียนมากขึ้นเมื่ออยู่นอกสถานที่หรือด้วยการ เคลื่อนไหว</p>
            </div>
        </div>
    </Layout>
  )
}

export default Multiple