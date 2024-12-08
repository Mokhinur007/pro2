import { Button } from 'react-bootstrap';


function Header() {
  return (
    <div>
      <header className='shadow-2xl z-10 relative'>
        <nav className='flex p-[18px] bg-[#EDEDED] pl-[570px] gap-[70px] text-[17px]'>
          <div>
            <ul className='flex gap-[20px]'>
              <li>Содержание</li>
              <li>Содержание</li>
            </ul>
          </div>

          <div className='flex gap-[40px] justify-between'>
            <ul className='flex gap-[20px]'>
            <li >Авторы</li>
              <li>Отзывы</li>
            </ul>
            <Button variant="danger">Оставить заявку</Button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;
