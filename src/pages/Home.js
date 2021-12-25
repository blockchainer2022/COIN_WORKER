import React from "react";
import { Layout, PreFooter } from "../components";
import { HeroSection, HowItWorks, About } from "../sections";
const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <HowItWorks />
        <About />
        <PreFooter />
      </Layout>
    </div>
  );
};

export default Home;
