import { ThemeProvider } from "@/providers/ThemeProvider";
import { Stack } from "expo-router";

const AppLayout = () => {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
};

export default AppLayout;
