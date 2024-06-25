import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className=" social">
        <div className="social__item">
          <img
            className="social__item-subimg"
            src="../../../public/phone-fill.svg"
            alt="#"
          />
          <span>+375 (29) 151-61-19</span>
        </div>
        <div className="social__item">
          <img
            className="social__item-subimg"
            src="../../../public/mail-line.svg"
            alt="#"
          />
          <span>zhemchuzhnyi@mail.ru</span>
        </div>
        <div className="social__item social__item-icon">
          <img
            className="social__item-img"
            src="../../../public/instagram.svg"
            alt="#"
          />
          <img
            className="social__item-img"
            src="../../../public/telegram.svg"
            alt="#"
          />
          <img
            className="social__item-img"
            src="../../../public/whatsapp.svg"
            alt="#"
          />
        </div>
      </div>
      <div className="footer__item-logo">
        <img src="../../../public/logo.png" alt="#" className="footer-logo" />
      </div>
      <div className="footer__item">
        <img src="../../../public/mail-line.svg" alt="#" />
        <span className="span-adress">
          225708 Республика Беларусь , Брестская область, Пинск, ул. Слободская
          д. 8
        </span>
        <span className="item-conf">Политика конфиданциальности</span>
      </div>
    </div>
  );
}
