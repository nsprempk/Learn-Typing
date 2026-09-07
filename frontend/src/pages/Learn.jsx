import { BookOpen } from "lucide-react";
import LessonCard from "../components/learning/LessonCard";
import LessonProgress from "../components/learning/LessonProgress";
import { lessons } from "../data/lessons";
import SEO from "../components/SEO";

export default function Learn() {
  const completed = 3;

  return (
    <>
      <SEO
        title="Learn Touch Typing"
        description="Learn touch typing step by step with typing lessons, practice exercises, typing quizzes, and accuracy training."
        path="/learn"
      />
      <div className="page-container py-10">
        <div>
          <p className="text-sm font-semibold text-blue-600">LEARN TYPING</p>

          <h1 className="mt-1 text-3xl font-black text-slate-900 dark:text-white">
            Build your typing skills
          </h1>

          <p className="mt-2 max-w-2xl text-slate-500">
            Follow structured lessons and gradually move from individual keys to
            fluent sentence typing.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="grid gap-5 sm:grid-cols-2">
            {lessons.map((lesson, index) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                completed={index < completed}
                locked={index > completed + 1}
              />
            ))}
          </div>

          <div className="space-y-5">
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40">
                  <BookOpen size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Typing Course
                  </h3>

                  <p className="text-xs text-slate-500">Beginner to advanced</p>
                </div>
              </div>

              <div className="mt-6">
                <LessonProgress completed={completed} total={lessons.length} />
              </div>
            </div>

            <div className="rounded-2xl bg-blue-600 p-6 text-white">
              <p className="text-sm font-semibold text-blue-100">TIP</p>

              <p className="mt-2 text-lg font-bold">
                Focus on accuracy before speed.
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-100">
                Speed naturally improves as your fingers learn where each key
                is.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
