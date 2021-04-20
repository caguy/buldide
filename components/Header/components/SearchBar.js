import SearchIcon from "./SearchIcon";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Rechercher..."
        className="bg-black-light pt-1 leading-6 pl-8 pr-4 text-sm rounded-md border border-white border-opacity-10 hover:border-opacity-40 text-white"
        style={{ width: "24em" }}
      />
      <div
        style={{
          position: "absolute",
          top: 6,
          left: 6,
          transform: "scale(0.8)",
        }}
      >
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
