import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {

  const [splashScreen, setSplashScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false)
    }, 2000)
  });

  return (
    
    (splashScreen) ? <View>
      <Text>I was returned instead</Text>
    </View> : <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome</Text>
    </View>
  );
}
