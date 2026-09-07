import api from "./api";

export async function getLessons() {
  const response = await api.get("/lessons");

  return response.data;
}

export async function getLesson(id) {
  const response = await api.get(`/lessons/${id}`);

  return response.data;
}

export async function saveLessonProgress(id, data) {
  const response = await api.post(`/lessons/${id}/progress`, data);

  return response.data;
}

export async function getLessonProgress() {
  const response = await api.get("/lessons/progress");

  return response.data;
}
