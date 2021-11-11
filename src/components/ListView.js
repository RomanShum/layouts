import ShopItem from "./ShopItem";
import { v1 as uuidv1 } from "uuid";

function ListView({ items }) {
  return (
    <div className="listView">
      {items.map((item) => (
        <ShopItem key={uuidv1()} item={item} />
      ))}
    </div>
  );
}

export default ListView;
