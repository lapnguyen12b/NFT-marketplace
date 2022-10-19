import Link from "next/link";
import { MainLayout } from "../components/ui/layout";

export default function HomePage () {
  return <div>
      <a>
        <code>Home Page</code>
        <Link href='/blog'>
          <a>
            <button>Go to Blog Page</button>
          </a>
        </Link>
      </a>
  </div>
}

HomePage.Layout = MainLayout;