import React from 'react';
import Image from 'next/image';
import styles from '../../styles/aboutus/ManagementSection.module.css';
import { FaLinkedin, FaXing } from 'react-icons/fa';

const ManagementSection = ({ title, management }) => {
  return (
    <section className={styles['management-section']}>
      <h2>{title}</h2>
      <div className={styles['management-grid']}>
        {management.map((member, index) => (
          <div key={index} className={styles['management-card']}>
            <div className={styles['management-image']}>
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                objectFit="cover"
              />
            </div>
            <div className={styles['management-content']}>
              <h3>{member.name}</h3>
              <p className={styles['management-email']}>
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </p>
              <p className={styles['management-position']}>{member.position}</p>
              <div className={styles['management-links']}>
                {member.xing && (
                  <a href={member.xing} target="_blank" rel="noopener noreferrer">
                    <FaXing size={20} />
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManagementSection;
