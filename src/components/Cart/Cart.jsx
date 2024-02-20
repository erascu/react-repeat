import CartCard from '../CartCard/CartCard';
import styles from './Cart.module.scss';

function Cart(cartItems) {
    return (
        <div className={styles.overlay} hidden>
            <div className={styles.drawer}>
                <div className={styles.drawer__top}>
                    <div className={styles.drawer__title}>
                        <h2>Корзина</h2>
                        <button>
                            <img src="../img/icons/close_btn.svg" alt="Close icon" />
                        </button>
                    </div>
                    {/* <div className={styles.drawer__item}>
                        <div className={styles.drawer__left}>
                            <img width={70} src="../img/items/2.jpg" alt="Sneakers" />
                            <div className={styles.drawer__itemInfo}>
                                <h3>Мужские Кроссовки Nike Air Max 270</h3>
                                <p>1350 lei</p>
                            </div>
                        </div>
                        <button>
                            <img src="../img/icons/close_btn.svg" alt="Close icon" />
                        </button>
                    </div>
                    <div className={styles.drawer__item}>
                        <div className={styles.drawer__left}>
                            <img width={70} src="../img/items/4.jpg" alt="Sneakers" />
                            <div className={styles.drawer__itemInfo}>
                                <h3>Кроссовки Puma X Aka Boku Future Rider</h3>
                                <p>1100 lei</p>
                            </div>
                        </div>
                        <button>
                            <img src="../img/icons/close_btn.svg" alt="Close icon" />
                        </button>
                    </div> */}
                    {/* <CartCard /> */}
                    {cartItems.cartItems.map(item => <CartCard key={item.id} title={item.title} price={item.price} imageUrl={`./img/items/${item.id}.jpg`} />)}
                </div>
                <div className={styles.drawer__bottom}>
                    <div className="d-flex justify-between mb-20">
                        <p>Итого:</p>
                        <div className={styles.summ__line}></div>
                        <b>1875 lei</b>
                    </div>
                    <div className="d-flex justify-between mb-25">
                        <p>Налог 5%:</p>
                        <div className={styles.summ__line}></div>
                        <b>93.75 lei</b>
                    </div>
                    <button className="d-flex justify-center align-center">
                        <p>Оформить заказ</p>
                        <img src="../img/icons/checkout_arrow.svg" alt="Checkout arrow" />
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Cart;