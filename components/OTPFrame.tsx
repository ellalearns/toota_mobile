import Styles_OTPFrame from "@/styles/styles_OTPFrame";
import React from "react";
import { View } from "react-native";

const OTPFrame = () => {
    return (
        <View style={Styles_OTPFrame.main}>
            <View style={Styles_OTPFrame.each} key={1}></View>
            <View style={Styles_OTPFrame.each} key={2}></View>
            <View style={Styles_OTPFrame.each} key={3}></View>
            <View style={Styles_OTPFrame.each} key={4}></View>
        </View>
    )
}

export default OTPFrame
