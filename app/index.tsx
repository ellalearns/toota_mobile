import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import SplashScreen from "./splash_screen";
import MainAppPage from "./main_app";

export default function Index() {

  const [splashScreen, setSplashScreen] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSplashScreen(false)
  //   }, 2000)
  // });

  return (
    
    (splashScreen) ? <SplashScreen /> : <MainAppPage />
    
  );
}
