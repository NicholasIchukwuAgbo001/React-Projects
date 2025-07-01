import { useState } from "react";

function SearchOrder() {
    const [query, setQuery] = useState("")

    function handleSearch(e) {
        e.preventDefault();
    }

  return (
    <form className="onClick={handleSearch}">
        <input type="text"  placeholder='Search Order Number' value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
    </form>
  )
}

export default SearchOrder;
