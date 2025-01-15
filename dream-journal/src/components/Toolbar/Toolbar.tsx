import ItemTypeFilter from "../ItemTypeFilter/ItemTypeFilter";
import SearchBox from "../SearchBox/SearchBox";

function Toolbar() {
  return (
    <div className="toolbar">
      <SearchBox />
      <ItemTypeFilter />
    </div>
  );
}
export default Toolbar;
