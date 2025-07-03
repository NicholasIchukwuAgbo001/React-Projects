import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function HandleSubmit(e) {
        e.preventDefault();
        if(!query) return;
        navigate(`/order/${query}`);
        setQuery("");
    }

  return (
    <form onSubmit={HandleSubmit}>
        <input 
            type="text"  
            placeholder='Search Order Number' 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-full px-4 py-2 text-sm placeholder:text-stone-400 w-28 sm:w-64"
        />
    </form>
  )
}

export default SearchOrder;
