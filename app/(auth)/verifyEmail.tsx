import NumberFrame from "@/components/NumberFrame";
import OTPFrame from "@/components/OTPFrame";
import Styles_VerifyEmail from "@/styles/styles_VerifyEmail";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { SafeAreaFrameContext, SafeAreaProvider } from "react-native-safe-area-context";

const VerifyEmail = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={Styles_VerifyEmail.main}>
                <OTPFrame />
                <NumberFrame />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default VerifyEmail
