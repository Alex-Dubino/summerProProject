import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <Navbar />
      <form className="form">
        <div className="form-group">
          <label>Заезд</label>
          <input className=" input" type="data" placeholder="22.04.2024" />
        </div>
        <div className="form-group">
          <label htmlFor="departure-date">Выезд</label>
          <input className=" input" type="data" placeholder="24.04.2024" />
        </div>
        <div className="form-group">
          <label htmlFor="adults">Гости</label>
          <input
            className="input-adult input"
            type="text"
            placeholder="2 взрослых, 1 ребенок"
          />
        </div>
        <button className="submit-btn">Найти номер</button>
      </form>
    </div>
  );
}
