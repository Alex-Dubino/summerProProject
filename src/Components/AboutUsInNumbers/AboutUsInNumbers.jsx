import "./AboutUsInNumbers.scss";

export default function AboutUsInNumbers() {
  return (
    <div className="aboutUsInNumbers">
      <h2 className="aboutUsInNumbers-title">О нас в цифрах</h2>
      <div className="aboutUsInNumbers-glavitem">
        <div className="aboutUsInNumbers-subitem">
          <span className="subitem-title">+1000</span>
          <span className="subitem-description">посетителей парка-отеля</span>
        </div>
        <div className="aboutUsInNumbers-subitem">
          <span className="subitem-title">+800</span>
          <span className="subitem-description">гостей гостиницы</span>
        </div>
        <div className="aboutUsInNumbers-subitem">
          <span className="subitem-title">+600</span>
          <span className="subitem-description">положительных отзывов</span>
        </div>
      </div>
    </div>
  );
}
