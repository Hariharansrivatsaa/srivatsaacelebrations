import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isLoggedIn: sessionStorage.getItem("login") === "true",
  setLogin: (status) => {
    set(() => ({ isLoggedIn: status }));
    sessionStorage.setItem("login", status);
  },
  logout: () => {
    set(() => ({ isLoggedIn: false }));
    sessionStorage.removeItem("login");
  },
}));
