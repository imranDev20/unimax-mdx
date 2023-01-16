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
        desc="We Ensure Quality & Best Service Website Design, Development & Graphic Design."
      />
      <AboutUnimax />
      <Reasons />
      <Faq />
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About</title>;
