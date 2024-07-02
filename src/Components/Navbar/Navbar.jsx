import { Link, useParams } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
export default function Navbar() {
  const [showAll, setShowAll] = useState("navbar");
  const foo = useParams();
  console.log(foo);

  return (
    <div className={showAll}>
      <div className="navbar-logo">
        <img src="../../../public/header-logo.svg" alt="#" />
      </div>
      <div className="navbar__menu">
        <ul>
          <li>
            <Link to="/" className="navbar__menu-link active">
              Гостиница
            </Link>
          </li>
          <li>
            <Link to="/spa" className="navbar__menu-link">
              Спа
            </Link>
          </li>
          <li>
            <Link to="/activities" className="navbar__menu-link">
              Мероприятия
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="navbar__menu-link">
              Контакты
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="burger"
        onClick={() => {
          setShowAll("navbar-active");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className="burger-active"
        onClick={() => {
          setShowAll("navbar");
        }}
      >
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
