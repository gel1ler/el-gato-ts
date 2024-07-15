// components/StarEffect.js
import React, { useState } from 'react';
import styles from './StarEffect.module.css';
import Image from 'next/image';

type TStar = {
    id: number;
    top: string;
    left: string;
    animationDuration: string,
    side: 'left' | 'right';
}

const StarEffect = () => {
    const [stars, setStars] = useState<TStar[]>([]);

    const createStars = () => {
        const newStars = [];
        for (let i = 0; i < 100; i++) {
            const side: 'left' | 'right' = Math.random() < 0.5 ? 'left' : 'right';
            newStars.push({
                id: Math.random(),
                top: Math.random() * 100 + 'vh',
                left: side === 'left' ? '-50px' : 'calc(100vw + 50px)',
                side: side,
                animationDuration: Math.random() * 2 + 3 + 's',
            });
        }
        setStars(newStars);
    };

    return (
        <div>
            <button onClick={createStars}>Click Me</button>
            <div className={styles.starContainer}>
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className={`${styles.star} ${styles[star.side]}`}
                        style={{
                            top: star.top,
                            left: star.left,
                            animationDuration: star.animationDuration,
                        }}
                    >
                        <Image src="/star.svg" width={15} height={15} alt="star" className={styles.starImage} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StarEffect;