import { useTranslation } from "react-i18next";
import { Linking, Pressable, Text } from "react-native";
import { View } from "react-native";
import Constants from "expo-constants";
import * as StoreReview from "expo-store-review";

const SettingsAppInfo = () => {
  const { t } = useTranslation();

  const handleWriteReview = async () => {
    if (await StoreReview.hasAction()) {
      await StoreReview.requestReview();
    }
  };

  const handleSendEmail = () => {
    Linking.openURL("mailto:house201app@gmail.com");
  };

  return (
    <View className="rounded-xl bg-primary p-4">
      <Text className="text-xl text-secondary pb-8">
        {t("settings.appInfo")}
      </Text>
      <View className="gap-6">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg text-primary">{t("settings.version")}</Text>
          <Text className="text-lg text-secondary">
            {Constants.expoConfig?.version}
          </Text>
        </View>
        <Pressable onPress={handleWriteReview}>
          <Text className="text-lg text-primary">
            {t("settings.writeReview")}
          </Text>
        </Pressable>
        <Pressable onPress={handleSendEmail}>
          <Text className="text-lg text-primary">
            {t("settings.feedbackEmail")}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SettingsAppInfo;
