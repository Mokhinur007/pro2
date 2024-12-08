import React from 'react'
import { FcCheckmark } from "react-icons/fc";
import Button from 'react-bootstrap/Button';
import Figma from './imgs/top-img-mobile.jpg'
import Figma11 from './imgs/figma11.jpg'
import illustrat22 from './imgs/illustrat22.jpg'
import Ps from './imgs/ps33.jpg'
import Bra from './imgs/bra44.jpg'

function Section() {
  return (
    <div>
      <div className=' gap-[0px] mb-[100px] flex'>
        <div className='pt-[100px] pl-[200px] pb-[50px] w-[900px]  bg-[#F1F2F6]'>
        <Button variant="outline-secondary">Курс-профессия</Button>
            <h1 className='mt-[50px] text-7xl mb-[60px] text-[#black]'>
            Grafik dizayner 
             kasbi
            </h1>
            <p className='mb-[25px] text-[18px]'>
            Noldan grafik dizaynerga aylaning. Chiroyli 
            grafikalar, logotiplar, reklama kreativlari va
             bannerlari hamda brend aydentikasi yaratishni o'rganing.
            </p>
            <p className='mb-[100px] text-[18px]'>
            Kurs sizga tezda kasbga kirishga yordam beradi: siz dizayn studiyasida, reklama agentligida ishga joylashish yoki 
            frilanser sifatida buyurtmalarini qabul qilish uchun zarur ko'nikma va bilimlarga ega bo'lasiz.
            </p>

            <div className='flex gap-[30px] mb-[30px]'>
                <div className='flex gap[2  0px]'>
                    <img className='w-[30px]' src={Figma11} alt="" />
                    <h5>Figma</h5>
                </div>

                <div className='flex gap[10px]'>
                    <img className='w-[30px]' src={illustrat22} alt="" />
                    <h5>Illustrator</h5>
                </div>

                <div className='flex gap[10px]'>
                    <img className='w-[30px]' src={Ps} alt="" />
                    <h5>Photoshop</h5>
                </div>

                <div className='flex gap[10px]'>
                    <img className='w-[30px]' src={Bra} alt="" />
                    <h5>Blender</h5>
                </div>
            </div>

            <div>
                <div className='flex gap-[10px]'>
                <FcCheckmark />
                    <p >Ishga tayyorlash</p>
                </div>
                <div className='flex gap-[10px]'>
                <FcCheckmark />
                    <p >Shaxsiy mentor yordami</p>
                </div>
                <div className='flex gap-[10px]'>
                <FcCheckmark />
                    <p >Yopiq Telegram kanalida kurs kuratorlari bilan muloqot</p>
                </div>
                <div className='flex gap-[10px]'>
                <FcCheckmark />
                    <p >Tayyor portfolio loyihasi: brend aydentikasini noldan ishlab chiqish</p>
                </div>
                <div className='flex gap-[10px]'>
                <FcCheckmark />
                    <p >Planshetsiz bajarilishi mumkin, chizish ko'nikmalari talab qilinmaydi</p>
                </div>
                <div className='flex gap-[10px]'>
                <FcCheckmark />
                    <p >Kurs yakunida sertifikat</p>
                </div>
                
               
            </div>
        </div>
         
         <div>
            <img className='w-[900px] h-[1100px]' src={Figma} alt="" />
         </div>
      </div>
    </div>
  )
}

export default Section;
