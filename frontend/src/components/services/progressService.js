import api from "./api";

export async function getTodayProgress() {
  const response = await api.get("/progress/today");

  return response.data;
}

export async function getWeeklyProgress() {
  const response = await api.get("/progress/week");

  return response.data;
}

export async function getMonthlyProgress() {
  const response = await api.get("/progress/month");

  return response.data;
}

export async function getStreak() {
  const response = await api.get("/progress/streak");

  return response.data;
}
