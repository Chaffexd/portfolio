import classes from './postcard.module.css';

const PostCard = ({ children }) => {
  return <article className={classes.postCard}>{children}</article>;
};

export default PostCard;
