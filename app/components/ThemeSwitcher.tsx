"use client";
import { useTheme } from "next-themes";
import { useIsSSR } from "react-aria";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { Button } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";

interface Icons {
  [key: string]: React.ReactNode;
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  let icons: Icons = { light: <BsFillMoonFill />, dark: <BsSunFill /> };
  let ThemeIcon = icons[theme || "dark"];
  const isSSR = useIsSSR();

  const handleThemeSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    ThemeIcon = icons[newTheme];
  };

  return (
    <div>
      {isSSR ? (
        <Spinner />
      ) : (
        <Button
          isIconOnly
          onPress={handleThemeSwitch}
          className="bg-content1 rounded-full hover:text-content2 hover:-translate-y-1"
        >
          {ThemeIcon}
        </Button>
      )}
    </div>
  );
}
