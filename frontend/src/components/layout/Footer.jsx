import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      {" "}
      <div className="page-container py-8">
        {" "}
        <div className="flex flex-col gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          {" "}
          {/* Brand */}{" "}
          <div>
            {" "}
            <p className="font-semibold text-slate-900 dark:text-white">
              {" "}
              LearnTyping{" "}
            </p>{" "}
            <p className="mt-1 text-sm text-slate-500">
              {" "}
              Practice. Improve. Master typing.{" "}
            </p>{" "}
          </div>{" "}
          {/* Legal Links */}{" "}
          <nav
            aria-label="Legal"
            className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end"
          >
            {" "}
            <Link
              to="/privacy-policy"
              className="text-sm text-slate-500 transition hover:text-slate-900 dark:hover:text-white"
            >
              {" "}
              Privacy Policy{" "}
            </Link>{" "}
            <Link
              to="/terms"
              className="text-sm text-slate-500 transition hover:text-slate-900 dark:hover:text-white"
            >
              {" "}
              Terms & Conditions{" "}
            </Link>{" "}
            <Link
              to="/cookie-policy"
              className="text-sm text-slate-500 transition hover:text-slate-900 dark:hover:text-white"
            >
              {" "}
              Cookie Policy{" "}
            </Link>{" "}
          </nav>{" "}
        </div>{" "}
        {/* Copyright */}{" "}
        <div className="mt-6 border-t border-slate-100 pt-5 text-center dark:border-slate-800">
          {" "}
          <p className="text-sm text-slate-500">
            {" "}
            © {new Date().getFullYear()} LearnTyping. All rights reserved.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
