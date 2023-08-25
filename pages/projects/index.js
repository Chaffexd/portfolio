import Head from "next/head";
import Projects from "@/components/projects/Projects";

const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>Shane Chaffe - Projects</title>
        <meta
          name="description"
          content="The page where you will find some of my projects"
        />
      </Head>
      <Projects />
    </>
  );
};

export default ProjectPage;
