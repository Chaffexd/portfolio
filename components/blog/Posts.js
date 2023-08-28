import formatDate from "../../helpers";

import classes from "./posts.module.css";
import PostCard from "../ui/PostCard";
import Button from "../ui/Button";
import PostDate from "../ui/PostDate";

const Posts = ({ posts }) => {
  const blogPosts = posts.items;

  return (
    <>
      {blogPosts.map((post) => (
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