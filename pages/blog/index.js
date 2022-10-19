import Link from "next/link"
import { MainLayout } from "../../components/ui/layout"

function Blog() {
  return <div>
    <div>Blog Page</div>
    <Link href='/'>
      <a>
        <button>Go to Home Page</button>
      </a>
    </Link>
  </div>
}
export default Blog
Blog.Layout = MainLayout