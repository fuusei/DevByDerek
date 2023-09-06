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
      <Button
        isIconOnly
        onClick={handleThemeSwitch}
        variant="bordered"
        className="overflow-visible rounded-full hover:text-content2 hover:-translate-y-1 shadow-xl after:content-[''] after:absolute after:rounded-full after:inset-0  after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      >
        {ThemeIcon}
      </Button>
    </div>
  );
}
