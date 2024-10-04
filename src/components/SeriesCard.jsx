import styles from './Netflix.module.css'
import styled from "styled-components";

export const SeriesCard = ({ data }) => {

    const { img_url, name, rating, description, genre, cast, watch_url } = data;

    const Buttonthapa=styled.button`
        padding: 1.2rem 2.4rem;
        border: none;
        font-Size: 1.6rem ;
       background-color: ${(props) => props.rating > 8.5 ? "#7dcea0": "#f7dc6f"};
        color: var(--btn-color);
        font-Weight:bold;
      
`
    // const btn_style = { };

    const Rating=styled.h3`
        font-size: 1.6rem;
        color:#7dcea0;
        text-transform:capitalize;

    `;

    const ratingclass=rating > 8.5 ? styles.super_hit : styles.average;

    return (

        <li className={styles.Card}>
            <div>
                <img
                    src={
                        img_url}
                    // width="100%"
                    height="50%"
                />
            </div>
            <div className={styles['card-content']} />
            <h2>Name: {
                name}</h2>
            <Rating>Rating:

                <span className={`${styles.rating} ${ratingclass}`}>{rating}

                </span></Rating>
            <p className='text-3xl font-bold underline'>Summary:{
                description}</p>
            <p>Genre:{
                genre}</p>
            <p>Cast:{
                cast}</p>
            <a href={
                watch_url}>
                <Buttonthapa rating={rating}>Watch Now</Buttonthapa>
                {/* <button style={btn_style}>watch Now</button> */}
            </a>
        </li>
    )
}