import BackButton from "@/components/BackButton";
import MainButton from "@/components/MainButton";
import NumberFrame from "@/components/NumberFrame";
import OTPFrame from "@/components/OTPFrame";
import OutlineButton from "@/components/OutlineButton";
import ViewBreak from "@/components/ViewBreak";
import Styles_VerifyEmail from "@/styles/styles_VerifyEmail";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, ToastAndroid } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const VerifyEmail = () => {

    const [ OTP, setOTP ] = useState([-1, -1, -1, -1])
    const [ currentPosition, setCurrentPosition] = useState(0)

    const [ testOtp, setTestOtp ] = useState(0)

    return (
        <SafeAreaProvider>
            <SafeAreaView style={Styles_VerifyEmail.main}>
                <View style={Styles_VerifyEmail.default_padding}>
                    <BackButton onPress={() => { }} />
                </View>
                <View style={Styles_VerifyEmail.default_padding}>
                    <Text  style={Styles_VerifyEmail.header_text}>OTP Verification</Text>
                    <Text style={Styles_VerifyEmail.body_text}>To complete your sign-up, please enter the OTP sent to your email  
                        <Text style={Styles_VerifyEmail.email}> urmail@gmail.com</Text>
                        </Text>
                </View>
                <ViewBreak />
                <View style={Styles_VerifyEmail.default_padding}>
                    <OTPFrame otp={OTP}/>
                    <NumberFrame otp={OTP} setOtp={setOTP} currentPosition={currentPosition} setCurrentPosition={setCurrentPosition} />
                </View>
                <View style={Styles_VerifyEmail.default_padding}>
                    <MainButton text="Continue" pressFun={() => { }} isEmpty />
                    <OutlineButton text="Resend code" pressFun={() => { }} />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default VerifyEmail
