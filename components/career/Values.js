import React, { useState } from 'react';
import styles from '../../styles/career/Values.module.css';

const Values = ({ values }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section>
            <ul className={styles.honeycomb}>
                {values.map((value, index) => (
                    <li
                        className={styles.honeycombCell}
                        key={index}
                        onClick={() => setActiveIndex(index)}
                    >
                        <img
                            className={styles.honeycombCellImage}
                            src={value.image}
                        />
                        <div className={styles.honeycombCellTitle}>
                            {value.name}
                        </div>
                    </li>
                ))}
                <li className={styles.honeycombCellPlaceholder} />
            </ul>

        </section>
    );
};

export default Values;