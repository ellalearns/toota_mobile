import BackButton from "@/components/BackButton";
import MainButton from "@/components/MainButton";
import NumberFrame from "@/components/NumberFrame";
import OTPFrame from "@/components/OTPFrame";
import OutlineButton from "@/components/OutlineButton";
import ViewBreak from "@/components/ViewBreak";
import sendOtp from "@/services/sendOtp";
import Styles_VerifyEmail from "@/styles/styles_VerifyEmail";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, View, Text, ToastAndroid } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
type VerifyEmailProps = {
    email: string
}

const VerifyEmail = () => {
    const { email } = useLocalSearchParams<VerifyEmailProps>()

    const router = useRouter()

    const [ OTP, setOTP ] = useState([-1, -1, -1, -1])
    const [ currentPosition, setCurrentPosition] = useState(0)

    const checkOTPStatus = () => {
        for (const num of OTP) {
            if (num === -1) {
                return false
            }
        }
        return true
    }

    const getOTP = (arr : Array<number>) => {
        let otp = ""
        for (const a in arr) {
            otp += arr[a].toString()
        }
        return otp
    }

    const sendOTP = async () => {
        const userOTP = {
            "email": email,
            "otp": getOTP(OTP)
        }

        const otp = await sendOtp({ data: userOTP })

        if (otp instanceof Error) {
            ToastAndroid.show("wrong otp", 1000)
        } else {
            router.push("/main_app")
        }
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={Styles_VerifyEmail.main}>
                <View style={Styles_VerifyEmail.default_padding}>
                    <BackButton onPress={() => { }} />
                </View>
                <View style={Styles_VerifyEmail.default_padding}>
                    <Text  style={Styles_VerifyEmail.header_text}>OTP Verification</Text>
                    <Text style={Styles_VerifyEmail.body_text}>To complete your sign-up, please enter the OTP sent to your email  
                        <Text style={Styles_VerifyEmail.email}>{" => " + email}</Text>
                        </Text>
                </View>
                <ViewBreak />
                <View style={Styles_VerifyEmail.default_padding}>
                    <OTPFrame otp={OTP}/>
                    <NumberFrame otp={OTP} setOtp={setOTP} currentPosition={currentPosition} setCurrentPosition={setCurrentPosition} />
                </View>
                <View style={Styles_VerifyEmail.default_padding}>
                    <MainButton text="Continue" pressFun={sendOTP} isEmpty={checkOTPStatus()} isEmptyMessage="incomplete otp" />
                    <OutlineButton text="Resend code" pressFun={() => { }} />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default VerifyEmail
