import Link from "next/link";
const EmptyLayout = ({children}) => {
  return (
    <div>
        {children}
        <h1>Not Found 404</h1>
        <Link href='/'>
          <a>
            <button>Go to Home Page</button>
          </a>
    </Link>
    </div>
  )
}
export default EmptyLayout