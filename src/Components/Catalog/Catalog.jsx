import "./Catalog.scss";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import cards from "../../dt/dt.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export default function Catalog() {
  const navigate = useNavigate();

  const handleBookingClick = (item) => {
    localStorage.setItem("selectedCard", JSON.stringify(item));
    navigate("/booking");
  };
  return (
    <div className="catalog">
      <div className="catalog-head">
        <span className="catalog-head-title">
          Гостиница преоставляет 4 типа номеров
        </span>
        <span className="catalog-head-subtitle">
          Независимо от типа номера, вас ожидают современные удобства,
          качественное обслуживание и прекрасные виды на окружающую природу.
        </span>
      </div>
      <div className="card__glavitem">
        {cards.map((item) => (
          <div className="card__item" key={uuidv4()}>
            <div className="card__item-img">
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={item.img1} alt="#" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={item.img2} alt="#" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={item.img3} alt="#" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={item.img4} alt="#" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="card__item-right">
              <div className="description">
                <span className="description-title">{item.title}</span>
                <span className="description-area">{item.area}</span>
                <span className="description-furniture">В номере:</span>
                <span className="description-furniture">{item.furniture}</span>
                <span className="description-description">
                  {item.description}
                </span>
              </div>
              <div className="booking">
                <p>
                  <span>{item.price}</span>
                  за ночь
                </p>
                <div
                  className="booking-btn"
                  onClick={() => handleBookingClick(item)}
                >
                  <a href="#">Забронировать </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="catalog-footer">
        <span>
          Наши номера в гостинице парка отеля "Жемчужный" созданы с изысканной
          любовью и предлагают непревзойденный уровень комфорта. Откройте дверь
          в вашу личную оазис спокойствия, где элегантный дизайн и превосходные
          удобства сливаются в идеальное сочетание для вашего идеального отдыха.
        </span>
      </div>
    </div>
  );
}
