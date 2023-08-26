import { useState, useEffect } from "react";
import Link from "next/link";

import classes from "./posts.module.css";
import PostCard from "../ui/PostCard";
import Button from "../ui/Button";
import ArrowRight from "../icons/ArrowRight";

const contentful = require("contentful");
const client = contentful.createClient({
  space: "svpfxqr57hom",
  accessToken: "cD8nXddmmbBiviPwqREwP7GVe9cjrLxcqAO67fyMvfE",
});

const Posts = ({ text }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        setPosts(response.items);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.sys.id}>
          <li className={classes.posts}>
            <h1>{post.fields.postTitle}</h1>
            <div className={classes.tile}>
              <Button link={`/blog/${post.sys.id}`} text={"Read More"} />
              <span>
                <Link href={`/blog/${post.sys.id}`}>
                  <ArrowRight />
                </Link>
              </span>
            </div>
          </li>
        </PostCard>
      ))}
    </>
  );
};

export default Posts;
