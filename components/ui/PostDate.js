import classes from './postdate.module.css';

const Date = ({ postDate }) => {
  return <time className={classes.time}>{postDate}</time>;
};

export default Date;