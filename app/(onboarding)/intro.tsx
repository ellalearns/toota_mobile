import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const TootaIntro = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>Final Onboarding Screen</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default TootaIntro
