import styles from './Card.module.scss';

function Card({ title, imageUrl, price }) {

    const onClickButton = () => {
        alert(`${title.substring(0, 20)}... - ${price} lei`)
    };

    return (
        <div className={styles.item}>
            <div className={styles.item__imgs}>
                <img src="../img/icons/fav_icon.svg" alt="Add to fav icon" />
                <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            </div>
            <h3>{title}</h3>
            <div className="d-flex align-center mt-15 justify-between">
                <div className="item__price d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} lei</b>
                </div>
                <button onClick={onClickButton} className="d-flex justify-center align-center">
                    <img src="../img/icons/add.svg" alt="Add icon" />
                </button>
            </div>
        </div>
    )
}

export default Card;