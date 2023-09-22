import useContents from "./useContents";
import Card from "./card";
import styles from './styles.module.scss';
import Loader from '../../shared/Components/Loader';
import { IContent } from '../../types/interfaces';

const Contents = () => {
    const { data, loading, lastItemRef } = useContents();
    return (
        <div className={styles.main}>
            <ul className={styles.content_list}>
                {data.map((item: IContent, idx: number) => (
                    (data.length === idx + 1) ? (
                        <Card ref={lastItemRef} key={item.id} data={item} />
                    ) : <Card key={item.id} data={item} />
                ))}
            </ul>
            <div className={styles.loader}>
                <Loader loading={loading} />
            </div>
        </div>
    )
}

export default Contents;
