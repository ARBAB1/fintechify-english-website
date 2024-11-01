import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import style from "./realsatate.module.css";
import Testimonials from "../components/Testimonials/Testimonials";
import Image from "next/image";
import RisImage from "../components/assets/images/riseApp.png";
import ImageOne from "../components/assets/images/blocks-landing-learn-more-1-md.webp";
import ImageTwo from '../components/assets/images/blocks-landing-learn-more-2-md.webp'
import ImageThree from '../components/assets/images/blocks-landing-learn-more-3-md.png'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/pexels-christina-morillo-1181244-1024x684.jpg"

const page = () => {
  return (
    <>
      <Header />

      <div className={`container-fluid ${style.containerFluid}`}>
        <div className={`container-fluid ${style.container}`}>
          <div className={`row ${style.row}`}>
            <div className={`col-md-12 ${style.col12}`}>
              <h1><Image src={RisImage} /></h1>
              {/* <p>
                FinPoan is a leading digital product management platform that
                empowers businesses to streamline their digital product
                management processes. With its advanced features and expertise,
                we help you achieve better productivity, increase customer
                satisfaction, and drive growth.
              </p> */}
            </div>
          </div>
        </div>
      </div>

      <div className={`container d-lg-block d-none ${style.container2} mt-5`}>
        <div className={`row ${style.row}`}>
          <div className={`col-lg-6 flex_left ${style.collg6}`} data-aos="fade-right" data-aos-duration="2000">
            {/* <Image src={RisImage} /> */}
            <h1>
              What's a Block?
            </h1>
            <p>
              A Block represents a fraction of a property, <br />making it affordable for everyone to invest in real estate. <br />We take the whole property and <br />split it into equal Blocks, enabling real estate investments <br /> from only AED 2,000.
            </p>
            <button className={`${style.btn} mt-3`}>Join Now</button>
          </div>
          <div className={`col-lg-6 flex_right ${style.collg62}`} data-aos="fade-left" data-aos-duration="2000">
            <Image src={ImageOne} className={style.RisMobile} />
          </div>
        </div>
      </div>

      <div className={`container d-lg-none d-block ${style.container2} mt-5`}>
        <div className={`row ${style.row}`}>
          <div className={`col-lg-6 flex_right ${style.collg62}`} data-aos="fade-left" data-aos-duration="2000">
            <Image src={ImageOne} className={style.RisMobile} />
          </div>
          <div className={`col-lg-6 flex_left ${style.collg6}`} data-aos="fade-right" data-aos-duration="2000">
            {/* <Image src={RisImage} /> */}
            <h1>
              What's a Block?
            </h1>
            <p>
              A Block represents a fraction of a property, <br />making it affordable for everyone to invest in real estate. <br />We take the whole property and <br />split it into equal Blocks, enabling real estate investments <br /> from only AED 2,000.
            </p>
            <button className={`${style.btn} mt-3`}>Join Now</button>
          </div>
        </div>
      </div>

      <div className={`container ${style.container2} mt-5`}>
        <div className={`row ${style.row}`}>
          <div className={`col-lg-6  ${style.collg62}`} data-aos="fade-left" data-aos-duration="2000">
            <Image src={ImageTwo} className={style.RisMobile} />
          </div>
          <div className={`col-lg-6 flex_left ${style.collg6}`} data-aos="fade-right" data-aos-duration="2000">
            {/* <Image src={RisImage} /> */}
            <h1>
              Investment dashboard
            </h1>
            <p>
              Track the performance of your investments on the go <br /> and discover latest property recommendations using your online dashboard.
            </p>
            <button className={`${style.btn} mt-3`}>Join Now</button>
          </div>
        </div>
      </div>

      <div className={`container d-lg-block d-none ${style.container2} mt-5`}>
        <div className={`row ${style.row}`}>
          <div className={`col-lg-6 flex_left ${style.collg6}`} data-aos="fade-right" data-aos-duration="2000">
            {/* <Image src={RisImage} /> */}
            <h1>
              Manage funds with <br /> PRYPCO Blocks Wallet
            </h1>
            <p>
              Add and withdraw funds with a click of a button. <br />Your rental incomes and other proceeds will be directly deposited in your PRYPCO Blocks Wallet.
            </p>
            <button className={`${style.btn} mt-3`}>Join Now</button>
          </div>
          <div className={`col-lg-6 flex_right ${style.collg62}`} data-aos="fade-left" data-aos-duration="2000">
            <Image src={ImageThree} className={style.RisMobile} />
          </div>
        </div>
      </div>

      <div className={`container d-lg-none d-block ${style.container2} mt-5`}>
        <div className={`row ${style.row}`}>
          <div className={`col-lg-6 flex_right ${style.collg62}`} data-aos="fade-left" data-aos-duration="2000">
            <Image src={ImageThree} className={style.RisMobile} />
          </div>
          <div className={`col-lg-6 flex_left ${style.collg6}`} data-aos="fade-right" data-aos-duration="2000">
            {/* <Image src={RisImage} /> */}
            <h1>
              Manage funds with <br /> PRYPCO Blocks Wallet
            </h1>
            <p>
              Add and withdraw funds with a click of a button. <br />Your rental incomes and other proceeds will be directly deposited in your PRYPCO Blocks Wallet.
            </p>
            <button className={`${style.btn} mt-3`}>Join Now</button>
          </div>
        </div>
      </div>

      <section className={`${style.servicessection}`}>
        <div className="container">
          <div className="row">
            <h5 className={style.keyBox}>
              Why invest in real estate? <br />
            </h5>
            <p>Real estate is the world’s largest asset class and provides major benefits.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 mt-3">
              <div className={`${style.servicesBox} ${style.servicesBoxScd}`}>
                <h4 className="text-start">Income potential</h4>
                <span className="text-start pt-3">
                Real estate helps you earn passive income in the form of monthly rentals. You can also build long-term wealth through capital appreciation.</span>
              </div>
            </div>

            <div className="col-lg-4 mt-3">
              <div className={`${style.servicesBox} ${style.servicesBoxScd}`}>
                <h4 className="text-start">Inflation hedge</h4>
                <span className="text-start pt-3">
                As the cost of living increases, the value of real estate and rental income increases. This helps real estate act as an inflation hedge.
                </span>
              </div>
            </div>

            <div className="col-lg-4 mt-3">
              <div className={`${style.servicesBox} ${style.servicesBoxScd}`}>
                <h4 className="text-start">Portfolio diversification</h4>
                <span className="text-start pt-3">
                Real estate serves as a tangible and unique asset class. It can help you diversify your portfolio and reduce risk.</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Testimonials />
      <Footer />
    </>
  );
};

export default page;
