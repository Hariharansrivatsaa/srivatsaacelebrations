import { create } from "zustand";

export const useAuthStore = create((set) => ({
  // Initialize isLoggedIn correctly based on sessionStorage
  isLoggedIn: sessionStorage.getItem("login") === "true",

  // Set login status and store in sessionStorage as a string
  setLogin: (status) => {
    set(() => ({ isLoggedIn: status }));
    sessionStorage.setItem("login", status ? "true" : "false");
  },

  // Logout function to reset login status and remove session keys
  logout: () => {
    set(() => ({ isLoggedIn: false }));
    sessionStorage.removeItem("login"); // Remove login status
    sessionStorage.removeItem("userId"); // Remove userId (if used elsewhere)
  },
}));
