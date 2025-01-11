"use client";

import styles from './twocolumn.module.css';
import MediaItem from '../media-item';

const TwoColumn = ({ images }) => {
    return (
        <div className={styles.container}>
            {images.map((item, index) => (
                <div key={index} className={styles.column}>
                    <MediaItem item={item} />
                </div>
            ))}
        </div>
    );
};

export default TwoColumn;