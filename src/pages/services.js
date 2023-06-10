import React from "react";
import Layout from "../components/global/layout";
import MuiBreadCrumbs from "../components/global/mui-breadcrumb";
import Services from "../components/home/services";

const name = "Services";
const ServicesPage = () => {
  return (
    <Layout>
      <MuiBreadCrumbs name={name} />
      <Services isPage />
    </Layout>
  );
};

export default ServicesPage;

export const Head = () => (
  <>
    <title>Our Services | Comprehensive IT Solutions for Businesses</title>
  </>
);
