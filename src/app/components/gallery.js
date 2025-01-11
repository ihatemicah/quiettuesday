"use client";

import styles from "./gallery.module.css";
import TwoColumn from "./gallery-components/twocolumn";
import OneColumn from "./gallery-components/onecolumn";
import MultiColumn from "./gallery-components/multicolumn";
import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';

const galleryItems = {
    twoColumn: [
        [
            { 
                src: "./img/homepage/sundae_1.webm", 
                alt: "Animation 1", 
                width: 450, 
                height: 282,
                type: "video"
            },
            { 
                src: "./img/homepage/sundae_2.jpg", 
                alt: "Animation 1", 
                width: 450, 
                height: 282,
                type: "image"
            },
        ],
        [
            { 
                src: "./img/homepage/evde.webm", 
                alt: "Animation 2", 
                width: 450, 
                height: 282,
                type: "video"
            },
            { 
                src: "./img/homepage/evde_image.png", 
                alt: "Animation 1", 
                width: 450, 
                height: 282,
                type: "image"
            },
        ],
        [
            { 
                src: "./img/homepage/handheld-1.png", 
                alt: "Animation 2", 
                width: 450, 
                height: 282,
                type: "image"
            },
            { 
                src: "./img/homepage/handheld-2.png", 
                alt: "Animation 1", 
                width: 450, 
                height: 282,
                type: "image"
            },
        ],
        // Add more pairs for additional TwoColumn components
    ],
    oneColumn: [
        [
            { 
                src: "./img/homepage/tome-presentation-1.webm", 
                alt: "Hero Animation", 
                width: 921, 
                height: 518,
                type: "video"
            },
        ],
        [
            { 
                src: "./img/homepage/tyb.webm", 
                alt: "Hero Animation", 
                width: 921, 
                height: 518,
                type: "video"
            },
        ],
        [
            { 
                src: "./img/homepage/contra.webm", 
                alt: "Hero Animation", 
                width: 921, 
                height: 518,
                type: "video"
            },
        ],
        [
            { 
                src: "./img/homepage/doormat.webm", 
                alt: "Hero Animation", 
                width: 921, 
                height: 518,
                type: "video"
            },
        ],
        // Add more single-image arrays for additional OneColumn components
    ],
    
    
    multiColumn: [
        [
            { 
                src: "./img/homepage/image-04@2x.png", 
                alt: "Image 4", 
                width: 666, 
                height: 692,
                type: "image"
            },
            { 
                src: "./img/homepage/image-05@2x.png", 
                alt: "Image 5", 
                width: 430, 
                height: 692,
                type: "image"
            },
            { 
                src: "./img/homepage/image-06@2x.png", 
                alt: "Image 5", 
                width: 430, 
                height: 692,
                type: "image"
            },
            // { 
            //     src: "/video/example.webm",
            //     alt: "Video 6",
            //     width: 666,
            //     height: 692,
            //     type: "video"
            // },
            // Add more images or videos as needed
        ],
    ]
    
};

const Gallery = ({ images = galleryItems }) => {
    const galleryRef = useRef(null);
    const wrapperRef = useRef(null);
    const lenisRef = useRef(null);
    const autoScrollAnimationRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const contentHeight = galleryRef.current.scrollHeight;
        
        // Set up Lenis
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

        // RAF for Lenis
        function raf(time) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenisRef.current?.destroy();
            clearTimeout(window.scrollTimeout);
        };
    }, [isHovered]);

    const handleMouseEnter = () => {
        console.log('Mouse entered'); // Debug log
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        console.log('Mouse left'); // Debug log
        setIsHovered(false);
    };
// creation
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
                <TwoColumn images={[
                    images.twoColumn[0][0],  // First item (sundae_1.webm)
                    images.twoColumn[0][1]   // Second item (sundae_2.jpg)
                ]} />

                <OneColumn images={images.oneColumn[0]} />

                {images.multiColumn.map((imageArray, index) => (
                    <MultiColumn key={`multi-${index}`} images={imageArray} />
                ))}
                <OneColumn images={images.oneColumn[1]} />
                <TwoColumn images={[
                    images.twoColumn[2][0],  // First item device shot 1
                    images.twoColumn[2][1]   // Second item device shot 2
                ]} />

                <TwoColumn images={[
                    images.twoColumn[1][0],  // First item (evde.webm)
                    images.twoColumn[1][1]   // Second item (Evde_Frame_1.png)
                ]} />
                <OneColumn images={images.oneColumn[2]} />
                <OneColumn images={images.oneColumn[3]} />
            </div>
        </div>
    );
};

export default Gallery;