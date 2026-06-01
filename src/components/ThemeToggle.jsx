import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="theme-toggle"
    >
      {dark ? (
        <>
          <FaSun /> Light
        </>
      ) : (
        <>
          <FaMoon /> Dark
        </>
      )}
    </button>
  );
}