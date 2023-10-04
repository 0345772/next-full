import Link from "next/link";
import styles from '../styles/A.module.css'

export default function A({text, href}) {
  return (
    <Link className={styles.myLink} href={href}>
      {text}
    </Link>
  )
} 