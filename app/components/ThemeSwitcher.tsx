"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { Button } from "@nextui-org/react";

interface Icons {
  [key: string]: React.ReactNode;
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("dark");

  const handleThemeSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  const icons: Icons = { light: <BsFillMoonFill />, dark: <BsSunFill /> };
  const ThemeIcon = icons[currentTheme];

  return (
    <div>
      <Button isIconOnly onClick={handleThemeSwitch}>
        {ThemeIcon}
      </Button>
    </div>
  );
}
