import React from 'react';
import Image from 'next/image';
import styles from './media-item.module.css';

const MediaItem = ({ item }) => {
    if (item.type === "video") {
        return (
            <video 
                width={item.width}
                height={item.height}
                autoPlay
                loop
                muted
                playsInline
                style={{ objectFit: 'cover' }}
                className={styles.mediaItem}
            >
                <source src={item.src} type="video/webm" />
                <source src={item.mp4Src} type="video/mp4" />
            </video>
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