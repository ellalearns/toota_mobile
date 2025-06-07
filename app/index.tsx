import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import DashboardScreen from "./dashboard_user/DashboardScreen";
import RouteScreen from "./dashboard_user/routescreen";
import SplashScreen from "./splash_screen";

const Stack = createNativeStackNavigator();

export default function Index() {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScreen(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (splashScreen) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="RouteScreen" component={RouteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

