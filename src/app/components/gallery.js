"use client";

import { useEffect, useRef, useState } from 'react';
import styles from "./gallery.module.css";
import MediaItem from './media-item';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';

const Gallery = () => {
    const galleryRef = useRef(null);
    const wrapperRef = useRef(null);
    const lenisRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        lenisRef.current = new Lenis({
            wrapper: wrapperRef.current,
            content: galleryRef.current,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
            wheelMultiplier: 1,
        });

        function raf(time) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenisRef.current?.destroy();
        };
    }, [isHovered]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div 
            className={styles.galleryWrapper} 
            ref={wrapperRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div 
                ref={galleryRef} 
                className={styles.gallery}
            >
                {/* Two Column Section - Sundae School */}
                <div className={styles.twoColumn}>
                    <div className={styles.mediaWrapper}>
                        <video 
                            width={450}
                            height={282}
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ objectFit: 'cover' }}
                        >
                            <source src="img/homepage/sundae_1.webm" type="video/webm" />
                            <source src="img/homepage/sundae_1.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className={styles.mediaWrapper}>
                        <Image 
                            src="img/homepage/sundae_2.jpg"
                            alt="Sundae School"
                            width={450}
                            height={282}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>

                {/* One Column Section - Tome */}
                <div className={styles.oneColumn}>
                    <div className={styles.mediaWrapper}>
                        <video 
                            width={921}
                            height={518}
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ objectFit: 'cover' }}
                        >
                            <source src="img/homepage/tome-presentation-1.webm" type="video/webm" />
                            <source src="img/homepage/tome-presentation-1.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* Multi Column Section */}
                <div className={styles.multiColumn}>
                    <div className={styles.mediaWrapper}>
                        <Image 
                            src="img/homepage/image-04@2x.png"
                            alt="Gallery Image 4"
                            width={666}
                            height={692}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.mediaWrapper}>
                        <Image 
                            src="img/homepage/image-05@2x.png"
                            alt="Gallery Image 5"
                            width={430}
                            height={692}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.mediaWrapper}>
                        <Image 
                            src="img/homepage/image-06@2x.png"
                            alt="Gallery Image 6"
                            width={430}
                            height={692}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>

                {/* Continue with other sections... */}
                {/* You can copy and adjust the patterns above for the remaining content */}

            </div>
        </div>
    );
};

export default Gallery;