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
        />
    </form>
  )
}

export default SearchOrder;
