import Img from './imgs/img.jpg'
import { FcCheckmark } from "react-icons/fc";
import Imgs from './imgs/photo_2024-12-06_22-34-55.jpg'
import One from './imgs/photo_2024-12-06_22-35-00.jpg'
import Two from './imgs/photo_2024-12-06_22-33-39.jpg'
import Three from './imgs/photo_2024-12-06_22-35-11.jpg'
import Four from './imgs/photo_2024-12-06_22-35-05.jpg'
import Images from './imgs/photo_2024-12-06_22-35-42.jpg'
import Cheksiz from './imgs/photo_2024-12-06_22-35-23.jpg'
import HH from './imgs/photo_2024-12-06_22-35-30.jpg'
import { BsCheckLg } from "react-icons/bs";
import Line from './imgs/line1.png'
import LineTwo from './imgs/line2.png'
import LineThree from './imgs/line3.png'
import Anoun from './imgs/anoun.jpg'
import Accordion from 'react-bootstrap/Accordion';
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import { Bs4CircleFill } from "react-icons/bs";
import { Bs5CircleFill } from "react-icons/bs";
import { Bs6CircleFill } from "react-icons/bs";
import Sorks from './imgs/photo_2024-12-06_22-35-55.jpg'







function Main() {
  return (
    <div>
      <div className="pl-[300px]">
        <div>
        <h1 className='mt-[50px] text-5xl mb-[60px] '>
        Grafik dizayner nima qiladi?
        </h1>
        <p>
        Grafik dizayn tom ma'noda bizning atrofimizda.
        </p>
        <p className='mb-[40px]'>
        Mahsulotlar qadoqlari, xaritalar va diagrammalar, tovar, ochilish sahifalari, ilovalar,
         reklama, bannerlar <br /> va boshqa  
         ko'p narsalar - bularning barchasi grafik dizaynerlar 
         tomonidan ishlab chiqilgan.
        </p>

        <img className='w-[900px] mb-[100px]' src={Img} alt="" />
        </div>

        <div>
            <h2 className=' text-4xl mb-[60px] '>
            Kasbda boshlash uchun kerak bo'lgan hamma <br /> narsani o'rgatamiz
            </h2>

            <div className='flex gap-[85px]'>
                <div>
                    <div className='w-[400px] mb-[50px]'>
                        <div className='flex gap-[15px] mb-[10px]'>
                        <FcCheckmark />
                        <h5>Amaliy ko'nikmalar</h5>
                        </div>
                        <p className='pl-[25px]'>
                        Biz mashg'ulotimizni vizual idrok etish qonunlari,
                        kompozitsiya qoidalari va tipografiyadan boshlaymiz.
                        Biz sizning kuzatish qobiliyatingiz va badiiy didingizni
                        yaxshilashga yordam beramiz.
                        </p>
                        <p className='pl-[25px]'>
                        Avval biz "nima" yaratishni o'rganamiz.
                        Keyin biz uni amalga oshirish uchun "qanday" 
                        yaratishga o'tamiz.
                        </p>
                    </div>

                    <div className='w-[400px] mb-[80px]'>
                        <div className='flex gap-[15px] mb-[10px]'>
                        <FcCheckmark />
                        <h5>Kompozitsiya, rang, tipografiya asoslari</h5>
                        </div>
                        <p className='pl-[25px]'>
                        Amalda biz brend uchun identifikatsiyani yaratishning
                         barcha bosqichlarini noldan tahlil qilamiz.
                        </p>
                        <p className='pl-[25px]'>
                        Siz mijoz bilan intervyu olishingiz, qisqacha ma'lumot olishingiz,
                        dizaynni ishlab chiqishingiz, dizaynni ommaviy axborot
                        vositalariga topshirishingiz va tayyor natijani mijozga
                        taqdim etishingiz kerak.
                        </p>
                        <p className='pl-[25px]'>
                        Kursning amaliy topshiriqlaridan siz o'zingizning portfelingizga
                         qo'yishingiz mumkin bo'lgan birinchi to'liq ishingizni to'playsiz.
                        </p>
                    </div>
                </div>

                <div>
                <div>
                    <div className='w-[400px] mb-[50px]'>
                        <div className='flex gap-[15px] mb-[10px]'>
                        <FcCheckmark />
                        <h5>Grafik dizayn dasturiy ta'minot</h5>
                        </div>
                        <p className='pl-[25px]'>
                        Biz grafik dizayn uchun asosiy dasturlarni o'rganamiz:
                        Illustrator, Photoshop, CorolDraw, InDesign, After effects.
                         Biz interfeys, vositalar va imkoniyatlar bilan batafsil tanishamiz.
                        </p>
                        <p className='pl-[25px]'>
                        Avval biz "nima" yaratishni o'rganamiz.
                        Keyin biz uni amalga oshirish uchun "qanday" 
                        yaratishga o'tamiz.
                        </p>
                    </div>

                    <div className='w-[400px] mb-[50px]'>
                        <div className='flex gap-[15px] mb-[10px]'>
                        <FcCheckmark />
                        <h5>Yumshoq ko'nikmalar va o'zini o'zi taqdim etish</h5>
                        </div>
                        
                        <p className='pl-[25px]'>
                        Kasbda muvaffaqiyat qozonish uchun dizayner mijozlar bilan
                          muzokaralar olib borishi, tuzatishlar va tanqidlar bilan ishlay
                        olishi va yakuniy natijani taqdim eta olishi muhimdir.
                        </p>
                        <p className='pl-[25px]'>
                        Biz yumshoq ko'nikmalarga alohida o'quv blokini bag'ishladik:
                        teng texnik ko'nikmalarga ega bo'lgan holda, o'zini qanday qilib
                        malakali ko'rsatishni biladigan va ular bilan ishlash yoqimli bo'lganlar
                         ko'proq pul topishadi.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>

      {/* tugadi */}

     <div className='bg-[#F5F5F5] w-[100%] h-[900px] mb-[70px]  '>
       <div className='py-[50px] px-[300px] '>
         <h2 className='mt-[50px] text-4xl mb-[60px]'>
           Biz sizga grafik dizaynerning asosiy <br />  ko'nikmalarini  o'rgatamiz
          </h2> 

          <div className='flex gap-[30px]'>
          <div className='flex items-center justify-center'>
            <div className='w-[300px] h-[550px] bg-white rounded-[20px] py-[100px] px-[50px]'>
                <img src={Imgs} alt="" />
                <h3 className='px-[40px] mt-[50px] text-center'>
                Grafika
                dizayner
                </h3>
            </div>
          </div> 
  
          <div className='p-[50px] bg-[white] w-[800px] h-[550px] rounded-[20px]'>
          <div>
            <p className='gray'>Ko'nikmalar</p>
            <div className='flex'>
                <div>
                    <div className='w-[250px] mb-[5px]'>
                        <div className='flex gap-[5px] mb-[5px]'>
                        <FcCheckmark />
                        <h5>Illustratorda grafik <br />
                         va dizayn matnlarini yarataman</h5>
                        </div>
                    </div>

                    <div className='w-[280px] mb-[5px]'>
                        <div className='flex gap-[15px] mb-[10px]'>
                        <FcCheckmark />
                        <h5>Men murakkab vektor <br /> rasmlar yarataman</h5>
                        </div>
                    </div>
                    <div className='w-[250px] mb-[5px]'>
                        <div className='flex gap-[15px] mb-[10px]'>
                        <FcCheckmark />
                        <h5>Men plakatlar, bannerlar, <br />
                            taqdimotlar va POS- <br />
                            materiallar dizaynini <br />
                             ishlab chiqaman</h5>
                        </div>
                    </div>
                   
                </div>

                <div>
                <div>
                    <div className='w-[250px] mb-[5px]'>
                        <div className='flex gap-[15px] mb-[10px]'>
                        <FcCheckmark />
                        <h5>Men logotiplar, korporativ identi <br />fikatsiya va brend kitoblar yarataman</h5>
                        </div>
                    </div>

                    <div className='w-[200px] mb-[5px]'>
                        <div className='flex gap-[15px] mb-[10px]'>
                        <FcCheckmark />
                        <h5>Shrift juftlarini tanlash</h5>
                        </div>
                    </div>
                    <div className='w-[250px] mb-[5px]'>
                        <div className='flex gap-[15px] mb-[10px]'>
                        <FcCheckmark />
                        <h5>After efects dasturida <br />
                         dinamik postar yarata olaman</h5>
                        </div>
                    </div>
                    
                </div>
                

                </div>
               
            </div>
             <p>Dasturlar</p>
             <div className='flex gap-[20px]'>
                <div>
                    <img src={One} alt="" />
                </div>
                <div>
                    <img src={Two} alt="" />
                </div>
                <div>
                    <img src={Three} alt="" />
                </div>
                <div>
                    <img src={Four} alt="" />
                </div>
             </div>
          </div>
          </div>

          </div>

       </div>
     </div>

     <div className='mb-[100px]'>
        <div className='px-[300px]'>
            <h2 className='mb-[50px] text-5xl'>Tajriba bilan daromad oshadi</h2>
            <div>
              <div className='flex'>
                <img className='w-[60px] mr-[20px]' src={HH} alt="" />
                <p>hh.uz Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                    Consequatur magnam error ipsum soluta eveniet consequuntur!</p>
              </div>
              <div className='flex gap-[50px] justify-center items-stretch'>
                <div className='w-[200px] h-[150px] bg-[#F5F5F5] rounded-xl p-[20px] mt-[200px]'>
                  <h2 className='text-[center]'>3 500 000</h2>
                  <div className='mt-[20px] flex gap-[20px]'>
                    <p>Junior</p> 
                    <p>1 yilgacha</p>
                  </div>
                </div>
                <div className='w-[200px] h-[200px] bg-[#F5F5F5] rounded-xl p-[20px] mt-[150px]'>
                  <h2 className='text-[center]'>7 000 000</h2>
                  <div className='mt-[70px] flex gap-[20px]'>
                    <p>Junior</p> 
                    <p>1 yilgacha</p>
                  </div>
                </div>
                <div className='w-[220px] h-[350px] bg-[#F5F5F5] rounded-xl p-[20px]'>
                  <h2 className='text-[center]'>18 000 000</h2>
                  <img className='mt-[50px] mb-[50px]' src={Cheksiz} alt="" />
                  <div className='mt-[20px] flex gap-[20px]'>
                    <p>Junior</p> 
                    <p>1 yilgacha</p>
                  </div>
                </div>
              </div>
             
            </div>
           
        </div>
     </div> 

       <div className='bg-[#F2F3F6]'>
        <div className='pl-[300px] pt-[50px] pb-[50px]'>
            <h1 className='text-5xl mb-[60px]'>
            Grafik dizayner - <br />
             talab qilinadigan kasb
            </h1>
            <p>
            Grafik dizayner biznesga kompaniyaning ma'nolari va qadriyatlarini vizual materiallar orqali yetkazishga yordam beradi. <br />
            Bu yaxshiroq eslab qolish, potentsial mijozlarni jalb qilish, ular bilan hissiy aloqa o'rnatish va natijada kompaniyaning <br />
           daromadini oshirish uchun kerak.
            </p>

            <h2 className='text-[blue]'>
            2000+ bo'sh ish o'rinlari
            </h2>
            <p>hh.uz ma'lumotlariga ko'ra O’zbekistonda</p>
        </div>
       </div>

       

       <div className='mt-[50px] mb-[50px] '>
          <div className='pl-[300px] pt-[50px]'>
             <h2 className='mt-[50px] text-5xl mb-[40px]'>Кому подойдёт курс</h2>
             <p>Мы создали курс «Профессия графический дизайнер» для тех, кто хочет:</p>
          </div>
          <div  className='pl-[280px] mt-[50px] pb-[50px]'>
          <div className='flex  gap-[20px] '>
            <div className='w-[300px] h-[500px] rounded-xl bg-white mb[70px] border-4'>
                <img className='px-[75px] py-[20px] mb-[10px]' src={Images } alt="" />
                <div className='px-[30px] pr-[30px]'>
                <p className='font-extrabold'>Освоить профессию с нуля</p>
                 <div className='flex'>
                  <BsCheckLg />
                   <p className='ml-[10px]'>Для старта не нужны
                    специальные знания: <br />
                    учим от простого к сложному
                    </p>
                 </div>

                 <div className='flex'>
                  <BsCheckLg />
                   <p className='ml-[10px]'>Для старта не нужны
                    специальные знания: <br />
                    учим от простого к сложному
                    </p>
                 </div>
                
                </div>
            </div>

            <div className='w-[300px] h-[500px] rounded-xl bg-white mb[70px] border-4'>
                <img className='px-[75px] py-[20px] mb-[10px]' src={Images } alt="" />
                <div className='px-[30px] pr-[30px]'>
                <p className='font-extrabold'>Систематизировать знания
                  и сделать графический
                 дизайн своей профессией</p>
                 <div className='flex'>
                  <BsCheckLg />
                   <p className='ml-[10px]'>Для старта не нужны
                    специальные знания: <br />
                    учим от простого 
                    </p>
                 </div>
                 <div className='flex'>
                  <BsCheckLg />
                   <p className='ml-[10px]'>Для старта не нужны
                    специальные знания: <br />
                    учим от простогo
                    </p>
                 </div>
                
                </div>
            </div>

            <div className='w-[300px] h-[500px] rounded-xl bg-white mb[70px] border-4'>
                <img className='px-[75px] py-[20px] mb-[10px]' src={Images } alt="" />
                <div className='px-[30px] pr-[30px]'>
                <p className='font-extrabold'>Получить дополнительный
                 навык к профессии
                 маркетолога, редактора
                 любой другой творческой
                 профессии</p>
                 <div className='flex'>
                  <BsCheckLg />
                   <p className='ml-[10px]'>Для старта не нужны
                    специальные знания: <br />
                    учим от простого к сложному
                    </p>
                 </div>
                </div>
            </div>


          </div>
          </div>
       </div>


       {/* Дорожная карта курса  */}

       <div className='px-[300px] mb-[100px]'>
         <h2 className='text-5xl mb-[50px]'>Дорожная карта курса</h2>
         <div className='pr-[0px]'>
         <p className='mb-[30px]'>
         Эта дорожная карта — то, каким мы видим идеальный путь для того, чтобы стать востребованным
        графическим дизайнером. Мы разработали её вместе с экспертами индустрии. Вы получите навыки,
         которые действительно пригодятся в профессии графического дизайнера.
         </p>
         <p className='mb-[30px]'>
         Эта дорожная карта — то, каким мы видим идеальный путь для того, чтобы стать востребованным
        графическим дизайнером. Мы разработали её вместе с экспертами индустрии. Вы получите навыки,
         которые действительно пригодятся в профессии графического дизайнера.
         </p>
         </div>

         <div className='mb-[50px]'>
            <h3 className='mb-[20px]'>
            <span className='text-[blue]'>Этап 1.</span> Введение в профессию графический дизайнер
            </h3>
            <img src={Line} alt="" />
         </div>

         <div className='mb-[50px]'>
            <h3 className='mb-[20px]'>
            <span className='text-[blue]'> Этап 2.</span> Основы композиции, цвета, типографики и граф. дизайна
            </h3>
            <div className='flex mb-[50px]'>
            <div>
            <img src={Line} alt="" />
            </div>
             
            <div className='mt-[0px]'>
              <img src={LineTwo} alt="" />
            <div className='flex'>
            <img className='ml-[280px]' src={LineThree} alt="" />
            <img className='ml-[280px]' src={LineThree} alt="" />
            <img className='ml-[280px]' src={LineThree} alt="" />
            </div>
            <div className='flex gap-[150px] mt-[20px]'>
                <p>Lorem ipsum dolor  <br />
                 amet consectetur. </p>
                 <p>Lorem ipsum dolor  <br />
                 amet consectetur. </p>
                 <p>Lorem ipsum dolor <br />
                 amet consectetur. </p>
                 <p>Lorem ipsum dolor <br />
                 amet consectetur. </p>
            </div>

            </div>

            </div>



             <h3 className='mb-[20px]'>
            <span className='text-[blue]'> Этап 3.</span>  Основные программы для граф. дизайна
            </h3>
            <div className='flex mb-[50px]'>
            <div>
            <img src={Line} alt="" />
            </div>
             
            <div className='mt-[0px]'>
              <img src={LineTwo} alt="" />
            <div className='flex'>
            <img className='ml-[280px]' src={LineThree} alt="" />
            <img className='ml-[280px]' src={LineThree} alt="" />
            <img className='ml-[280px]' src={LineThree} alt="" />
            </div>
            <div className='flex gap-[150px] mt-[20px]'>
                <p>Lorem ipsum dolor  <br />
                 amet consectetur. </p>
                 <p>Lorem ipsum dolor  <br />
                 amet consectetur. </p>
                 <p>Lorem ipsum dolor <br />
                 amet consectetur. </p>
                 <p>Lorem ipsum dolor <br />
                 amet consectetur. </p>
            </div>

            </div>

            </div>
         </div>

         <div>
            <h2 className='mb-[20px]'><span className='text-[blue]'>Этап 4.</span> Курсовая работа</h2>
            <p>Дизайн айдентики. Разработка и оформление бренда с нуля</p>
            <img src={Anoun} alt="" />
         </div>
       </div>


       <div className='bg-[#F2F3F6] mb-[100px]'>
        <div className='px-[200px] py-[100px] flex flex-col gap-[20px]'>
            <h2 className='text-5xl mb-[50px]'>Содержание курса</h2>
        

    <Accordion className='flex flex-col gap-[20px]'>
      <Accordion.Item eventKey="0">
        <Accordion.Header> <h5> <span className='text-[blue]'>Model 1</span>
             <br />О профессии «графический дизайнер»</h5>
             </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
        <h5> <span className='text-[blue]'>Model 2</span>
             <br />О профессии «графический дизайнер»</h5>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


     {/* 34 */}
     <Accordion className='flex flex-col gap-[20px]'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h5> <span className='text-[blue]'>Model 3</span>
             <br />О профессии «графический дизайнер»</h5></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h5> <span className='text-[blue]'>Model 4</span>
             <br />О профессии «графический дизайнер»</h5></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    {/* 56 */}
    <Accordion className='flex flex-col gap-[20px]'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h5> <span className='text-[blue]'>Model 5</span>
             <br />О профессии «графический дизайнер»</h5></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h5> <span className='text-[blue]'>Model 6</span>
             <br />О профессии «графический дизайнер»</h5></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    {/* 78 */}
    <Accordion className='flex flex-col gap-[20px]'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h5> <span className='text-[blue]'>Model 7</span>
             <br />О профессии «графический дизайнер»</h5></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h5> <span className='text-[blue]'>Model 8</span>
             <br />О профессии «графический дизайнер»</h5></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    {/* 910     */}
    <Accordion className='flex flex-col gap-[20px]'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h5> <span className='text-[blue]'>Model 9</span>
             <br />О профессии «графический дизайнер»</h5></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h5> <span className='text-[blue]'>Model 10</span>
             <br />О профессии «графический дизайнер»</h5></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
       </div>

       <div>
        <div className='px-[300px] pb-[100px]'>
         <h2 className='text-5xl mb-[5px]'>Особенности курса</h2>
         <div className='flex gap-[50px] mt-[50px]'>
            <div>
                <div className='flex gap-[10px] mb-[10px]'>
                <Bs1CircleFill />
                    <p>Помощь с установкой <br />
                       необходимых программ</p>
                </div>
                <div className='flex gap-[10px]'>
                <Bs4CircleFill />
                 <p>Обратная связь и кураторство</p>
                </div>
            </div>

            <div>
                <div className='flex gap-[10px] mb-[10px]'>
                <Bs2CircleFill />
                    <p>Помощь с установкой <br />
                       необходимых программ</p>
                </div>
                <div className='flex gap-[10px]'>
                <Bs5CircleFill />
                 <p>Обратная связь и кураторство</p>
                </div>
            </div>

            <div>
                <div className='flex gap-[10px] mb-[10px]'>
                <Bs3CircleFill />
                    <p>Помощь с установкой <br />
                       необходимых программ</p>
                </div>
                <div className='flex gap-[10px]'>
                <Bs6CircleFill />
                 <p>Обратная связь и кураторство</p>
                </div>
            </div>
         </div>
        </div>
       </div>

       <div className='bg-[#F2F3F6]'>
        <div className='px-[250px] py-[100px]'>
            <h2 className='text-5xl mb-[70px]'>Вы будете у практикующих экспертов</h2>
              <div className=''>
                <div className='flex gap-[30px]'>
                <div className='w-[330px] h-[380px] bg-white rounded-3xl'>
                   <img className='pl-[75px] mt-[20px]' src={Sorks} alt="" />
                   <div className='p-[20px]'>
                   <h2>Lorem, ipsum dolor.</h2>
                    <p>
                    Дизайнер и арт-директор, портфолио:
                   <span className='text-[blue]'> https://www.behance.net/cetacealag</span>
                    </p>
                   </div>
                </div>

                <div className='w-[330px] h-[380px] bg-white rounded-3xl'>
                   <img className='pl-[75px] mt-[20px]' src={Sorks} alt="" />
                   <div className='p-[20px]'>
                   <h2>Lorem, ipsum dolor.</h2>
                    <p>
                    Дизайнер и арт-директор, портфолио:
                   <span className='text-[blue]'> https://www.behance.net/cetacealag</span>
                    </p>
                   </div>
                </div>
                <div className='w-[330px] h-[380px] bg-white rounded-3xl'>
                   <img className='pl-[75px] mt-[20px]' src={Sorks} alt="" />
                   <div className='p-[20px]'>
                   <h2>Lorem, ipsum dolor.</h2>
                    <p>
                    Дизайнер и арт-директор, портфолио:
                   <span className='text-[blue]'> https://www.behance.net/cetacealag</span>
                    </p>
                   </div>
                </div>

              
                </div >
                <div className='flex mt-[50px] gap-[20px] ml-[130px]'>
                <div className='w-[330px] h-[340px] bg-white rounded-3xl'>
                   <img className='pl-[75px] mt-[20px]' src={Sorks} alt="" />
                   <div className='p-[20px]'>
                   <h2>Lorem, ipsum dolor.</h2>
                    <p>
                    Дизайнер и арт-директор, портфолио:
                   <span className='text-[blue]'> https://www.behance.net/cetacealag</span>
                    </p>
                   </div>
                </div>

                <div className='w-[330px] h-[340px] bg-white rounded-3xl'>
                   <img className='pl-[75px] mt-[20px]' src={Sorks} alt="" />
                   <div className='p-[20px]'>
                   <h2>Lorem, ipsum dolor.</h2>
                    <p>
                    Дизайнер и арт-директор, портфолио:
                   <span className='text-[blue]'> https://www.behance.net/cetacealag</span>
                    </p>
                   </div>
                </div>
                </div>
              </div>
        </div>
       </div>
    </div>
  )
}

export default Main;
// Bs1CircleFill
