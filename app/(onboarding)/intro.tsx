import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import copy from "@/constants/texts";
import SkipButton from "@/components/SkipButton";

const TootaIntro = () => {

    const headers = copy.onHeaders
    const text = copy.onText
    

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <SkipButton onPress={() => {}} />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default TootaIntro
