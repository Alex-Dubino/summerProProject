import "./SpaHero.scss";

export default function SpaHero() {
  return (
    <div className="hero">
      <div className="hero__item">
        <h2 className="spa-title">Спа-комплекс</h2>
        <span className="spa-subtitle">
          Мы приглашаем вас окунуться в наше мироздание баланса и гармонии, где
          каждая деталь заботливо продумана для того, чтобы создать незабываемый
          опыт спа.
        </span>
        <div className="hero_btn">
          <a href="#">Оставить заявку</a>
          <img src="../../../public/arrow-right-line.svg" alt="#" />
        </div>
      </div>
      <div className="hero__item">
        <img className="hero__item-img" src="../../../public/SpaHero.svg" alt="#" />
      </div>
    </div>
  );
}
