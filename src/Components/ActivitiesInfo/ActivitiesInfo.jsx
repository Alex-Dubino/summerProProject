import "./ActivitiesInfo.scss";

export default function ActivitiesInfo() {
  return (
    <div className="info">
      <div className="info__item">
        <span>
          Вы можете заполнить форму обратной связи, доступную на нашем сайте,
          елси у вас остались вопросы.
        </span>
        <div className="info_btn">
          <a href="#">Оставить заявку</a>
          <img src="../../../public/arrow-right-line.svg" alt="#" />
        </div>
        <span>
          Также мы готовы принять ваши заявки, чтобы сделать ваш праздник еще
          красочнее.
        </span>
      </div>
      <div className="info__item">
        <span>
          Если вам удобнее связаться с нами по телефону, пожалуйста, используйте
          следующий номер:
        </span>
        <div className="telephone">
          <img src="../../../public/telephone.svg" alt="#" />
          <p>+375 (29) 151-61-19</p>
        </div>
      </div>
    </div>
  );
}
