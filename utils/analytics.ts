import analytics from "@react-native-firebase/analytics";

export const EVENT_NAMES = {};

export const logEvent = ({
  event,
  params,
}: {
  event: string;
  params?: Record<string, any>;
}) => {
  console.log("logEvent", event);
  analytics().logEvent(event, params);
};
