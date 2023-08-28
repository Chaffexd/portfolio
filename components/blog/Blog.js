import Posts from "./Posts";

import classes from './blog.module.css';

const Blog = ({ posts }) => {

  return (
    <div className={classes.tileParent}>
      <h1 className={classes.title}>Stuff that I wrote ✍🏻</h1>
      <div>
        <ul className={classes.ul}>
            <Posts posts={posts} />
        </ul>
      </div>
    </div>
  );
};

export default Blog;
