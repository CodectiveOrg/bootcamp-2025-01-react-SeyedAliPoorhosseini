import { ReactNode } from "react";

function ItemTypeFilter(): ReactNode {
  return (
    <select>
      <option value="" key="">
        ALL
      </option>
      <option value="" key="">
        Filter 1
      </option>
      <option value="" key="">
        Filter 2
      </option>
    </select>
  );
}

export default ItemTypeFilter;
