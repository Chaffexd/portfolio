import Head from "next/head";
import AboutIntro from "@/components/about/AboutIntro";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="The about me page of Shane's portfolio"
        />
      </Head>
      <AboutIntro />
    </>
  );
};

export default AboutPage;
