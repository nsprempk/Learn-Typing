import { ArrowLeft, RotateCcw, Home } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import Button from "../components/common/Button";
import TestResultCard from "../components/typing/TestResultCard";

export default function TestResult() {
  const navigate = useNavigate();

  const result = (() => {
    try {
      return JSON.parse(sessionStorage.getItem("lastTypingResult"));
    } catch {
      return null;
    }
  })();

  if (!result) {
    return (
      <div className="page-container py-20 text-center">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">
          No test result found
        </h1>

        <p className="mt-3 text-slate-500">
          Complete a typing test to see your results.
        </p>

        <Link to="/typing-test" className="mt-6 inline-block">
          <Button>Start Test</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container py-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white"
      >
        <ArrowLeft size={17} />
        Back
      </button>

      <div className="mx-auto mt-8 max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-600">TEST COMPLETE</p>

          <h1 className="mt-2 text-4xl font-black text-slate-900 dark:text-white">
            Great work!
          </h1>

          <p className="mt-2 text-slate-500">Here's how you performed.</p>
        </div>

        <div className="mt-8">
          <TestResultCard result={result} />
        </div>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/typing-test">
            <Button className="w-full sm:w-auto">
              <RotateCcw size={17} className="mr-2 inline" />
              Try Again
            </Button>
          </Link>

          <Link to="/dashboard">
            <Button variant="outline" className="w-full sm:w-auto">
              <Home size={17} className="mr-2 inline" />
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
