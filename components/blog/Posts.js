import { useState, useEffect } from "react";
import { createClient } from "contentful";
import formatDate from "../../helpers";

import classes from "./posts.module.css";
import PostCard from "../ui/PostCard";
import Button from "../ui/Button";
import PostDate from "../ui/PostDate";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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

  if (!posts) {
    return <p>Something went wrong...</p>;
  }

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.sys.id}>
          <li className={classes.posts}>
            <div>
              <PostDate postDate={formatDate(post.fields.postDate)} />
              <h1 className={classes.title}>{post.fields.postTitle}</h1>
            </div>
            <div className={classes.tileFooter}>
              <p className={classes.tags}>{post.fields.tags}</p>
              <div className={classes.tile}>
                <Button link={`/blog/${post.sys.id}`} text={"Read More"} />
              </div>
            </div>
          </li>
        </PostCard>
      ))}
    </>
  );
};

export default Posts;
