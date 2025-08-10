import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="px-3 py-1.5 text-xs font-medium">
        Light Theme
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-1.5 text-xs font-medium hover:bg-accent/20 hover:text-accent transition-all duration-300"
    >
      {theme === "dark" ? "Light Theme" : "Dark Theme"}
    </Button>
  );
};