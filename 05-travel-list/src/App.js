const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "charger", quantity: 12, packed: false },
];

export default function App() {
    return <div className="app">
        <Logo />
        <Form />
        <PackingList />
        <Stats />
    </div>
}

function Logo(){
   return <h1>🌳 Far Away 💼</h1> 
}

function Form(){
    
    function handleSubmit(event){
        event.preventDefault();
    }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip? 😻</h3>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <input type="text" placeholder="item.."/>
            <button>Add</button>
        </form>
     )
}

function PackingList(){
    return (
        <div className="list">
        <ul>
            {initialItems.map((item) => (
                <Item item={item} />
            ))}
       </ul>
       </div>
    )
}

function Item ({ item }) {
    return (
        <li> 
            <span style = {item.packed ? {textDecoration: 'line-through'} : {}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    )
}

function Stats(){
    return <footer className="stats">
       <em>
            💼 you have X item on your list, and you already packed X (X%)
        </em>
    </footer>
}