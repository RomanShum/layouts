import ShopItem from "./ShopItem";

function ListView({ items }) {
  return (
    <div className="listView">
      {items.map((item, i) => (
        <ShopItem key={i} item={item} />
      ))}
    </div>
  );
}

export default ListView;
