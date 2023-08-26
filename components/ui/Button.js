import Link from "next/link";

const Button = ({ link, text }) => {
  return (
    <Link href={link}>{text}</Link>
  )
}

export default Button;