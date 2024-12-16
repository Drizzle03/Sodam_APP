import { vars } from "nativewind";

export const themes = {
  light: vars({
    "--color-text-primary": "#000",
    "--color-text-secondary": "#888",
    "--color-background-primary": "#fff",
    "--color-background-secondary": "#ddd",
    "--color-border-primary": "#ddd",
  }),
  dark: vars({
    "--color-text-primary": "#fff",
    "--color-text-secondary": "#888",
    "--color-background-primary": "#000",
    "--color-background-secondary": "#222",
    "--color-border-primary": "#333",
  }),
};
