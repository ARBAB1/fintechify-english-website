import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import style from "../components/bannerHome/banner.module.css";
import img1 from "../components/assets/images/s1.png";
import img2 from "../components/assets/images/s2.png";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/3d-internet-secuirty-badge.jpg";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import {
  MdArrowOutward,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import ProjectIntroduction from "../components/ProjectIntroduction";
import ProjectDescription from "../components/ProjectDescription";

function page() {
  const list = [
    {
        id: 1,
        title: "Interoperability",
        desc: "Performing eKYC and capturing key customer information for onboarding.",
    },
    {
        id: 2,
        title: "Connectivity",
        desc: "Opening and managing savings, current, and corporate accounts.",
    },
    {
        id: 2,
        title: "Messaging Service Protocols",
        desc: "Initiating Digital loan applications, personal loan, cashline services.",
    },   {
        id: 2,
        title: "Scheduler",
        desc: "Depositing funds for fixed terms at agreed profit rate and then crediting profit amounts into customer accounts at maturity.",
    },   {
        id: 2,
        title: "Dynamic Routing",
        desc: "Supporting various online payments and fund transfers e.g., utility bills, mobile top-ups, QR payments, FT, IBFT, etc.",
    },   {
        id: 2,
        title: "Multi currency & Channel support",
        desc: "Contains Biometric authentication, face recognition, two-factor authentication (2FA) for secured access and transactions.",
    },
   
];

const list1 = [
  {
      id: 1,
      title: "Dynamic Criteria",
      desc: "Automatically select winners based on predefined rules (e.g., highest spenders, most transactions, etc)",
  },
  {
      id: 2,
      title: "Recurring Winners",
      desc: "Allow multiple winners at specified frequency (weekly, biweekly, monthly)",
  },
  {
      id: 3,
      title: "Custom Rewards",
      desc: "Allow multiple winners at specified frequency (weekly, biweekly, monthly)",
  },

];
const list2 = [
  {
      id: 1,
      title: "Notifications",
      desc: "Alerts for expired parking, overstay charges, and system updates.",
  }
];
  const list3 = [
    {
      id: 1,
      title: "Compliance",
      desc: "Oversee customer, restaurant, and delivery personnel accounts.",
    },
    {
      id: 2,
      title: "Fallback Mechanism",
      desc: "Track all orders across the platform.",
    },
    {
      id: 3,
      title: "Security",
      desc: "Support for popular payment gateways like Razorpay, Stripe, and PayPal.",
    },
    {
      id: 3,
      title: "High availability/Performance",
      desc: "Generate comprehensive reports on platform performance.",
    },
  ];
  const list4 = [
    {
      id: 1,
      title: "Technical Specifications",
      desc: "Available on web and mobile applications.",
    },
    {
      id: 2,
      title: "Delivery Boy Support",
      desc: "Features to manage delivery personnel effectively, including account management and money withdrawal functionalities.",
    },
    {
      id: 3,
      title: "Delivery Boy Support",
      desc: "Manage discounts, offers, and promotions to attract customers.",
    },
  ];
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"Switch"}
        tagLine={false}
        Des={false}
      />

      <section className="mb-5 mt-5 d-lg-block d-none">
        <div className="container-fluid px-lg-5">
          <ProjectIntroduction
            title={"Overview"}
            desc={
"Switch is a middleware system that facilitates real-time transaction routing, processing, and settlement between different banking channels, networks, and systems"
            }
          />
          <ProjectIntroduction
            title={"Target Audience"}
            desc={
              "Commercial Banks, Payment Service Providers (PSP), Financial Institutions, ATM/POS Network Operators, Merchants, Regulators, Third Party Integrators & Fintech companies"
            }
          />

          <ProjectDescription
            title={"Admin Panel/Backend"}
            img1={img1}
            list={list1}
            pos={"right"}
          />
          <ProjectDescription
            title={"Technical Specifications"}
            img1={img1}
            list={list3}
            pos={"left"}
          />
        
       
        </div>
      </section>

      <section className="mb-5 mt-5 d-lg-none d-block">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
          <ProjectIntroduction
            title={"Overview"}
            desc={
"Switch is a middleware system that facilitates real-time transaction routing, processing, and settlement between different banking channels, networks, and systems"
            }
          />
          <ProjectIntroduction
            title={"Target Audience"}
            desc={
              "Commercial Banks, Payment Service Providers (PSP), Financial Institutions, ATM/POS Network Operators, Merchants, Regulators, Third Party Integrators & Fintech companies"
            }
          />

          <ProjectDescription
            title={"Admin Panel/Backend"}
            img1={img1}
            list={list1}
            pos={"right"}
          />
          <ProjectDescription
            title={"Technical Specifications"}
            img1={img2}
            list={list3}
            pos={"left"}
          />
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
