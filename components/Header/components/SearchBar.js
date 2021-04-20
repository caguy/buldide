import SearchIcon from "./SearchIcon";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Rechercher..."
        className="hidden lg:inline-block bg-black-light pt-1 leading-6 pl-8 pr-4 text-sm rounded-md border border-white border-opacity-10 hover:border-opacity-40 text-white"
        style={{ width: "24em" }}
      />
      <div
        className="lg:absolute lg:transform lg:scale-90"
        style={{ top: 6, left: 6 }}
      >
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
