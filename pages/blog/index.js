import Head from "next/head";
import Blog from "@/components/blog/Blog";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Shane's Blog</title>
        <meta
          name="description"
          content="This is where I post stuff from time time"
        />
      </Head>
      <Blog />
    </>
  );
};

export default BlogPage;
