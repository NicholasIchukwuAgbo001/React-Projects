import { useState } from "react";

function SearchOrder() {
    const [query, setQuery] = useState("")

    function HandleSubmit(e) {
        e.preventDefault();
    }

  return (
    <form onSubmit={HandleSubmit}>
        <input 
            type="text"  
            placeholder='Search Order Number' 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    </form>
  )
}

export default SearchOrder;
