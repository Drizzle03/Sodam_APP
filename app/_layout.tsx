import { useFonts } from "expo-font";
import { Slot, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import "../global.css";

import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { initI18n } from "@/utils/i18n";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const ALL_STEPS_READY = 2;

export default function RootLayout() {
  const router = useRouter();
  const [stepsReady, setStepsReady] = useState(0);
  const [loaded, error] = useFonts({
    Pretendard: require("../assets/fonts/PretendardVariable.ttf"),
  });

  console.log("loaded", loaded);
  console.log("error", error);

  useEffect(() => {
    if (stepsReady !== ALL_STEPS_READY) return;

    setTimeout(() => {
      SplashScreen.hideAsync();
      router.replace("/home");
    }, 1500);
  }, [stepsReady]);

  useEffect(() => {
    if (loaded) {
      console.log("loaded");
      setStepsReady(stepsReady + 1);
    }
  }, [loaded]);

  useEffect(() => {
    initI18n(() => setStepsReady(stepsReady + 1));
  }, [router]);

  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
