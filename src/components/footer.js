import { BsCircle } from "react-icons/bs";
import Button from 'react-bootstrap/Button';


function Footer() {
  return (
    <div>

      <div className="h-[650px] bg-[#216CE0]">
        <div className="  px-[300px] py-[100px]">
            <div className="flex justify-between items-center">
            <div>
              <h2 className="text-[white]">Стоимость курса:</h2>
              <h3 className="text-[white]">99000 ₽</h3>
              <p className="text-[white]">Показать цены в: </p>
            </div>

            <div className="w-[400px] h-[450px] bg-[white] rounded-lg">
             <div className="p-[30px]">
              <h2 className="text-4xl mb-[20px]">Оставьте заявку</h2>
              <div>
                <input className=" mb-[20px] w-[330px] p-[10px] rounded-lg" type="text"  placeholder="Имя"/>
              </div>
              <div>
                <input className=" mb-[20px] w-[330px] p-[10px] rounded-lg" type="text"  placeholder="Имя"/>
              </div>
              <div>
                <input className=" mb-[20px] w-[330px] p-[10px] rounded-lg" type="text"  placeholder="Имя"/>
              </div>
              
              <div className="flex gap-[20px] ">
              <BsCircle />
                <p>Я соглашаюсь с условиями оферты <br />
                политики конфиденциальности</p>
              </div>
              <div className="flex justify-center items-center">
              <Button  variant="secondary">Хочу учиться</Button>
              </div>
             </div>
            </div>

            </div>
        </div>
      </div>

    </div>
  )
}

export default Footer;
