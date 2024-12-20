import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WebView from "react-native-webview";

const Home = () => {
  const insets = useSafeAreaInsets();
  console.log(process.env.EXPO_PUBLIC_OPENAI_API_KEY);
  return (
    <View className="flex-1 bg-primary">
      <StatusBar style="auto" />
      <Stack.Screen options={{ headerShown: false }} />
      <View
        className="flex-1"
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      >
        {/* 웹뷰 */}
        <WebView
          key={1}
          source={{
            uri: `https://chat-sodam.vercel.app/?apiKey=${process.env.EXPO_PUBLIC_OPENAI_API_KEY}`,
          }}
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
          originWhitelist={["*"]}
        />
      </View>
    </View>
  );
};

export default Home;
