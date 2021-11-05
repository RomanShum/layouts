function ShopItem({ item }) {
  return (
    <div className="list">
      <img className="listImg" src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.color}</p>
      <p class="price">${item.price}</p>
      <button className="add">ADD TO CARD</button>
    </div>
  );
}

export default ShopItem;
