import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./mainheader.module.css";

const MainHeader = () => {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <div className={classes.home}>
        <Link href={"/"}>To home, add an image?</Link>
      </div>
      <nav>
        <ul className={classes.navigation}>
          <li>
            <Link
              href={"/blog"}
              className={router.pathname === "/blog" ? classes.active : null}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href={"/projects"}
              className={
                router.pathname === "/projects" ? classes.active : null
              }
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className={router.pathname === "/about" ? classes.active : null}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
