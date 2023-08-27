import Head from "next/head";
import LandingInfo from "@/components/landing/LandingInfo";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Shane Chaffe - Front End Dev</title>
        <meta name="description" content="Shane Chaffe's portfolio" />
      </Head>
      <LandingInfo />
    </>
  );
};

export default HomePage;
