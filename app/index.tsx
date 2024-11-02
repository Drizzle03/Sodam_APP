import { ActivityIndicator, View } from "react-native";

const StartScreen = () => {
  return (
    <View className="flex-1 justify-center bg-black">
      <ActivityIndicator size="large" />
    </View>
  );
};

export default StartScreen;
