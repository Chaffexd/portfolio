import classes from './postcard.module.css';

const PostCard = ({ children }) => {
  return <div className={classes.postCard}>{children}</div>;
};

export default PostCard;
