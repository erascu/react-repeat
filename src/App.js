import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';

const arr = [
  { id: 1, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 990 },
  { id: 2, title: 'Мужские Кроссовки Nike Air Max 270', price: 1450 },
  { id: 3, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 1100 },
  { id: 4, title: 'Кроссовки Puma X Aka Boku Future Rider', price: 1290 }
];

const cartArr = [
  { id: 1, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 990 },
  { id: 4, title: 'Кроссовки Puma X Aka Boku Future Rider', price: 1290 }
];

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Cart cartItems={cartArr} />
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
                {arr.map((item) => <Card key={item.id} title={item.title} price={item.price} imageUrl={`./img/items/${item.id}.jpg`} />)}
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
