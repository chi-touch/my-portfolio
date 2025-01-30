import React from "react";
import styles from './index.module.css';

const Qualification = () => {
    return (
        <section className={styles.section} id="qualifications">
            <h2 className={styles.section__title}>Qualifications</h2>
            <span className={styles.section__subtitle}>My personal journey</span>

            <div className={styles.qualification__container}>
                <div className={styles.qualification__columns}>

                    {/* Education Column */}
                    <div className={styles.qualification__content}>
                        <h3 className={styles.column__title}>
                            <i className="uil-graduation-cap"></i> Education
                        </h3>
                        <div className={styles.qualification__box}>
                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Diploma in Software Engineering</h3>
                                    <span className={styles.qualification__subtitle}>Semicolon Africa</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2023 - 2024
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Diploma in Business Education</h3>
                                    <span className={styles.qualification__subtitle}>Henley Business School, UK</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2024
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>National Diploma (ND) - Science Laboratory
                                        Technology</h3>
                                    <span
                                        className={styles.qualification__subtitle}>Federal Polytechnic Bauchi, Bauchi</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2020 - 2023
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Diploma in Computer Application</h3>
                                    <span
                                        className={styles.qualification__subtitle}>Zeccon Computer Institute, Jos</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2014
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div className={styles.qualification__content}>
                        <h3 className={styles.column__title}>
                            <i className="uil-briefcase-alt"></i> Experience
                        </h3>
                        <div className={styles.qualification__box}>
                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>DevOps Engineer</h3>
                                    <span className={styles.qualification__subtitle}>Semicolon Africa</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> Oct. 2024 - till date
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Software Engineer (Intern)</h3>
                                    <span className={styles.qualification__subtitle}>Semicolon Africa, Lagos</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> Sep. 2024 - Present
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Photo Editor</h3>
                                    <span className={styles.qualification__subtitle}>Amono Laboratory, Bauchi</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> Jan. 2015 - Oct. 2017
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Laboratory (Intern),Jos</h3>
                                    <span className={styles.qualification__subtitle}>AirForce Hospital,Jos</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> Sep. 2021 - Dec 2022
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
