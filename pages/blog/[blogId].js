import { useRouter } from "next/router";
import { createClient } from "contentful";
import Head from "next/head";
import Post from "@/components/blog/Post";

const BlogDetailPage = ({ entry }) => {
  const router = useRouter();
  const { postTitle, postDate } = entry.fields;
  const blogPost = entry.fields.postBody.content[0].content[0].value;

  console.log(router.query)
  const blogId = router.query.blogId;
  console.log(blogId);

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  if(!entry) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>{postTitle}</title>
        <meta
          name={postTitle}
          content={blogPost}
        />
      </Head>
      <Post postTitle={postTitle} blogPost={blogPost} postDate={postDate} />
    </>
  );
};

export async function getStaticPaths() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const entries = await client.getEntries({
    content_type: "post",
  });

  const paths = entries.items.map((entry) => ({
    params: { blogId: entry.sys.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // Fetch the specific blog post based on the blogId
  const entry = await client.getEntry(params.blogId);

  return {
    props: {
      entry, // Pass the fetched entry as a prop
    },
  };
}

export default BlogDetailPage;
