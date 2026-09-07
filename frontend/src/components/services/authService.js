import api from "./api";

export async function loginUser(data) {
  const response = await api.post("/auth/login", data);

  return response.data;
}

export async function signupUser(data) {
  const response = await api.post("/auth/signup", data);

  return response.data;
}

export async function getCurrentUser() {
  const response = await api.get("/auth/me");

  return response.data;
}
