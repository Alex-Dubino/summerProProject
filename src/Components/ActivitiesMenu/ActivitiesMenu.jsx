import "./ActivitiesMenu.scss";

export default function ActivitiesMenu() {
  return (
    <div className="menu">
      <div className="menu-description">
        <span className="menu-title">Меню банкетной зоны</span>
        <p className="menu-subtitle">
          Позвольте нам дополнить ваши праздники <span>волшебством вкуса.</span>
          Наше <span>изысканное меню</span> станет идеальным дополнением к
          вашему особенному мероприятию, создавая незабываемые кулинарные
          впечатления
        </p>
      </div>
      <div className="food-menu">
        <div className="food-menu-item">
          <div className="food-menu__subitem">
            <h2 className="food-menu-item-title">Основное меню</h2>
            <span className="food-menu__subitem-title">Салаты</span>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Цезарь с курицей </h2>
                <h2 className="food-menu-box-price">250гр. 17,00р</h2>
              </div>
              <span className="food-menu-box-description">
                филе куриное, помидор черри, перепелиное яйцо, сыр пармезан,
                чесночные сухарики, микс салатов, соус цезарь
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Овощной с фета </h2>
                <h2 className="food-menu-box-price"> 200гр. 15,00р</h2>
              </div>
              <span className="food-menu-box-description">
                огурец, помидор, перец болгарский, лук салатный, сыр
                фетта,заправка салатная, зелень
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">
                  Зеленый с семгой и киноа
                </h2>
                <h2 className="food-menu-box-price"> 250гр. 17,00р</h2>
              </div>
              <span className="food-menu-box-description">
                огурец свежий, авокадо, семга с/с, киноа, салатная заправка,
                микс зелени
              </span>
            </div>
          </div>
          <div className="food-menu__subitem">
            <span className="food-menu__subitem-title">Горячие закуски</span>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Цезарь с курицей </h2>
                <h2 className="food-menu-box-price">250гр. 17,00р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">КАРТОФЕЛЬ ФРИ </h2>
                <h2 className="food-menu-box-price">150гр. 6,00р </h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">КАРТОФЕЛЬ ДОЛЬКИ</h2>
                <h2 className="food-menu-box-price">150гр. 6,00р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">ЛУКОВЫЕ КОЛЬЦА</h2>
                <h2 className="food-menu-box-price">100гр. 7,00р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">СЫРНЫЕ ШАРИКИ</h2>
                <h2 className="food-menu-box-price">130гр. 8,00р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">ЧЕСНОЧНЫЕ ГРЕНКИ</h2>
                <h2 className="food-menu-box-price">100гр. 5,00р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">ФРЭНЧ-ДО</h2>
                <h2 className="food-menu-box-price">180гр. 7,00р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">СОУС В АССОРТИМЕНТЕ</h2>
                <h2 className="food-menu-box-price">25гр. 1,00р</h2>
              </div>
            </div>
          </div>

          <div className="food-menu__subitem">
            <span className="food-menu__subitem-title">Пиццы</span>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Чесночный цыпленок</h2>
                <h2 className="food-menu-box-price"> 600гр. 25,00р</h2>
              </div>
              <span className="food-menu-box-description">
                тесто, соус чесночный, мясо цыпленка, томаты, сыр
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Пепперони</h2>
                <h2 className="food-menu-box-price"> 500гр. 18,00р</h2>
              </div>
              <span className="food-menu-box-description">
                тесто, соус томатный, колбаска с/к, сыр
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Баварская</h2>
                <h2 className="food-menu-box-price">600гр. 25,00р</h2>
              </div>
              <span className="food-menu-box-description">
                тесто, соус томатный, колбаски охотничьи, колбаса в/к,
                томаты,огурец маринованный, сыр
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Сырная </h2>
                <h2 className="food-menu-box-price">500гр. 28,00р</h2>
              </div>
              <span className="food-menu-box-description">
                тесто, соус сливочный, Дор Блю, моцарелла, фету, сыр твердый
              </span>
            </div>
          </div>
        </div>
        <div className="food-menu-item">
          <div className="food-menu__subitem">
            <span className="food-menu__subitem-title">Холодные напитки</span>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">
                  Coca-Cola, Sprite, Fanta, Schweps
                </h2>
                <h2 className="food-menu-box-price">0,5л 4,00р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Вода питьевая Bonaqua </h2>
                <h2 className="food-menu-box-price"> 0,5л 3,00р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Сок “Rich” </h2>
                <h2 className="food-menu-box-price">1л 8,00р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Сок с трубочкой</h2>
                <h2 className="food-menu-box-price"> 0,2л 8,00р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">
                  Burn напиток энергетический
                </h2>
                <h2 className="food-menu-box-price"> 0,25л 6,00р</h2>
              </div>
            </div>
          </div>

          <div className="food-menu__subitem">
            <span className="food-menu__subitem-title">Горячие напитки</span>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Чай</h2>
                <h2 className="food-menu-box-price"> 200мл 2,00р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Эспрессо</h2>
                <h2 className="food-menu-box-price"> 30мл 3,00р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Американо</h2>
                <h2 className="food-menu-box-price">120мл 3,00р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Капучино</h2>
                <h2 className="food-menu-box-price"> 150мл 4,00р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Латте</h2>
                <h2 className="food-menu-box-price">150мл 4,00р </h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="line"></div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Молочные коктейли</h2>
                <h2 className="food-menu-box-price">300мл 7,00р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Мороженное</h2>
                <h2 className="food-menu-box-price">100гр 5,00р</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="food-menu">
        <div className="food-menu-item">
          <div className="alcohol-menu__subitem">
            <h2 className="food-menu-item-title">Алкогольные напитки</h2>
            <span className="food-menu__subitem-title">Водка</span>
            <div className="volume">
              <span>50мл</span>
              <span> 0,5л</span>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Старый город</h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">3,00р</h2>
                <h2 className="alcohol-menu-box-price">30,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Свояк</h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">3,00р</h2>
                <h2 className="alcohol-menu-box-price">30,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Финляндия</h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">6,00р</h2>
                <h2 className="alcohol-menu-box-price">60,00р</h2>
              </div>
            </div>
          </div>

          <div className="alcohol-menu__subitem">
            <span className="food-menu__subitem-title">Коньяк, Бренди</span>
            <div className="volume">
              <span>50мл</span>
              <span> 0,5л</span>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Пять звездочек </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">4,00р</h2>
                <h2 className="alcohol-menu-box-price">40,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Араспел </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">6,00р</h2>
                <h2 className="alcohol-menu-box-price">60,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Арарат Ани </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">8,00р</h2>
                <h2 className="alcohol-menu-box-price">80,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Hennesy VS </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">10,00р</h2>
                <h2 className="alcohol-menu-box-price">100,00р</h2>
              </div>
            </div>
          </div>
          <div className="alcohol-menu__subitem">
            <span className="food-menu__subitem-title">Ром</span>
            <div className="volume">
              <span>50мл</span>
              <span> 0,5л</span>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Bacardi Blanca </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">9,00р</h2>
                <h2 className="alcohol-menu-box-price">180,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Bacardi Negra </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">9,00р</h2>
                <h2 className="alcohol-menu-box-price">180,00р</h2>
              </div>
            </div>
          </div>
          <div className="alcohol-menu__subitem">
            <span className="food-menu__subitem-title">Виски</span>
            <div className="volume">
              <span>50мл</span>
              <span> 0,5л</span>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Passport Scotch </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">7,00р</h2>
                <h2 className="alcohol-menu-box-price">140,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Jim Beam </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">8,00р</h2>
                <h2 className="alcohol-menu-box-price">160,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Grants </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">8,00р</h2>
                <h2 className="alcohol-menu-box-price">160,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Jameson </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">1,00р</h2>
                <h2 className="alcohol-menu-box-price">200,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Ballantines </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">9,00р</h2>
                <h2 className="alcohol-menu-box-price">180,00р</h2>
              </div>
            </div>
          </div>
          <div className="alcohol-menu__subitem">
            <span className="food-menu__subitem-title">Джин</span>
            <div className="volume">
              <span>50мл</span>
              <span> 0,5л</span>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Beefeater </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">8,00р</h2>
                <h2 className="alcohol-menu-box-price">160,00р</h2>
              </div>
            </div>
          </div>
          <div className="alcohol-menu__subitem">
            <span className="food-menu__subitem-title">Вермут</span>
            <div className="volume">
              <span>50мл</span>
              <span> 0,5л</span>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Martini Bianco </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">5,00р</h2>
                <h2 className="alcohol-menu-box-price">100,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Martini Rosso </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">5,00р</h2>
                <h2 className="alcohol-menu-box-price">100,00р</h2>
              </div>
            </div>
          </div>
          <div className="alcohol-menu__subitem">
            <span className="food-menu__subitem-title">Текила</span>
            <div className="volume">
              <span>50мл</span>
              <span> 0,5л</span>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Olmeca Gold </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">10,00р</h2>
                <h2 className="alcohol-menu-box-price">140,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Olmeca Silver </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">9,00р</h2>
                <h2 className="alcohol-menu-box-price">126,00р</h2>
              </div>
            </div>
          </div>
          <div className="alcohol-menu__subitem">
            <span className="food-menu__subitem-title">Ликеры, настойки</span>
            <div className="volume">
              <span> 0,5л</span>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Sambuca </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">8,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Cointreau </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">8,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Jagermeister </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">11,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Becherovka </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">7,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Malibu </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">7,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Kahlua </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">8,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Абсент Xenta </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">9,00р</h2>
              </div>
            </div>
          </div>
          <div className="alcohol-menu__subitem">
            <span className="food-menu__subitem-title">Игристые вина</span>
            <div className="volume">
              <span> 0,5л</span>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Советское шампанское </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">25,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">MARTINI ASTI </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">30,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Baron d’Arignac </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">70,00р</h2>
              </div>
            </div>
          </div>

          <div className="alcohol-menu__subitem">
            <span className="food-menu__subitem-title">Вино</span>
            <div className="volume">
              <span> 0,5л</span>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">Jardin De La Taur </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">45,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">
                Jardin De La Taur Grenache
              </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">45,00р</h2>
              </div>
            </div>
            <div className="alcohol-menu-box">
              <h2 className="alcohol-menu-box-name">
                Jardin De La Taur Grenache 45,00р
              </h2>
              <div className="alcohol-menu-subbox">
                <h2 className="alcohol-menu-box-price">70,00р</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="food-menu-item">
          <div className="food-menu__subitem">
            <span className="food-menu__subitem-title">Пиво</span>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Туборг</h2>
                <h2 className="food-menu-box-price">0,5л 6р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Карлсбер</h2>
                <h2 className="food-menu-box-price"> 0,45л 6р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Балтика 7</h2>
                <h2 className="food-menu-box-price"> 0,47л 6р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">
                  Балтика 0 (безалкогольное)
                </h2>
                <h2 className="food-menu-box-price"> 0,47л 6р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Аливария Белое золото</h2>
                <h2 className="food-menu-box-price"> 0,5л 6р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">
                  Аливария Портер (темное)
                </h2>
                <h2 className="food-menu-box-price"> 0,45л 6р</h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Kronenbourg 1664 Blanc</h2>
                <h2 className="food-menu-box-price">0,47л 6р </h2>
              </div>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Garag</h2>
                <h2 className="food-menu-box-price"> 0,40л 6р </h2>
              </div>
            </div>
          </div>

          <div className="food-menu__subitem">
            <span className="food-menu__subitem-title">Коктейльная карта</span>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Виски-кола </h2>
                <h2 className="food-menu-box-price">10,00р</h2>
              </div>
              <span className="food-menu-box-description">
                виски, кола, лайм, лёд
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Burn водка </h2>
                <h2 className="food-menu-box-price"> 10,00р </h2>
              </div>
              <span className="food-menu-box-description">
                водка, берн, лёд
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Джин-тоник</h2>
                <h2 className="food-menu-box-price"> 10,00р</h2>
              </div>
              <span className="food-menu-box-description">
                джин, тоник, лайм, лёд огурец свежий, авокадо, семга с/с, киноа,
                салатная заправка, микс зелени
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Куба-либре </h2>
                <h2 className="food-menu-box-price">10,00р</h2>
              </div>
              <span className="food-menu-box-description">
                ром темный, кола, лайм, лёд
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Голубая лагуна </h2>
                <h2 className="food-menu-box-price">10,00р</h2>
              </div>
              <span className="food-menu-box-description">
                водка. сироп Блю кюрасао, спрайт, апельсин, лёд
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Отвёртка </h2>
                <h2 className="food-menu-box-price">10,00р</h2>
              </div>
              <span className="food-menu-box-description">
                водка, апельсиновый сок, лёд
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Текила санрайз </h2>
                <h2 className="food-menu-box-price">15,00р</h2>
              </div>
              <span className="food-menu-box-description">
                текила, апельсиновый сок, сироп гренадин, лёд
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Лонг Айленд </h2>
                <h2 className="food-menu-box-price">19,00р </h2>
              </div>
              <span className="food-menu-box-description">
                ром, водка, джин, текила, куантро, кола, лёд
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Секс на пляже </h2>
                <h2 className="food-menu-box-price">15,00р</h2>
              </div>
              <span className="food-menu-box-description">
                апельсиновый сок, водка, куантро, клюквенный сок, лёд
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Ягер бомба </h2>
                <h2 className="food-menu-box-price">15,00р</h2>
              </div>
              <span className="food-menu-box-description">
                егермейстер, берн, лёд
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Пина Колада </h2>
                <h2 className="food-menu-box-price">15,00р</h2>
              </div>
              <span className="food-menu-box-description">
                ром белый, малибу, ананасовый сок, сливки, лёд
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Мартини Айс </h2>
                <h2 className="food-menu-box-price"> 15,00р</h2>
              </div>
              <span className="food-menu-box-description">
                мартини, грейпфрутовый сок, лёд
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Мохито </h2>
                <h2 className="food-menu-box-price">19,00р</h2>
              </div>
              <span className="food-menu-box-description">
                ром белый, спрайт, лайм, мята, лёд
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Апероль Шприц </h2>
                <h2 className="food-menu-box-price">19,00р </h2>
              </div>
              <span className="food-menu-box-description">
                куантро, шампанское, тоник, сироп апероль, апельсин
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Мартини Рояль </h2>
                <h2 className="food-menu-box-price">19,00р</h2>
              </div>
              <span className="food-menu-box-description">
                мартини, шампанское, сок лайм, мята, лёд
              </span>
            </div>
            <div className="food-menu-box">
              <div className="food-menu-subbox">
                <h2 className="food-menu-box-title">Ламбада </h2>
                <h2 className="food-menu-box-price">17,00р</h2>
              </div>
              <span className="food-menu-box-description">
                шампанское, ром светлый, сироп Блю Кюрасао, грейпфрут, лёд
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
