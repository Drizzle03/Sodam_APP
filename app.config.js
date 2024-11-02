const IS_DEV = process.env.APP_VARIANT === "development";

export default {
  name: IS_DEV ? "(dev) petlog" : "petlog",
  slug: "petlog",
  version: "1.0.0",
  orientation: "portrait",
  icon: IS_DEV ? "./assets/images/icon-dev.png" : "./assets/images/icon.png",
  scheme: "petlog",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    googleServicesFile: "./GoogleService-Info.plist",
    supportsTablet: true,
    bundleIdentifier: IS_DEV
      ? "com.house201.petlog.dev"
      : "com.house201.petlog",
    infoPlist: {
      CFBundleURLSchemes: [
        IS_DEV ? "com.house201.petlog.dev" : "com.house201.petlog",
      ],
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    "@react-native-firebase/app",
    [
      "react-native-google-mobile-ads",
      {
        iosAppId: "ca-app-pub-2507125479501117~3502349125",
        androidAppId: "ca-app-pub-2507125479501117~1641536764",
      },
    ],
    "@react-native-firebase/crashlytics",
    [
      "expo-build-properties",
      {
        ios: {
          useFrameworks: "static",
        },
        android: {
          minSdkVersion: 24,
        },
      },
    ],
    "expo-localization",
    // [
    //   "expo-font",
    //   {
    //     fonts: ["./assets/fonts/PretendardVariable.ttf"],
    //   },
    // ],
  ],
  owner: "sgwanlee",
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: "f670bcd7-0c03-4bda-bccb-366276aeef82",
    },
  },
};
