import styles from '../../styles/services/Tools.module.css';

const Tools = ({ tools }) => {
    return (<section className={styles.section}>
            <h2 className={styles.title}>Technologien</h2>
        <div className={styles.content}>
        {tools.map((tool, index) => (
            <div key={index} className={styles.tool}>
                <img src={tool.image} alt={tool.name} className={styles.image} />
                <p className={styles.text}>{tool.name}</p>
            </div>
        ))}
        </div>
    </section>);
};

export default Tools;
