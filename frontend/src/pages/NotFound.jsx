import { Link } from "react-router-dom";

import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <div className="page-container flex min-h-[600px] items-center justify-center py-20">
      <div className="text-center">
        <p className="text-7xl font-black text-blue-600">404</p>

        <h1 className="mt-5 text-3xl font-black text-slate-900 dark:text-white">
          Page not found
        </h1>

        <p className="mt-3 text-slate-500">
          The page you're looking for doesn't exist.
        </p>

        <Link to="/" className="mt-6 inline-block">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
