import api from "./api";

export async function getTypingTest(params) {
  const response = await api.get("/typing/test", {
    params,
  });

  return response.data;
}

export async function saveTypingResult(data) {
  const response = await api.post("/typing/result", data);

  return response.data;
}

export async function getTypingHistory() {
  const response = await api.get("/typing/history");

  return response.data;
}

export async function getBestTypingResult() {
  const response = await api.get("/typing/best");

  return response.data;
}
