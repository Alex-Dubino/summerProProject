import "./Booking.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker, Space } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;
export default function Booking() {
  const navigate = useNavigate();

  const [cleaningFee, setCleaningFee] = useState(21);
  const [serviceCharge, setServiceCharge] = useState(2);
  const [selectedCard, setSelectedCard] = useState(null);
  useEffect(() => {
    const card = JSON.parse(localStorage.getItem("selectedCard"));
    if (card) {
      setSelectedCard(card);
    } else {
      navigate("/");
    }
  }, [navigate]);
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(1);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);

  const [dateRange, setDateRange] = useState([
    moment().startOf("day"),
    moment().add(8, "days").endOf("day"),
  ]);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  useEffect(() => {
    localStorage.setItem("dateRange", JSON.stringify(dateRange));
    const quantityNight = dateRange[1].diff(dateRange[0], "days");
    localStorage.setItem("quantityNight", quantityNight);
  }, [dateRange]);
  const handleDateChange = (dates) => {
    setDateRange(dates);
    setIsDatePickerVisible(false);
  };
  const toggleDatePicker = (event) => {
    event.preventDefault();
    setIsDatePickerVisible(!isDatePickerVisible);
  };
  const quantityNight = dateRange[1].diff(dateRange[0], "days");

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
  const handleBooking = () => {
    localStorage.removeItem("selectedCard");
    navigate("/");
  };
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    // Проверяем, если все поля заполнены, то разблокируем кнопку
    setIsFormValid(
      email.trim() !== "" && name.trim() !== "" && dateOfBirth.trim() !== ""
    );
  }, [email, name, dateOfBirth]);
  const handleBookingClick = () => {
    if (!isFormValid) {
      setShowModal(true);
      return;
    }
    const allCount =
      cleaningFee +
      serviceCharge +
      (selectedCard ? selectedCard.cost * quantityNight : 0);
    navigate("/payment", {
      state: { allCount, adultsCount, childrenCount, name },
    });
  };
  if (!selectedCard) {
    return <div>Загрузка...</div>;
  }
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="booking-page">
      <div className="booking-btn-back">
        <button className="booking-btn" onClick={handleBooking}>
          <img src="../../../public/arrow-left.svg" alt="#" />
        </button>
      </div>
      <div className="booking-container">
        <h2 className="booking-container-title">Запрос на бронирование </h2>
        <div className="containers">
          <div className="container__item">
            <div className="trip">
              <form className="form-trip">
                <h2 className="form-title">Ваша поездка</h2>

                <div className="form-glavgroup">
                  <div className="form-group-date">
                    <div className="guests-block">
                      <span className="form-group-title">Даты</span>
                      <div className="guests-subblock">
                        {isDatePickerVisible && (
                          <div className="date-picker-container">
                            <Space direction="vertical" size={12}>
                              <RangePicker
                                // value={dateRange}
                                onChange={handleDateChange}
                                format="YYYY-MM-DD"
                                className="date-picker"
                              />
                            </Space>
                          </div>
                        )}
                        <div className="booking-dates">
                          <h3>
                            {dateRange[0].format("DD MMMM")} -
                            {dateRange[1].format("DD MMMM")}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <span className="edit" onClick={toggleDatePicker}>
                      Изменить
                    </span>
                  </div>
                  <div className="form-group">
                    <div className="guests-block">
                      <span className="form-group-title">Гости</span>
                      <div className="guests-subblock">
                        <span className="adults-count">
                          {adultsCount} взрослых,
                        </span>
                        <span className="children-count">
                          {childrenCount} детей
                        </span>
                      </div>
                    </div>
                    <span className="edit" onClick={openGuestsModal}>
                      Изменить
                    </span>

                    {isGuestsModalOpen && (
                      <div className="guests-modal open">
                        <div className="modal-content">
                          <span
                            className="close-button"
                            onClick={closeGuestsModal}
                          >
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
                              <span className="counter-value">
                                {adultsCount}
                              </span>
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
                              <span className="counter-value">
                                {childrenCount}
                              </span>
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
                  </div>
                </div>
              </form>
            </div>
            <div className="made-booking">
              <h2 className="made-booking-title">
                Чтобы оформить бронирование , выполните инструкцию
                представленную ниже
              </h2>
              <form className="made-booking-form">
                {showModal && (
                  <div className="modal">
                    <div className="modal-content">
                      <span className="close-button" onClick={handleCloseModal}>
                        &times;
                      </span>
                      <h2>Заполните все поля</h2>
                      <p>
                        Пожалуйста, заполните все обязательные поля, чтобы
                        продолжить.
                      </p>
                    </div>
                  </div>
                )}
                <div className="made-booking-form__item">
                  <label>Электронный адрес:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span>
                    Мы отправим подтверждение и квитанции вам на почту
                  </span>
                </div>
                <div className="made-booking-form__item">
                  <label>ФИО:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <span>
                    ФИО должно совпадать с данными в удостоверении личности
                  </span>
                </div>
                <div className="made-booking-form__item">
                  <label>Дата рождения:</label>
                  <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                  <span>Минимальный возраст для бронирования 18 лет.</span>
                </div>
              </form>
              <p className="made-booking-description">
                Нажимая
                <span className="made-booking-description-grey">
                  Согласиться и продолжить
                </span>
                , принимаю следующие документы Жемчужный:
                <span className="made-booking-description-blue">
                  Условия предоставления услуг, Условия обработки плаежтей,
                  Полтитика конфенданциальности.
                </span>
              </p>
              <div
                onClick={() => handleBookingClick()}
                className={`made-booking-btn ${!isFormValid ? "disabled" : ""}`}
              >
                <a href="#">Согласиться и продолжить </a>
              </div>
            </div>
          </div>

          <div className="container__rightitem">
            <div className="container__rightitem-description-room">
              <div className="booking-img">
                <img src={selectedCard.img} alt={selectedCard.title} />
              </div>
              <div className="booking-description-room">
                <span>{selectedCard.title}</span>
                <p>{selectedCard.backward}</p>
                <div className="raiting">
                  <div className="raiting__item">
                    <img src="../../../public/star-s-fill.svg" alt="#" />
                    <div className="raiting-feedback">
                      <p>{selectedCard.raiting}</p>
                      <p>({selectedCard.feedback})</p>
                    </div>
                  </div>
                  <div className="raiting__item">
                    <img src="../../../public/wifi-fill.svg" alt="#" />
                  </div>
                  <div className="raiting__item">
                    <img src="../../../public/restaurant-fill.svg" alt="#" />
                  </div>
                </div>
              </div>
            </div>
            <div className="container__rightitem-description-price">
              <h2 className="container__rightitem-description-price-title">
                Детализация цены
              </h2>
              <div className="container__rightitem-description-price-box">
                <div className="description-price-subbox">
                  <span>
                    {selectedCard.price} х {quantityNight} ночей
                  </span>
                  <span>{selectedCard.cost * quantityNight}р</span>
                </div>
                <div className="description-price-subbox">
                  <span>Плата за уборку</span>
                  <span> {cleaningFee}р</span>
                </div>
                <div className="description-price-subbox">
                  <span>Сервисный сбор Жемчужый</span>
                  <span>{serviceCharge}р</span>
                </div>
              </div>
            </div>
            <div className="container__rightitem-description-allprice">
              <span>Итого (BYN)</span>
              <span>
                {cleaningFee +
                  serviceCharge +
                  selectedCard.cost * quantityNight}
                р
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
