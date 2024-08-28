import "./PaymentSuccessful.scss";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DatePicker, Space } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;
export default function PaymentSuccessful() {
  const [cleaningFee, setCleaningFee] = useState(21);
  const [serviceCharge, setCleaningFeeserviceCharge] = useState(2);
  const location = useLocation();
  const { adultsCount, childrenCount, name } = location.state;
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [quantityNight, setQuantityNight] = useState(1);
  const [dateRange, setDateRange] = useState([
    moment(),
    moment().add(1, "days"),
  ]);
  
  const navigate = useNavigate();

  const handleDateChange = (dates) => {
    setDateRange(dates);
    setIsDatePickerVisible(false);
  };
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const card = JSON.parse(localStorage.getItem("selectedCard"));
    if (card) {
      setSelectedCard(card);
    } else {
      navigate("/");
    }
  }, [navigate]);
  useEffect(() => {
    const storedDateRange = JSON.parse(localStorage.getItem("dateRange"));
    const storedQuantityNight = localStorage.getItem("quantityNight");

    if (storedDateRange) {
      setDateRange(storedDateRange);
    }

    if (storedQuantityNight) {
      setQuantityNight(parseInt(storedQuantityNight));
    }
  }, []);
  const handleBooking = () => {
    localStorage.removeItem("dateRange");
    localStorage.removeItem("quantityNight");
    navigate("/");
  };

  if (!selectedCard) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="booking-page">
      <div className="booking-btn-back">
        <button className="booking-btn" onClick={handleBooking}>
          <img src="../../../public/arrow-left.svg" alt="#" />
        </button>
      </div>
      <div className="booking-container">
        <h2 className="booking-container-title">Оплата прошла успешно</h2>
        <div className="containers">
          <div className="container__item">
            <div className="waiting">
              <div className="waiting-title">
                <h2>Мы ожидаем вашего приезда!</h2>
                <img src="../../../public/smile.svg" alt="#" />
              </div>
              <span className="waiting-subtitle">
                Администрация отеля будет предупреждена о вашем приезде и
                подгтовит номер.
              </span>
            </div>
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
                                onChange={handleDateChange}
                                format="YYYY-MM-DD"
                                className="date-picker"
                              />
                            </Space>
                          </div>
                        )}
                        <div className="booking-dates">
                          <h3>
                            {moment(dateRange[0]).format("DD.MM.YYYY")} -
                            {moment(dateRange[1]).format("DD.MM.YYYY")}
                          </h3>
                        </div>
                      </div>
                    </div>
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
                  </div>
                </div>
              </form>
            </div>
            <div className="reservation-made">
              <h2 className="reservation-title">Бронь оформил(а)</h2>
              <span className="reservation-subtitle">{name}</span>
            </div>
          </div>

          <div className="container__rightitem">
            <div className="container__rightitem-description-room">
              <div className="booking-img">
                <img src={selectedCard.img1} alt={selectedCard.title} />
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
