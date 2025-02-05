import styles from '../../styles/services/HelpBox.module.css';

const HelpBox = ({ help }) => {
    return (<section className={styles.section}>
        <div className={styles.content}>
            <h2 className={styles.header}>{help.header}</h2>
            <p className={styles.text}>
                {help.text}
            </p>

            <a href={help.button}>
                <button className={styles.button}>KONTAKT AUFNEHMEN</button>
            </a>

        </div>
        <div className={styles.management}>
        <div className={styles.image}>
        <img src={help.management.image} alt="Profile Image"></img>
            </div>
            <div className={styles.name}>
            <h3>{help.management.name}</h3>
            </div>
            <div className={styles.email}>
            <h3>{help.management.email}</h3>
            </div>
            <div className={styles.phone}>
            <h3>{help.management.phone}</h3>
            </div>
        </div>
    </section>);
};

export default HelpBox;
