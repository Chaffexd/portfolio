import { useRouter } from "next/router";
import { createClient } from "contentful";
import Button from "@/components/ui/Button";

const BlogDetailPage = ({ entry }) => {
  const router = useRouter();

  const blogId = router.query.blogId;
  console.log(blogId);

  const { postTitle } = entry.fields;
  const blogPost = entry.fields.postBody.content[0].content[0].value;

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <div>
        <h1>{postTitle}</h1>
        <p>{blogPost}</p>
        <Button link={"/blog"} text={"Go back"} />
    </div>
  );
};

export async function getStaticPaths() {
  const client = createClient({
    space: "svpfxqr57hom",
    accessToken: "cD8nXddmmbBiviPwqREwP7GVe9cjrLxcqAO67fyMvfE",
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
    space: "svpfxqr57hom",
    accessToken: "cD8nXddmmbBiviPwqREwP7GVe9cjrLxcqAO67fyMvfE",
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
