import { Keyboard } from "lucide-react";

import SignupForm from "../components/auth/SignupForm";

export default function Signup() {
  return (
    <div className="page-container py-16">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <Keyboard size={27} />
          </div>

          <h1 className="mt-5 text-3xl font-black text-slate-900 dark:text-white">
            Create your account
          </h1>

          <p className="mt-2 text-slate-500">
            Start improving your typing today.
          </p>
        </div>

        <div className="card p-6 sm:p-8">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
