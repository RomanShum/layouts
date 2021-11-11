import ShopCard from "./ShopCard";
import { v1 as uuidv1 } from "uuid";

function CardsView({ cards }) {
  return (
    <div className="cardsView">
      {cards.map((card) => (
        <ShopCard key={uuidv1()} card={card} />
      ))}
    </div>
  );
}

export default CardsView;
