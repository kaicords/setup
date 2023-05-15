import Navigation from "./src/layout/Navigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
export default function App() {
  // prepare required fonts

  const [fontsLoaded] = useFonts({
    LobsterReg: require("./src/assets/fonts/Lobster-Regular.ttf"),
  });

  // Wait for fonts to load before applcation starts
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return <Navigation />;
}
