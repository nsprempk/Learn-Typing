import { useState } from "react";

import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Card from "../components/common/Card";

import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, updateUser } = useAuth();

  const [name, setName] = useState(user?.name || "");

  const [saved, setSaved] = useState(false);

  function saveProfile(event) {
    event.preventDefault();

    updateUser({
      name,
    });

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  }

  return (
    <div className="page-container py-10">
      <div>
        <p className="text-sm font-semibold text-blue-600">PROFILE</p>

        <h1 className="mt-1 text-3xl font-black text-slate-900 dark:text-white">
          Your profile
        </h1>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[300px_1fr]">
        <Card className="p-6 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-3xl font-black text-blue-600 dark:bg-blue-950 dark:text-blue-300">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <h2 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
            {user?.name}
          </h2>

          <p className="mt-1 text-sm text-slate-500">{user?.email}</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Mini label="Best WPM" value={user?.bestWpm || 0} />

            <Mini label="Tests" value={user?.totalTests || 0} />
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Personal Information
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Update your profile information.
          </p>

          {saved && (
            <div className="mt-5 rounded-xl bg-emerald-50 p-3 text-sm font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">
              Profile updated successfully.
            </div>
          )}

          <form onSubmit={saveProfile} className="mt-6 max-w-xl space-y-5">
            <Input
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input label="Email" value={user?.email || ""} disabled />

            <Button type="submit">Save Changes</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

function Mini({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-950">
      <p className="text-xs text-slate-500">{label}</p>

      <p className="mt-1 font-bold text-slate-900 dark:text-white">{value}</p>
    </div>
  );
}
