import React from "react";
import Layout from "../components/global/layout";
import Features from "../components/home/features";
import Hero from "../components/home/hero";
import Process from "../components/home/process";
import Projects from "../components/home/projects";
import Reviews from "../components/home/reviews";
import Services from "../components/home/services";
import Technologies from "../components/home/technologies";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Features />
      <Projects />
      <Technologies />
      <Process />
      <Reviews />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>
      Unimax Global | Transforming Businesses with Innovative IT Solutions
    </title>
    <meta
      name="description"
      content="Unimax Global is a leading IT solutions provider, specializing in innovative web development, digital marketing, and app development services. We empower businesses with tailored solutions to drive digital transformation and achieve online success. Discover how we can elevate your digital presence today."
    />
  </>
);
