import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const defaultUser = {
  id: "demo-user",
  name: "Demo User",
  email: "demo@example.com",
  currentLevel: 4,
  bestWpm: 67,
  averageWpm: 56,
  averageAccuracy: 96.4,
  currentStreak: 7,
  longestStreak: 18,
  totalPracticeTime: 8040,
  totalTests: 34,
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("typingUser");

    return stored ? JSON.parse(stored) : null;
  });

  function login(email, password) {
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }

    const loggedUser = {
      ...defaultUser,
      email,
      name: email.split("@")[0],
    };

    setUser(loggedUser);
    localStorage.setItem("typingUser", JSON.stringify(loggedUser));

    return loggedUser;
  }

  function signup(name, email, password) {
    if (!name || !email || !password) {
      throw new Error("All fields are required.");
    }

    const newUser = {
      ...defaultUser,
      id: Date.now().toString(),
      name,
      email,
      currentLevel: 1,
      bestWpm: 0,
      averageWpm: 0,
      averageAccuracy: 0,
      currentStreak: 1,
      longestStreak: 1,
      totalPracticeTime: 0,
      totalTests: 0,
    };

    setUser(newUser);

    localStorage.setItem("typingUser", JSON.stringify(newUser));

    return newUser;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("typingUser");
  }

  function updateUser(updates) {
    setUser((current) => {
      if (!current) return current;

      const updated = {
        ...current,
        ...updates,
      };

      localStorage.setItem("typingUser", JSON.stringify(updated));

      return updated;
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        login,
        signup,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
