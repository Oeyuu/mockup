import styles from '../../styles/services/Service.module.css';
import Image from 'next/image';

const Service = ({ service }) => {
  return (
    <section className={styles.section}>
      <div className={styles.stickyBox}>
        {service.image && (
          <Image
            src={service.image}
            alt={service.content[0]?.header || 'Service Bild'}
            className={styles.serviceImage}
            width={500}
            height={400}
          />
        )}
      </div>

      <div className={styles.content}>
        {service.content.map((contentItem, i) => (
          <div key={i} className={styles.serviceItem}>
            <h2>{contentItem.header}</h2>
            <p>{contentItem.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
