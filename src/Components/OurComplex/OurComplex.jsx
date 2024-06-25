import "./OurComplex.scss";

export default function OurComplex() {
  return (
    <div className="complex">
      <div className="complex-description">
        <span className="complex-title">Наш комплекс</span>
        <span className="complex-subtitle complex-subtitle1">
          представит вам не только комфортные условия проживани, но и активное
          врём провождение на нашей территории.
        </span>
        <span className="complex-subtitle">
          Подогореваемые детский и взрослый бассейн станут неотъемливой часть
          вашего отдыха.
        </span>
        <span className="complex-subtitle">
          Отдых в парке отеля «Жемчужный» станет ещё более превосходным
          благодаря нашему уютному кафе, стильному бару и роскошной кальянной.
        </span>
        <span className="complex-subtitle">
          Детская площадка в парке отеля «Жемчужный» - место, где дети могут
          весело играть и создавать незабываемые воспоминания.
        </span>
      </div>
      <img className="complex-img" src="../../../public/complex.svg" alt="#" />
    </div>
  );
}
