import React from 'react';

import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';
import Skeleton from './components/Skeleton/Skeleton';

// const arr = [
//   { id: 1, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 990, imageUrl: "/img/items/1.jpg" },
//   { id: 2, title: 'Мужские Кроссовки Nike Air Max 270', price: 1450, imageUrl: "/img/items/2.jpg" },
//   { id: 3, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 1100, imageUrl: "/img/items/3.jpg" },
//   { id: 4, title: 'Кроссовки Puma X Aka Boku Future Rider', price: 1290, imageUrl: "/img/items/4.jpg" }
// ];

// const cartArr = [
//   { id: 1, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 990 },
//   { id: 4, title: 'Кроссовки Puma X Aka Boku Future Rider', price: 1290 }
// ];

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      const resp = await fetch('https://43d671919a424718.mokky.dev/items');
      const data = await resp.json();
      setItems(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => ([...prev, obj]));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Header onClickCart={() => setCartOpen(true)} />
        {cartOpen && <Cart items={cartItems} onClose={() => setCartOpen(false)} />}
        <main className="main">
          <div className="items">
            <div className="items__block">
              <div className="title__search">
                <h1>Все кроссовки</h1>
                <div className="search__block">
                  <img src="../img/search.svg" alt="Search icon" />
                  <input placeholder="Поиск..." />
                </div>
              </div>
              <div className="item__row d-flex">
                {isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index} />) : items.map(item => <Card key={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl} onPlus={obj => onAddToCart(obj)} />)}
                {/* {arr.map((item, id) => <Card key={id} title={item.name} price={item.price} imageUrl={`./img/items/${id + 1}.jpg`} />)} */}
                {/* <Card title='Мужские Кроссовки Nike Blazer Mid Suede' price={990} imageUrl='./img/items/1.jpg' />
                <Card title='Мужские Кроссовки Nike Air Max 270' price={1499} imageUrl='./img/items/2.jpg' />
                <Card title='Мужские Кроссовки Nike Blazer Mid Suede' price={1100} imageUrl='./img/items/3.jpg' />
                <Card title='Кроссовки Puma X Aka Boku Future Rider' price={1250} imageUrl='./img/items/4.jpg' /> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
