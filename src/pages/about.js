import React from "react";
import AboutUnimax from "../components/about/about-unimax";
import Faq from "../components/about/faq";
import Reasons from "../components/about/reasons";
import Layout from "../components/global/layout";
import MuiBreadCrumbs from "../components/global/mui-breadcrumb";
import PageHeader from "../components/global/page-header";

const name = "About";
const AboutPage = () => {
  return (
    <Layout>
      <MuiBreadCrumbs name={name} />
      <PageHeader
        name={name}
        desc="
        Unlock your digital potential with us. We specialize in innovative IT solutions, including web development, digital marketing, and app development. Partner with our skilled team to embark on a journey of digital transformation and achieve business success."
      />
      <AboutUnimax />
      <Reasons />
      <Faq />
    </Layout>
  );
};

export default AboutPage;

export const Head = () => (
  <>
    <title>
      About Unimax Global | Empowering Digital Success for Businesses
    </title>
  </>
);
