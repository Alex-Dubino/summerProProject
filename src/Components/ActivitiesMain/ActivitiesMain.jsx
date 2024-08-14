import "./ActivitiesMain.scss";

export default function ActivitiesMain() {
  return (
    <div className="activities-main">
      <div className="main__item">
        <div className="main__item-hero">
          <span className="main__item-hero-title">Банкет холл</span>
          <div className="box">
            <img src="../../../public/activities_img1.svg" alt="" />

            <div className="box__item">
              <span className="box__item-title">
                Ваши торжества - наше счатье
              </span>
              <ul className="box__item-description">
                <li>
                  бронирование от <span>30</span> человек;
                </li>
                <li>
                  <span>максимальное</span> количество — <span>120</span>
                  человек;
                </li>
                <li>
                  подходит для проведения <span>разных торжеств</span>: свадьбы,
                  корпоративы и так далее.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main__item-bottom">
          <img src="../../../public/activities_img2.svg" alt="#" />
        </div>
      </div>
      <div className="main__item">
        <div className="main__item-hero">
          <span className="main__item-hero-title">Малый зал</span>
          <div className="box">
            <div className="box__item">
              <span className="box__item-title">Наполни праздник музыкой</span>
              <ul className="box__item-description">
                <li>
                  бронирование от <span> 15</span> человек;
                </li>
                <li>
            
                  <span>максимальное</span> количество - <span>30</span>
                  человек;
                </li>
                <li>
                  подходит для проведения <span>разных торжеств</span>: дни
                  рождения, корпоративы и так далее.
                </li>
              </ul>
            </div>
            <img src="../../../public/activities_img3.svg" alt="" />
          </div>
        </div>
        <div className="main__item-bottom">
          <img src="../../../public/activities_img4.svg" alt="#" />
        </div>
      </div>
      <div className="main__item">
        <div className="main__item-hero">
          <span className="main__item-hero-title">Баня-релакс</span>
          <div className="box">
            <img src="../../../public/activities_img5.svg" alt="" />
            <div className="box__item">
              <span className="box__item-title">
                Душевный отдых с компанией
              </span>
              <ul className="box__item-description">
                <li>
                  бронирование от <span>5</span> человек;
                </li>
                <li>
                  <span>максимальное</span> количество — <span>15</span>
                  человек;
                </li>
                <li>
                  подходит для проведения
                  <span>
                    разных торжеств: дни рождения, семейный отдых и так далее.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main__item-bottom">
          <img src="../../../public/activities_img6.svg" alt="#" />
        </div>
      </div>
    </div>
  );
}
