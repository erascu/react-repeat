import styles from './Header.module.scss';

function Header({ onClickCart }) {
    return (
        <header className={styles.header}>
            <div className={`${styles.header__block} d-flex justify-between align-center`}>
                <div className={`${styles.header__logo} d-flex align-center`}>
                    <img width={40} height={40} src="../img/logo.png" alt="Logo icon" />
                    <div className={styles.header__logoText}>
                        <h5>REACT SNEAKERS</h5>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div className={styles.header__nav}>
                    <nav>
                        <ul className="d-flex">
                            <li onClick={onClickCart}>
                                <img src="../img/cart.svg" alt="Cart icon" />
                                <p>0 lei</p>
                            </li>
                            <li>
                                <img src="../img/fav.svg" alt="Favorite icon" />
                                <p>Закладки</p>
                            </li>
                            <li>
                                <img src="../img/profile.svg" alt="Profile icon" />
                                <p>Профиль</p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;