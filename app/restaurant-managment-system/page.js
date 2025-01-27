import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import style from "../components/bannerHome/banner.module.css";
import img1 from "../components/assets/images/rms1.png";
import img2 from "../components/assets/images/rms2.png";
import img3 from "../components/assets/images/rms3.png";
import img4 from "../components/assets/images/rms4.png";
import img5 from "../components/assets/images/rms5.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/3d-internet-secuirty-badge.jpg";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import ProjectIntroduction from "../components/ProjectIntroduction";
import ProjectDescription from "../components/ProjectDescription";

function page() {
  const list = [
    {
      id: 1,
      title:"Account Creation",
      desc:"Users can create personal accounts for a personalized experience."
    },
    {
      id:2,
      title:"Restaurant Browsing",
      desc:"Explore and order from a variety of favorite restaurants."
    
    },
    {
      id:3,
      title:"Order Tracking",
      desc:"Monitor orders in real-time."
    },
    {
      id:3,
      title:"Payment Integration",
      desc:"Multiple payment options available for convenience."
    },
    {
      id:3,
      title:"Notifications",
      desc:"Receive alerts for order confirmations and updates."
    },
  ]
  const list1 = [
    {
      id: 1,
      title:"Dashboard",
      desc:"Access to order statistics and restaurant details."
    },
    {
      id:2,
      title:"Menu Management",
      desc:"View and manage menu items and their availability."
    
    },
    {
      id:3,
      title:"Order Management",
      desc:"Handle incoming orders efficiently."
    },
    {
      id:3,
      title:"Analytics",
      desc:"Insights into sales and customer preferences."
    },
    {
      id:3,
      title:"Notifications",
      desc:"Alerts for new orders, stock levels, and promotions."
    },
  ]
  const list2 = [
    {
      id: 1,
      title:"Order Assignment",
      desc:"Receive and manage delivery tasks."
    },
    {
      id:2,
      title:"Route Optimization",
      desc:"Access to efficient routing for timely deliveries."
    
    },
    {
      id:3,
      title:"Earnings Tracking",
      desc:"Monitor daily and monthly earnings"
    },
    {
      id:3,
      title:"Status Updates",
      desc:"Provide real-time delivery status to customers."
    },
  
  ]
  const list3 = [
    {
      id: 1,
      title:"User Management",
      desc:"Oversee customer, restaurant, and delivery personnel accounts."
    },
    {
      id:2,
      title:"Order Monitoring",
      desc:"Track all orders across the platform."
    
    },
    {
      id:3,
      title:"Payment Gateway Integration",
      desc:"Support for popular payment gateways like Razorpay, Stripe, and PayPal."
    },
    {
      id:3,
      title:"Reports and Analytics",
      desc:"Generate comprehensive reports on platform performance."
    },
  
  ]
  const list4 = [
    {
      id: 1,
      title:"Technical Specifications",
      desc:"Available on web and mobile applications."
    },
    {
      id:2,
      title:"Delivery Boy Support",
      desc:"Features to manage delivery personnel effectively, including account management and money withdrawal functionalities."
    
    },
    {
      id:3,
      title:"Delivery Boy Support",
      desc:"Manage discounts, offers, and promotions to attract customers."
    },
 
  ]
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"Restaurant Management System"}
        tagLine={false}
        Des={false}
      />

      <section className="mb-5 mt-5 d-lg-block d-none">
        <div className="container-fluid px-lg-5">
     <ProjectIntroduction title={"Overview"} desc={"The Restaurant Management System (RMS) is an end-to-end solution with three mobile apps: Customer,Restaurant, and Rider, designed to streamline operations and optimize experiences. "}  />
     <ProjectIntroduction title={"Target Audience"} desc={"Business owners, restaurant managers, and delivery operations teams. "}  />


        <ProjectDescription title={"Customer App"} img1={img1} list={list} pos={"right"}/>
        <ProjectDescription title={"Restaurant Owner App"} img1={img2} list={list1} pos={"left"}/>
        <ProjectDescription title={"Rider App"} img1={img3} list={list2} pos={"right"}/>
        <ProjectDescription title={"Admin App"} img1={img4} list={list3} pos={"left"}/>
        <ProjectDescription title={"Additional Features"} img1={img5} list={list4} pos={"right"}/>
        </div>
      </section>

      <section className="mb-5 mt-5 d-lg-none d-block">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
        <ProjectIntroduction title={"Overview"} desc={"The Restaurant Management System (RMS) is an end-to-end solution with three mobile apps: Customer,Restaurant, and Rider, designed to streamline operations and optimize experiences. "}  />
        <ProjectIntroduction title={"Target Audience"} desc={"Business owners, restaurant managers, and delivery operations teams. "}  />
        <ProjectDescription title={"Customer App"} img1={img1} list={list} pos={"right"}/>
        <ProjectDescription title={"Restaurant Owner App"} img1={img2} list={list1} pos={"left"}/>
        <ProjectDescription title={"Rider App"} img1={img3} list={list2} pos={"right"}/>
        <ProjectDescription title={"Admin App"} img1={img4} list={list3} pos={"left"}/>
        <ProjectDescription title={"Additional Features"} img1={img5} list={list4} pos={"right"}/>
          </div>
        </div>
      </section>

  

      <section
        className={styles.getStartedSection}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className={styles.startedUpperBox}>
              <Image src={QoutesImg} alt="Qoutes" />
              <h4>Get Started Today</h4>
              <p>Tired of clunky banking apps? We build rocketships.</p>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.startedLeft}`}>
                <ul>
                  <h5 className="text-start">
                    Your customers deserve a mobile banking experience that
                    blasts off, not one stuck in the dark ages. Fintechify
                    crafts powerful, user-friendly apps that:
                  </h5>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      Shield information like Fort Knox (but with better wifi).
                    </span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      Make managing finances smoother than a frictionless slide.
                    </span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      Make managing finances smoother than a frictionless slide.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox}  ${styles.starteRight}`}>
                <ul>
                  <h5 className="text-start">
                    We’re not just developers, we’re banking superheroes. Our
                    team of design wizards, coding ninjas, and strategic
                    masterminds join forces to create:
                  </h5>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>Apps that are a joy to use, not a chore.</span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      Features that make banking a breeze, not a battlefield.
                    </span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      Solutions that turn customers into raving fans, not
                      frustrated users.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={styles.startedBottomSection}>
                Don't just offer banking, be the banking revolution. Partner
                with Fintechify and watch your mobile app soar! <br />
                Ready to launch your mobile banking app into the stratosphere?
                Contact us today!
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </>
  );
}

export default page;
