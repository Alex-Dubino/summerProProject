import Navbar from "../Navbar/Navbar";
import dayjs from "dayjs";
import React, { useState } from "react";
import { DatePicker } from "antd";
import "./Header.scss";

export default function Header() {
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(1);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);

  const openGuestsModal = () => {
    setIsGuestsModalOpen(true);
  };

  const closeGuestsModal = () => {
    setIsGuestsModalOpen(false);
  };

  const changeAdultsCount = (delta) => {
    setAdultsCount(Math.max(0, adultsCount + delta));
  };

  const changeChildrenCount = (delta) => {
    setChildrenCount(Math.max(0, childrenCount + delta));
  };

  const dateFormatList = ["DD.MM.YYYY"];
  return (
    <div className="header">
      <Navbar />
      <form className="form">
        <div className="form-group">
          <label>Заезд</label>
          <DatePicker
            className=" input"
            defaultValue={dayjs("22.04.2024", dateFormatList[0])}
            format={dateFormatList}
          />
        </div>
        <div className="form-group">
          <label>Выезд</label>
          <DatePicker
            className=" input"
            defaultValue={dayjs("24.04.2024", dateFormatList[0])}
            format={dateFormatList}
          />
        </div>
        <div className="form-group">
          <label htmlFor="adults">Гости</label>

          <div className="booking-form">
            

            {isGuestsModalOpen && (
              <div className="guests-modal open">
                <div className="modal-content">
                  <span className="close-button" onClick={closeGuestsModal}>
                    &times;
                  </span>
                  <h2>Количество гостей</h2>
                  <div className="guest-type">
                    <span className="guest-type-label">Взрослые</span>
                    <div className="counter">
                      <button
                        className="counter-button"
                        onClick={(e) => {
                          e.preventDefault();
                          changeAdultsCount(-1);
                        }}
                      >
                        -
                      </button>
                      <span className="counter-value">{adultsCount}</span>
                      <button
                        className="counter-button"
                        onClick={(e) => {
                          e.preventDefault();
                          changeAdultsCount(1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="guest-type">
                    <span className="guest-type-label">Дети</span>
                    <div className="counter">
                      <button
                        className="counter-button"
                        onClick={(e) => {
                          e.preventDefault();
                          changeChildrenCount(-1);
                        }}
                      >
                        -
                      </button>
                      <span className="counter-value">{childrenCount}</span>
                      <button
                        className="counter-button"
                        onClick={(e) => {
                          e.preventDefault();
                          changeChildrenCount(1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="guests-block" onClick={openGuestsModal}>
              <span className="adults-count">{adultsCount} взрослых,</span>
              <span className="children-count">{childrenCount} детей</span>
            </div>
          </div>
        </div>
        <button className="submit-btn">Найти номер</button>
      </form>
    </div>
  );
}
