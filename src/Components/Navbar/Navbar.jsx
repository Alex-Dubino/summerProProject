import './Navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <img src="../../../public/header-logo.svg" alt="#" />
      </div>
      <div className="navbar__menu">
        <ul>
            <li><a href="#" className='navbar__menu-link active'>Гостиница</a></li>
            <li><a href="#" className='navbar__menu-link'>Спа</a></li>
            <li><a href="#" className='navbar__menu-link'>Мероприятия</a></li>
            <li><a href="#" className='navbar__menu-link'>Контакты</a></li>
        </ul>
      </div>
    </div>
  )
}
