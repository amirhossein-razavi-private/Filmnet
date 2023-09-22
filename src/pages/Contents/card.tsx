import React from 'react'
import styles from './styles.module.scss';
import imdb_img from '../../assets/Images/imdb-icon.svg';
import { IContentCategories } from '../../types/interfaces';

const Card = React.forwardRef<HTMLLIElement, any>(({ data }, ref) => {
    const { categories, cover_image: { path }, page_title, year, duration = '', imdb_rank_percent } = data;

    const genreList = categories.find((c: IContentCategories) => c.type === 'genre' && c.items) || null;
    const genre = genreList ? genreList.items.map((m: { title: string }) => m.title) : [];

    const territoryList = categories.find((c: IContentCategories) => c.type === 'territory' && c.items) || null;
    const territory = territoryList ? territoryList.items.map((m: { title: string }) => m.title) : [];

    const arr_duration = duration.split(':');
    const h_duration = +arr_duration[0] || 0;
    const m_duration = +arr_duration[1] || 0;

    const contentBody = (
        <>
            <div className={styles.card_image_wrapper}>
                <img
                    src={path}
                    alt={page_title}
                    loading="lazy"
                    className={styles.card_img}
                />
                <div className={styles.info_wrapper}>
                    <div className={styles.info_box}>

                        {genre && <p className={styles.info_txt}>{genre.toString()}</p>}

                        {territory && <p className={styles.info_txt}>{`${year} / ${territory.toString()}`}</p>}

                        {(h_duration || m_duration) ? (
                            <p className={styles.info_txt}>
                                {`${h_duration ? `${h_duration} ساعت و` : ''} ${m_duration ? `${m_duration} دقیقه` : ''}`}
                            </p>
                        ) : ''}

                        {imdb_rank_percent > 0 && (
                            <p className={styles.imdb_txt}>
                                <img src={imdb_img} width={25} />
                                <span>{imdb_rank_percent / 10}</span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <p title={page_title} className={styles.card_title}>{page_title}</p>
        </>
    )

    const content = ref
        ? <li ref={ref} className={styles.card}>{contentBody}</li>
        : <li className={styles.card}>{contentBody}</li>

    return content
})

export default Card;