import Button from "../ui/Button";
import PostDate from "../ui/PostDate";
import formatDate from "@/helpers";

import classes from "./post.module.css";
import Link from "next/link";
import ArrowLeft from "../icons/ArrowLeft";

const Post = ({ postTitle, blogPost, postDate }) => {
  return (
    <div className={classes.postContainer}>
      <div className={classes.postHeader}>
        <span className={classes.leaveBlog}>
          <Link href={"/blog"}>
            <ArrowLeft />
          </Link>
          <Button link={"/blog"} text={"Go back"} />
        </span>
        <PostDate postDate={formatDate(postDate)} />
        <h1 className={classes.postTitle}>{postTitle}</h1>
      </div>
      <div>
        <p>{blogPost}</p>
      </div>
    </div>
  );
};

export default Post;
