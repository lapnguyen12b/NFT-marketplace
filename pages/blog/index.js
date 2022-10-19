import Link from "next/link"
import styles from '../../styles/Home.module.css'

function Blog() {
  return <div>
    <div>Blog Page</div>
    <Link href='/'>
      <a>
        <code>Go to Home Page</code>
      </a>
    </Link>
  </div>
}
export default Blog