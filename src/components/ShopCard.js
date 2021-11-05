function ShopCard({ card }) {
  return (
    <div className="cardWrap">
      <div className="card_header">
        <h3>{card.name}</h3>
        <p>{card.color}</p>
      </div>
      <img className="card_img" src={card.img} alt={card.name} />
      <div className="card_footer">
        <p>${card.price}</p>
        <button className="add">ADD TO CARD</button>
      </div>
    </div>
  );
}

export default ShopCard;
