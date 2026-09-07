import {
  ArrowRight,
  BarChart3,
  Keyboard,
  Trophy,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <SEO
        title="Free Typing Test & Learn Typing Online"
        description="Learn typing online with free typing tests, typing lessons, typing quizzes, and daily progress tracking. Improve your typing speed, accuracy, and confidence."
        path="/"
        keywords="learn typing, typing test, typing practice, online typing test, typing speed test, improve typing speed, typing lessons, typing quiz"
      />

      <section className="overflow-hidden">
        <div className="page-container">
          <div className="grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-950/40">
                <Keyboard size={16} />
                Improve your typing every day
              </div>

              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                Learn typing.
                <br />
                <span className="gradient-text">Type faster.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                Learn typing online with free typing tests, interactive lessons,
                typing quizzes, and detailed progress tracking. Practice
                regularly and improve your typing speed and accuracy.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={isAuthenticated ? "/typing-test" : "/signup"}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
                >
                  {isAuthenticated
                    ? "Start Typing Test"
                    : "Start Learning Free"}

                  <ArrowRight size={18} />
                </Link>

                <Link
                  to={isAuthenticated ? "/learn" : "/login"}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                >
                  Explore Typing Lessons
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Today's Typing</p>

                    <p className="mt-1 text-3xl font-black text-slate-900 dark:text-white">
                      67 WPM
                    </p>
                  </div>

                  <div className="rounded-xl bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-600 dark:bg-emerald-950/30">
                    +12%
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-slate-50 p-6 font-mono text-sm leading-8 dark:bg-slate-950">
                  <span className="text-slate-900 dark:text-white">
                    The quick brown fox
                  </span>{" "}
                  <span className="text-emerald-500">jumps over</span>{" "}
                  <span className="text-slate-400">the lazy dog.</span>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <MiniStat label="WPM" value="67" />
                  <MiniStat label="Accuracy" value="98%" />
                  <MiniStat label="Streak" value="7 🔥" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-900">
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-blue-600">EVERYTHING YOU NEED</p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
              Everything you need to improve your typing
            </h2>

            <p className="mt-4 text-slate-500">
              Practice with purpose and track your typing progress over time.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Feature
              icon={Keyboard}
              title="Free Typing Tests"
              text="Measure your words per minute, characters per minute, accuracy, and typing errors with realistic typing tests."
            />

            <Feature
              icon={BookOpen}
              title="Typing Lessons"
              text="Learn touch typing step by step, from home-row basics to letters, words, sentences, and advanced practice."
            />

            <Feature
              icon={BarChart3}
              title="Track Your Progress"
              text="Monitor your daily typing practice, speed, accuracy, personal records, and learning streaks."
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="page-container">
          <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-12">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <Trophy className="text-yellow-400" size={40} />

                <h2 className="mt-5 text-3xl font-black">
                  Make typing a daily habit
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  Practice every day, earn achievements, build typing streaks,
                  and challenge yourself to beat your personal best.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Achievement text="7 Day Streak" />
                <Achievement text="50 WPM" />
                <Achievement text="95% Accuracy" />
                <Achievement text="10K Characters" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Start your typing practice today
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Whether you are a beginner learning touch typing or an experienced
              typist looking to improve your speed and accuracy, Learn Typing
              gives you the tools to practice and measure your progress.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to={isAuthenticated ? "/typing-test" : "/signup"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white hover:bg-blue-700"
              >
                Start Typing Practice
                <ArrowRight size={18} />
              </Link>

              <Link
                to={isAuthenticated ? "/learn" : "/signup"}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3.5 font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200"
              >
                Learn Touch Typing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-xl bg-white p-3 text-center dark:bg-slate-900">
      <p className="text-xs text-slate-500">{label}</p>

      <p className="mt-1 font-bold text-slate-900 dark:text-white">{value}</p>
    </div>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
        <Icon size={23} />
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-500">{text}</p>
    </div>
  );
}

function Achievement({ text }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-center text-sm font-semibold">
      🏆 {text}
    </div>
  );
}
