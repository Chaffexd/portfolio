import Link from "next/link";
import classes from './mainheader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
        <div className={classes.home}>
            <Link href={"/"}>To home, add an image?</Link>
        </div>
        <nav>
            <ul className={classes.navigation}>
                <li>
                    <Link href={"/blog"}>Blog</Link>
                </li>
                <li>
                    <Link href={"/projects"}>Projects</Link>
                </li>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader;