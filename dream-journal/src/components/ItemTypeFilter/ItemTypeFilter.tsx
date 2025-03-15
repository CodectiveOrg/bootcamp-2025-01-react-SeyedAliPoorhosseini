import { ReactNode } from "react";

function ItemTypeFilter(): ReactNode {
  return (
    <select>
      <option value="">ALL</option>
      <option value="">Filter 1</option>
      <option value="">Filter 2</option>
    </select>
  );
}

export default ItemTypeFilter;
