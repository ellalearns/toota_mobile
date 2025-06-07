import Styles_OTPFrame from "@/styles/styles_OTPFrame";
import React from "react";
import { Text, View } from "react-native";

type OTPFrameProps = {
    otp: Array<number>
}

const OTPFrame = ({ otp }: OTPFrameProps) => {
    return (
        <View style={Styles_OTPFrame.main}>
            {[...Array(4)].map((_, i) =>
                <View style={Styles_OTPFrame.each} key={i}>
                    <Text style={Styles_OTPFrame.text}>{otp[i] === -1 ? null : otp[i]}</Text>
                </View>
            )}
        </View>
    )
}

export default OTPFrame
