import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import SplashScreen from "./splash_screen";
import MainAppPage from "./main_app";
import Role from "./(onboarding)/role";
import WelcomeScreen from "./(auth)/welcomeScreen";
import TootaIntro from "./(onboarding)/intro";
import Auth from "./(auth)/auth";
import VerifyEmail from "./(auth)/verifyEmail";

export default function Index() {

  const [splashScreen, setSplashScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false)
    }, 2000)
  });

  return (

    // (splashScreen) ? <SplashScreen /> : <Role />

    // <WelcomeScreen />

    // <TootaIntro />

    <Auth action="login" />

    // <VerifyEmail email="ella@gmail.com" />

  );
}
