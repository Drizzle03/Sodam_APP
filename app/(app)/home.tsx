import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [apiKey, setApiKey] = useState<string>();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    AsyncStorage.getItem("apiKey").then((value) => {
      if (value) {
        setApiKey(value);
      }
    });
  }, []);

  useEffect(() => {
    if (apiKey) {
      AsyncStorage.setItem("apiKey", apiKey);
    }
  }, [apiKey]);

  return (
    <View className="flex-1 bg-primary">
      <StatusBar style="auto" />
      <Stack.Screen options={{ headerShown: false }} />
      <View
        className="flex-1"
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      >
        {!apiKey && (
          <View className="flex-1 justify-center items-center ">
            <Text className="text-primary font-bold">
              Enter your openai api key
            </Text>
            <TextInput
              value={apiKey}
              onChangeText={setApiKey}
              placeholder="Enter your openai api key"
              className="text-primary border h-10"
            />
          </View>
        )}
        {/* 웹뷰 */}
        {apiKey && (
          <WebView
            key={1}
            source={{
              uri: `https://chat-sodam.vercel.app/?apiKey=${apiKey}`,
            }}
            allowsInlineMediaPlayback={true}
            mediaPlaybackRequiresUserAction={false}
            originWhitelist={["*"]}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
