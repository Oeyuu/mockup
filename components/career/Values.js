import React, { useState } from 'react';
import styles from '../../styles/career/Values.module.css';

const Values = ({ values }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        
           
                <div className={styles.comb}>
                    <div className={styles.container}>{
                        values.map((value, index) => (
                            <div key={value.name}
                                className={`${styles.honeycombCell} ${activeIndex === index ? styles.active : ''}`}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}>
                                <img
                                    className={styles.honeycombCellImage}
                                    src={value.image}
                                />
                                <div className={styles.honeycombContent}>
                                    {activeIndex === index ? (
                                        <p>{value.description}</p> 
                                    ) : (
                                        <h3>{value.name}</h3> 
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
           
        
    );
};

export default Values;