import { useState, useEffect } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

function loadAppFonts() {
  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
          "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
          "Roboto-700": require("../../assets/fonts/Roboto-Bold.ttf"),
          "Roboto-300": require("../../assets/fonts/Roboto-Light.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
        await SplashScreen.hideAsync();
      }
    }
    loadFonts();
  }, []);
  return isAppReady;
}

export default loadAppFonts;
