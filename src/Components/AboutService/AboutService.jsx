import "./AboutService.scss";

export default function AboutService() {
  return (
    <div className="service">
      <div className="service-glavitem">
        <span className="service-subtitle">О сервисе</span>
        <span className="service-title">Все в лучшем представлении</span>
        <div className="service-description">
          <div className="service-description-item">
            <img src="../../../public/security.svg" alt="#" />
            <span>Высокий класс безопастности</span>
          </div>
          <div className="service-description-item">
            <img src="../../../public/24.svg" alt="#" />
            <span>24/7 Обслуживание номеров </span>
          </div>
          <div className="service-description-item">
            <img src="../../../public/confhall.svg" alt="#" />
            <span>Конференц зал</span>
          </div>
          <div className="service-description-item">
            <img src="../../../public/gym.svg" alt="#" />
            <span>Тренажерный зал</span>
          </div>
        </div>
      </div>
    </div>
  );
}
