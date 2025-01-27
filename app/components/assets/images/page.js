import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import style from "../components/bannerHome/banner.module.css";
import img1 from "../components/assets/images/db1.png";
import img2 from "../components/assets/images/db2.png";

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
        title: "التحقق الرقمي من الهوية وتسجيل العملاء",
        desc: "إجراء التحقق الإلكتروني من الهوية (eKYC) وجمع المعلومات الرئيسية عن العملاء للتسجيل.",
    },
    {
        id: 2,
        title: "إدارة الحسابات",
        desc: "فتح وإدارة الحسابات الجارية، التوفير، وحسابات الشركات.",
    },
    {
        id: 3,
        title: "الخدمات الائتمانية والقروض",
        desc: "تقديم طلبات القروض الرقمية، القروض الشخصية، وخدمات خط الائتمان النقدي.",
    },   
    {
        id: 4,
        title: "الودائع الثابتة",
        desc: "إيداع الأموال لفترات ثابتة بمعدلات أرباح متفق عليها، ثم إيداع الأرباح في حسابات العملاء عند الاستحقاق.",
    },   
    {
        id: 5,
        title: "المدفوعات والتحويلات",
        desc: "دعم مختلف عمليات الدفع والتحويلات المالية عبر الإنترنت مثل فواتير الخدمات، شحن الهاتف المحمول، المدفوعات عبر رمز QR، التحويلات المالية الفورية (FT, IBFT)، وغيرها.",
    },   
    {
        id: 6,
        title: "الأمان المتقدم",
        desc: "يتضمن التحقق البيومتري، التعرف على الوجه، والمصادقة الثنائية (2FA) للوصول الآمن وإجراء المعاملات.",
    },
];

const list1 = [
  {
      id: 1,
      title: "المعايير الديناميكية",
      desc: "اختيار الفائزين تلقائيًا بناءً على قواعد محددة مسبقًا (مثل أعلى المنفقين، أكثر المعاملات، إلخ).",
  },
  {
      id: 2,
      title: "الفائزون المتكررون",
      desc: "إتاحة فرصة الفوز المتكرر بفواصل زمنية محددة (أسبوعيًا، نصف شهري، شهريًا).",
  },
  {
      id: 3,
      title: "المكافآت المخصصة",
      desc: "إتاحة تخصيص المكافآت بناءً على تفضيلات المستخدم.",
  },
];

const list2 = [
  {
      id: 1,
      title: "الإشعارات",
      desc: "تنبيهات بشأن انتهاء صلاحية المواقف، رسوم تجاوز الوقت، وتحديثات النظام.",
  }
];

const list3 = [
    {
      id: 1,
      title: "الحملات المجدولة",
      desc: "الإشراف على حسابات العملاء، المطاعم، وموظفي التوصيل.",
    },
    {
      id: 2,
      title: "التعديلات الفورية",
      desc: "تتبع جميع الطلبات عبر المنصة في الوقت الحقيقي.",
    },
    {
      id: 3,
      title: "الإشعارات",
      desc: "دعم بوابات الدفع الشهيرة مثل Razorpay, Stripe, و PayPal.",
    },
    {
      id: 4,
      title: "التقارير والتحليلات",
      desc: "إنشاء تقارير شاملة حول أداء المنصة.",
    },
];

const list4 = [
    {
      id: 1,
      title: "المواصفات التقنية",
      desc: "متوفر على تطبيقات الويب والجوال.",
    },
    {
      id: 2,
      title: "دعم موظفي التوصيل",
      desc: "ميزات لإدارة موظفي التوصيل بفعالية، بما في ذلك إدارة الحسابات ووظائف سحب الأموال.",
    },
    {
      id: 3,
      title: "إدارة العروض الترويجية",
      desc: "إدارة الخصومات، العروض، والترويجات لجذب العملاء.",
    },
];

  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"البنك الرقمي "}
        tagLine={false}
        Des={false}
      />

      <section className="mb-5 mt-5 d-lg-block d-none">
        <div className="container-fluid px-lg-5">
        <ProjectIntroduction
  title={"نظرة عامة"}
  desc={
    "البنك الرقمي هو مؤسسة مالية عبر الإنترنت تقدم خدمات مصرفية سلسة دون الاعتماد على الفروع الفعلية، مثل إدارة الحسابات، التحويلات، والاستثمارات عبر منصات رقمية آمنة، مستفيدة من التكنولوجيا لتحقيق الكفاءة، التخصيص، والامتثال التنظيمي."
  }
/>
<ProjectIntroduction
  title={"الجمهور المستهدف"}
  desc={
    "البنوك، المؤسسات المالية"
  }
/>

<ProjectDescription
  title={"تطبيق المستخدم"}
  img1={img1}
  list={list}
  pos={"right"}
/>

<ProjectDescription
  title={"اختيار الفائز"}
  img1={img2}
  list={list1}
  pos={"left"}
/>



        </div>
      </section>

      <section className="mb-5 mt-5 d-lg-none d-block">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
          <ProjectIntroduction
  title={"نظرة عامة"}
  desc={
    "البنك الرقمي هو مؤسسة مالية عبر الإنترنت تقدم خدمات مصرفية سلسة دون الاعتماد على الفروع الفعلية، مثل إدارة الحسابات، التحويلات، والاستثمارات عبر منصات رقمية آمنة، مستفيدة من التكنولوجيا لتحقيق الكفاءة، التخصيص، والامتثال التنظيمي."
  }
/>
<ProjectIntroduction
  title={"الجمهور المستهدف"}
  desc={
    "البنوك، المؤسسات المالية"
  }
/>

<ProjectDescription
  title={"تطبيق المستخدم"}
  img1={img1}
  list={list}
  pos={"right"}
/>

<ProjectDescription
  title={"اختيار الفائز"}
  img1={img2}
  list={list1}
  pos={"left"}
/>


          </div>
        </div>
      </section>

 

      <Testimonials />
      <Footer />
    </>
  );
}

export default page;
