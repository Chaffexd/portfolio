import Posts from "./Posts";

import classes from './blog.module.css';

const Blog = () => {

  return (
    <div>
      <h1 className={classes.title}>Blog Feed, welcome to my thoughts...</h1>
      <div>
        <ul className={classes.ul}>
            <Posts />
        </ul>
      </div>
    </div>
  );
};

export default Blog;
