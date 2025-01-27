import React from 'react'
import style from './bannerHome/banner.module.css'
import styles from './assets/css/services.module.css'

const ProjectIntroduction = ({ title, desc }) => {
    return (
        <div className={`d-flex flex-column align-items-center justify-content-center text-center ${style.rowContent}`} style={{  padding: '60px 20px' }}>
            <div className={`col-lg-8 col-md-10 ${styles.InnovativeBox}`}>
                <h3 data-aos="fade-up" data-aos-duration="1000" style={{ fontWeight: 'bold', fontSize: '3rem' }}>
                    {title}
                </h3>
                <p data-aos="fade-up" data-aos-duration="1500" style={{ color: '#b0b0b0', fontSize: '1.2rem', marginTop: '10px' }}>
                    {desc}
                </p>
            </div>
            <div className={`col-lg-4 col-md-4 ${styles.InnovativeBox}`}>
                {/* Optional Image Section */}
            </div>
        </div>
    )
}

export default ProjectIntroduction
