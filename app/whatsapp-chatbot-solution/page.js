import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import style from "../components/bannerHome/banner.module.css";
import img1 from "../components/assets/images/whatsapp1.png";
import img2 from "../components/assets/images/dw2.png";
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
        "id": 1,
        "title": "Automation Chatbot Services",
        "desc": "Handle unlimited conversations with dynamic stories."
    },
    {
        "id": 2,
        "title": "Omni-Channel Integration",
        "desc": "Connects seamlessly with WhatsApp, Instagram, Facebook Messenger, and Telegram."
    },
    {
        "id": 3,
        "title": "Live Agent Support",
        "desc": "Transition from automated chat to live agents with ease."
    },
    {
        "id": 4,
        "title": "Real-Time Reporting",
        "desc": "Access detailed analytics for conversations, forms, and media."
    },
    {
        "id": 5,
        "title": "Outbound Messaging",
        "desc": "Broadcast messages via WhatsApp with integrated delivery and graphic reports."
    },
    {
        "id": 6,
        "title": "Seamless Customer Experience",
        "desc": "Provide 24/7 support with interactive and personalized chat."
    },
    {
        "id": 7,
        "title": "Enhanced Scalability",
        "desc": "Designed to handle high user volumes efficiently."
    },
    {
        "id": 8,
        "title": "Actionable Insights",
        "desc": "Use reports and analytics to optimize campaigns and customer engagement."
    },
    {
        "id": 9,
        "title": "Cost-Effective Communication",
        "desc": "Leverage WhatsApp for global outreach at competitive rates."
    }
]

const list1 = [
  {
      id: 1,
      title: "Cloud Integration",
      desc: "Ensures real-time access and synchronization of payment data across multiple devices, providing a seamless user experience.",
  },
  {
      id: 2,
      title: "API Integrations",
      desc: "Allows the digital wallet to integrate with external systems (e.g., banks, payment gateways), enhancing payment options and expanding wallet functionality.",
  },
  {
      id: 3,
      title: "Security Features",
      desc: "Uses encryption, tokenization, and other security protocols to protect users' financial data",
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
      title: "Scheduled Campaigns",
      desc: "Oversee customer, restaurant, and delivery personnel accounts.",
    },
    {
      id: 2,
      title: "Real-Time Adjustments",
      desc: "Track all orders across the platform.",
    },
    {
      id: 3,
      title: "Notifications",
      desc: "Support for popular payment gateways like Razorpay, Stripe, and PayPal.",
    },
    {
      id: 3,
      title: "Reports and Analytics",
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
        head={"WHATSAPP CHATBOT SOLUTION"}
        tagLine={false}
        Des={false}
      />

      <section className="mb-5 mt-5 d-lg-block d-none">
        <div className="container-fluid px-lg-5">
          <ProjectIntroduction
            title={"Overview"}
            desc={
"                A robust chatbot solution designed to transform customer engagement through automated and interactive conversations on WhatsApp. Tailored for businesses across industries, it enhances communication, accelerates sales, and improves customer support."
                       }
          />
   

          <ProjectDescription
            title={"Core Features"}
            img1={img1}
            list={list}
            pos={"right"}
          />
       
        
       
        </div>
      </section>

      <section className="mb-5 mt-5 d-lg-none d-block">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
          <ProjectIntroduction
            title={"Overview"}
            desc={
"                A robust chatbot solution designed to transform customer engagement through automated and interactive conversations on WhatsApp. Tailored for businesses across industries, it enhances communication, accelerates sales, and improves customer support."
                       }
          />
   

          <ProjectDescription
            title={"Core Features"}
            img1={img1}
            list={list}
            pos={"right"}
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
