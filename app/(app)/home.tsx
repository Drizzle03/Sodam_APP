import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  console.log("Home");
  return (
    <View className="flex-1 bg-primary">
      <StatusBar style="auto" />
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView>
        <View className="h-full">
          <Text className="text-black text-xl font-bold">Home</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
