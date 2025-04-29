import { useState, useEffect } from "react";
import SplashScreen from "./splash_screen";
import Role from "./(onboarding)/role";

export default function Index() {

  const [splashScreen, setSplashScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false)
    }, 2000)
  });

  return (
    (splashScreen) ? <SplashScreen /> : <Role />
  );
}
