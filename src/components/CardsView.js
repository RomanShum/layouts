import ShopCard from "./ShopCard";

function CardsView({ cards }) {
  return (
    <div className="cardsView">
      {cards.map((card, i) => (
        <ShopCard key={i} card={card} />
      ))}
    </div>
  );
}

export default CardsView;
