import { ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import React from "react";
import Root from "./src/index";
import store from "./src/store";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator />
  }
  
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}