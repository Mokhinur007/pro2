import React from 'react'
import { FcCheckmark } from "react-icons/fc";
import Button from 'react-bootstrap/Button';
import Imgs from './imgs/photo_2024-12-06_22-36-00.jpg'

function Section() {
  return (
    <div>
      <div className=' gap-[50px] mb-[100px]'>
        <div className='pt-[100px] pl-[300px] pb-[50px] w-[900px] '>
        <Button variant="outline-secondary">Secondary</Button>
            <h1 className='mt-[50px] text-7xl mb-[60px]'>
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

            <div>
                <img className='mb-[50px]' src={Imgs} alt="" />
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

      </div>
    </div>
  )
}

export default Section;
