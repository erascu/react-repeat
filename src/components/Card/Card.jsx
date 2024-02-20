import React from 'react';

import styles from './Card.module.scss';

function Card({ title, imageUrl, price }) {
    const [favActive, setFavActive] = React.useState(false);
    const [plusActive, setPlusActive] = React.useState(false);

    const onClickPlus = () => {
        // alert(`${title.substring(0, 20)}... - ${price} lei`);
        setPlusActive(!plusActive);
    };

    const onClickFav = () => {
        // alert(`Item "${title.substring(0, 20)}..." added to Favourites!`);
        setFavActive(!favActive);
    }

    return (
        <div className={styles.item}>
            <div className={styles.item__block}>
                <button onClick={onClickFav}>
                    <img src={favActive ? "../img/icons/fav_active.svg" : "../img/icons/fav_icon.svg"} alt="Add to fav icon" />
                </button>
                <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            </div>
            <h3>{title}</h3>
            <div className="d-flex align-center mt-15 justify-between">
                <div className="item__price d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} lei</b>
                </div>
                <button onClick={onClickPlus} className="d-flex justify-center align-center">
                    <img src={plusActive ? "../img/icons/add_active.svg" : "../img/icons/add.svg"} alt="Add icon" />
                </button>
            </div>
        </div>
    )
}

export default Card;