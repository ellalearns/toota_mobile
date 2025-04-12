import PageIcon from "@/components/PageIcon";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <PageIcon />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default SignUp
