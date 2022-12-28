import React from "react";
import Layout from "../components/global/layout";
import Features from "../components/home/features";
import Hero from "../components/home/hero";
import Process from "../components/home/process";
import Reviews from "../components/home/reviews";
import Services from "../components/home/services";
import Technologies from "../components/home/technologies";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Features />
      <Technologies />
      <Process />
      <Reviews />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
