"use client";

import styles from './multicolumn.module.css';
import MediaItem from '../media-item';
import { useEffect, useState } from 'react';

const MultiColumn = ({ images }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 428);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className={styles.container}>
            {images.map((item, index) => {
                const aspectRatio = item.width / item.height;
                return (
                    <div 
                        key={index} 
                        className={styles.imageWrapper}
                        style={!isMobile ? { flex: aspectRatio } : undefined}
                    >
                        <MediaItem item={item} />
                    </div>
                );
            })}
        </div>
    );
};

export default MultiColumn;