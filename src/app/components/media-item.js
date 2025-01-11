import React from 'react';
import Image from 'next/image';
import styles from './media-item.module.css';

const MediaItem = ({ item }) => {
    if (item.type === "video") {
        return (
            <video 
                src={item.src}
                width={item.width}
                height={item.height}
                autoPlay
                loop
                muted
                playsInline
                style={{ objectFit: 'cover' }}
                className={styles.mediaItem}
            />
        );
    }

    return (
        <Image 
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            style={{ objectFit: 'cover' }}
            className={styles.mediaItem}
        />
    );
};

export default MediaItem; 