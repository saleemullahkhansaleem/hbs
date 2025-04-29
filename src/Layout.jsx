import { Outlet } from "react-router-dom";
import { Footer, Header, ScrollToTop } from "./components";
import { useEffect, useLayoutEffect, useState } from "react";
import { Toaster } from "./components/ui/toaster";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(true);

  useLayoutEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setDarkMode(theme === "dark");
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main
      className={`bg-background text-foreground ${
        darkMode ? "dark" : ""
      }`}
    >
      <ScrollToTop />
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className="">
        <Outlet />
      </div>
      <Footer setDarkMode={setDarkMode} darkMode={darkMode} />
      <Toaster />
    </main>
  );
}
