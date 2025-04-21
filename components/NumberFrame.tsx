import images from "@/constants/images";
import Styles_NumberFrame from "@/styles/styles_NumberFrame";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const NumberFrame = () => {

    const displayNum = (num: number) => {
        switch (num) {
            case 10: return 0
            case 9: return null
            case 11: return images.closedEye
            default: return (num + 1)
        }
    }

    return (
        <View style={Styles_NumberFrame.main}>
            {[...Array(12)].map((_, num) => <TouchableOpacity style={Styles_NumberFrame.each} key={num}>
                {num !== 11 ?  <Text style={Styles_NumberFrame.text}>{displayNum(num)}</Text> : <Image source={images.backspace} />}
            </TouchableOpacity>)}
        </View>
    )
}

export default NumberFrame
