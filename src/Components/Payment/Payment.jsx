// import "./Payment.scss";
// import { useNavigate, useLocation } from "react-router-dom";
// export default function Payment() {
//   const navigates = useNavigate();
//   const location = useLocation();
//   const { allCount } = location.state;
//   const handlePayment = () => {
//     navigates("/booking");
//   };

//   const handlePaymentClick = () => {
//     navigates("/paymentsucsful");
//   };

//   return (
//     <div className="payment-page">
//       <div className="payment-btn-back">
//         <button className="payment-btn" onClick={handlePayment}>
//           <img src="../../../public/arrow-left.svg" alt="#" />
//         </button>
//       </div>
//       <div className="payment-page-glavitem">
//         <div className="payment-page__leftitem">
//           <div className="payment-page__leftitem-title">
//             <h2>Онлайн-оплата</h2>
//             <img src="../../../public/payment-card.svg" alt="#" />
//           </div>

//           <form className="payment-page__leftitem-form">
//             <div className="payment-page__leftitem-form__item glavitem">
//               <label>Номер карты:</label>
//               <input type="number" />
//             </div>
//             <div className="subblock">
//               <div className="payment-page__leftitem-form__item subitem1">
//                 <label>Срок действия</label>
//                 <input type="number" />
//               </div>
//               <div className="payment-page__leftitem-form__item subitem2">
//                 <label>CVC:</label>
//                 <input type="number" />
//               </div>
//             </div>
//           </form>
//           <div
//             className="payment-page__leftitem-btn"
//             onClick={() => handlePaymentClick()}
//           >
//             <button>
//               <span>Оплатить бронь на {allCount} р </span>
//             </button>
//           </div>
//         </div>
//         <div className="payment-page__rightitem">
//           <img src="../../../public/payment-method.svg" alt="#" />
//           <span>
//             Платеж безопасен. Мы не храним данные карт, все операции проводит
//             BePaid - платежная система, серфицированная по международному
//             стандарту безопастности PCI DSS.
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useNavigate, useLocation } from "react-router-dom";
import "./Payment.scss";
import { useState, useEffect } from "react";

export default function Payment() {
  const navigate = useNavigate();

  const location = useLocation();
  const {
    allCount,
    adultsCount,
    childrenCount,
    dateRange,
    selectedCard,
    name,
  } = location.state || {};
  const [cvc, setCvc] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [validityPeriod, setValidityPeriod] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setIsFormValid(
      cvc.trim() !== "" &&
        cardNumber.trim() !== "" &&
        validityPeriod.trim() !== ""
    );
  }, [cvc, cardNumber, validityPeriod]);
  if (!allCount) {
    return (
      <div className="payment-page">
        <div>Ошибка: нет данных для оплаты.</div>
      </div>
    );
  }

  const handlePayment = () => {
    navigate("/booking");
  };

  const handlePaymentClick = () => {
    if (!isFormValid) {
      setShowModal(true);
      return;
    }
    navigate("/paymentsucsful", {
      state: {
        allCount,
        adultsCount,
        childrenCount,
        dateRange,
        selectedCard,
        name,
      },
    });
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="payment-page">
      <div className="payment-btn-back">
        <button className="payment-btn" onClick={handlePayment}>
          <img src="/arrow-left.svg" alt="#" />
        </button>
      </div>
      <div className="payment-page-glavitem">
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={handleCloseModal}>
                &times;
              </span>
              <h2>Заполните все поля</h2>
              <p>
                Пожалуйста, заполните все обязательные поля, чтобы продолжить.
              </p>
            </div>
          </div>
        )}
        <div className="payment-page__leftitem">
          <div className="payment-page__leftitem-title">
            <h2>Онлайн-оплата</h2>
            <img src="/payment-card.svg" alt="#" />
          </div>
          <form className="payment-page__leftitem-form">
            <div className="payment-page__leftitem-form__item glavitem">
              <label>Номер карты:</label>
              <input
                type="number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="subblock">
              <div className="payment-page__leftitem-form__item subitem1">
                <label>Срок действия</label>
                <input
                  type="number"
                  value={validityPeriod}
                  onChange={(e) => setValidityPeriod(e.target.value)}
                />
              </div>
              <div className="payment-page__leftitem-form__item subitem2">
                <label>CVC:</label>
                <input
                  type="number"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </div>
            </div>
          </form>
          <div
            className="payment-page__leftitem-btn"
            onClick={handlePaymentClick}
          >
            <button>
              <span>Оплатить бронь на {allCount} р </span>
            </button>
          </div>
        </div>
        <div className="payment-page__rightitem">
          <img src="/payment-method.svg" alt="#" />
          <span>
            Платеж безопасен. Мы не храним данные карт, все операции проводит
            BePaid - платежная система, серфицированная по международному
            стандарту безопастности PCI DSS.
          </span>
        </div>
      </div>
    </div>
  );
}
