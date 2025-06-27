import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 600,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 1100,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 1400,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 1200,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 1500,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 1800,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}  

function Header() {
  return (
  <header className="header">
    <h1>Fast Pizza co.</h1>
  </header>
  )
}

function Menu() {
  const numPizzas = pizzaData.length;
  
  return (
    <main className="menu">
    <h2>Our Menu</h2>

   {numPizzas > 0 ? (

   <>
    <p>
      Note that the development build is not optimized.
      To create a production build.
    </p>

    <ul class="pizzas">
      {pizzaData.map((pizza) => (
        <Pizza pizzaObj = {pizza}/>
      ))}
    </ul>
   </>
   ) : (
    <p>We're still working on our menu. please come back later..</p>
   )}
  </main>
  )
}

function Pizza({pizzaObj}){
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD-OUT" : pizzaObj.price}</span>
      </div>
    </li>
  )
}

function Footer() {
  const hour  = new Date().getHours();
  const openHour = 8; 
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen

  )
  return (
  <footer className="footer">
    {isOpen ? (
      <Order closeHour={closeHour}  openHour={openHour}/>
    ) : (
      <p>
        We're closed. Come back tomorrow!
      </p>
    )}
  </footer>
  );
}

function Order({closeHour, openHour}) {
  return (
    <div class="order">
      <p>
        We're open from {openHour}:00 untill {closeHour}:00. Come visit us or order online...
      </p>
      <button class="btn">Order</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
