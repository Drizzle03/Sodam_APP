import { themes } from "@/utils/theme";
import { useColorScheme } from "nativewind";
import { createContext } from "react";
import { View } from "react-native";

export const ThemeContext = createContext<{ theme: "light" | "dark" }>({
  theme: "light",
});
interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { colorScheme } = useColorScheme();
  return (
    <ThemeContext.Provider value={{ theme: colorScheme! }}>
      <View style={themes[colorScheme!]} className="flex-1">
        {children}
      </View>
    </ThemeContext.Provider>
  );
};
