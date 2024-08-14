import "./ActivitiesHero.scss";

export default function ActivitiesHero() {
  return (
    <div className="hero">
      <div className="hero__item">
        <h2 className="hero__item-title">Мероприятия</h2>
        <span className="hero__item-subtitle">
          Парк-отель Жемчужный предоставляет клиентам возможность выбора залов
          в зависимости от формата торжества и ваших пожеланий.
        </span>
        <div className="hero_btn">
          <a href="#">Оставить заявку</a>
          <img src="../../../public/arrow-right-line.svg" alt="#" />
        </div>
      </div>
      <div className="hero__item">
        <img className="hero__item-img" src="../../../public/activities_hero.svg" alt="#" />
      </div>
    </div>
  );
}
