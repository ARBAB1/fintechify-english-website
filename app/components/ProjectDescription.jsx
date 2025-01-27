import React from 'react';
import style from './bannerHome/banner.module.css';
import styles from './assets/css/services.module.css';
import Image from 'next/image';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const ProjectDescription = ({ title, img1, list, pos }) => {
    return (
        <div className={`d-flex flex-wrap align-items-center justify-content-between ${styles.sectionContainer}`} 
            style={{  padding: '80px 0' }}
        >
            {/* Text Content - Left or Right Based on `pos` */}
            <div className={`col-lg-6 col-md-12 d-flex flex-column justify-content-center px-5`}
                data-aos={pos === "right" ? "fade-right" : "fade-left"} 
                data-aos-duration="500"
                style={{ textAlign: 'left', padding: '20px' }}
            >
                <h3 style={{  fontWeight: 'bold', fontSize: '3rem', marginBottom: '20px' }}>{title}</h3>
                {
                    list.map((item, index) => (
                        <div key={index} style={{ marginBottom: '15px' }}>
                            <h6 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{item.title}</h6>
                            <ul className={styles.ulPoints} style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem', color: '#b0b0b0' }}>
                                    <MdOutlineKeyboardDoubleArrowRight style={{ color: '#1e90ff', marginRight: '8px' }} />
                                    {item.desc}
                                </li>
                            </ul>
                        </div>
                    ))
                }
            </div>

            {/* Image Content - Adjusts Based on `pos` */}
            <div className={`col-lg-6 col-md-12 d-flex justify-content-center align-items-center`}
                data-aos="fade-up"
                data-aos-duration="500"
            >
                <div className="image-container" style={{ maxWidth: '500px' }}>
                    <Image src={img1} alt="Project Image" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
}

export default ProjectDescription;
