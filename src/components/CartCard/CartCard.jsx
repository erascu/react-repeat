import styles from './CartCard.module.scss';

function CartCard({ title, price, imageUrl }) {
    return (
        <div className={styles.drawer__item}>
            <div className={styles.drawer__left}>
                <img width={70} src={imageUrl} alt="Sneakers" />
                <div className={styles.drawer__itemInfo}>
                    <h3>{title}</h3>
                    <p>{price} lei</p>
                </div>
            </div>
            <button> {/* onClick={e => e.target.parentElement.previousSibling.parentElement.remove()} */}
                <img src="../img/icons/close_btn.svg" alt="Close icon" />
            </button>
        </div>

    );
}

export default CartCard;