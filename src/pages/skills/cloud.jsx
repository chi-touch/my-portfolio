import React from 'react';
import styles from "./index.module.css";

const Cloud = () => {
    return (
        <div className={styles.skills__content}>
            <h3 className={styles.skills__title}>devOps Engineer</h3>

            <div className={styles.skills__box}>
                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>AWS</h3>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Cloud;