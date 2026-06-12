import useLocalStorage from "./useLocalStorage";
import "./theme.css";
function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  }
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="conatainer">
        <p>Hello, World!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}

export default ThemeSwitch;
