/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import {
  THEME_PRESETS,
  DEFAULT_THEME_ID,
  getThemePreset,
  applyThemeTokens,
  type ThemePreset,
} from "@/config/themes";

export type Theme = "dark" | "light" | "system";

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultPreset?: string;
  storageKey?: string;
  presetStorageKey?: string;
};

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  preset: string;
  setPreset: (presetId: string) => void;
  activePreset: ThemePreset;
  presets: ThemePreset[];
  cyclePreset: () => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
  preset: DEFAULT_THEME_ID,
  setPreset: () => null,
  activePreset: getThemePreset(DEFAULT_THEME_ID),
  presets: THEME_PRESETS,
  cyclePreset: () => null,
};

const ThemeProviderContext =
  React.createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  defaultPreset = "cyber",
  storageKey = "vite-ui-theme",
  presetStorageKey = "portfolio-theme-preset",
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  // Permanently locked to Industrial Cyber on website
  const preset = "cyber";
  const activePreset = React.useMemo(() => getThemePreset("cyber"), []);

  // Apply dark/light class and dynamic tokens
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    let isDark = true;
    if (theme === "system") {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(isDark ? "dark" : "light");
    } else {
      isDark = theme === "dark";
      root.classList.add(theme);
    }

    applyThemeTokens(activePreset, isDark);
  }, [theme, activePreset]);

  const setTheme = React.useCallback(
    (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setThemeState(newTheme);
    },
    [storageKey]
  );

  // Preset locked: no-op to prevent theme changing from UI
  const setPreset = React.useCallback((_newPresetId: string) => {}, []);
  const cyclePreset = React.useCallback(() => {}, []);

  const value = React.useMemo(
    () => ({
      theme,
      setTheme,
      preset,
      setPreset,
      activePreset,
      presets: THEME_PRESETS,
      cyclePreset,
    }),
    [theme, setTheme, preset, setPreset, activePreset, cyclePreset]
  );

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
