import Link from "next/link";
import { MainLayout } from "../components/ui/layout";

export default function HomePage () {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <a>
          <div className="text-3xl">Home Page</div>
          <Link href='/blog'>
            <a>
              <button>Go to Blog Page</button>
            </a>
          </Link>
        </a>
      </div>
    </div>
  )
}

HomePage.Layout = MainLayout;