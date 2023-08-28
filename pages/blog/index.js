import Head from "next/head";
import { createClient } from "contentful";
import Blog from "@/components/blog/Blog";

const BlogPage = ({ blogPosts }) => {

  return (
    <>
      <Head>
        <title>Shane's Blog</title>
        <meta
          name="description"
          content="This is where I post stuff from time time"
        />
      </Head>
      <Blog posts={blogPosts} />
    </>
  );
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const blogPosts = await client.getEntries();

  if (!blogPosts) {
    return { notFound: true };
  }

  return {
    // this returns our blog posts as props so we can use them
    props: {
      blogPosts
    },
    // this will rebuild the build every 60 secs
    revalidate: 60
  }
}

export default BlogPage;