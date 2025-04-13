import images from "@/constants/images";
import styles_PageIcon from "@/styles/styles_PageIcon";
import React from "react";
import { Image, Text, View } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg"

const PageIcon = () => {
    return (
        <View style={styles_PageIcon.container}>
            <View style={styles_PageIcon.container}>
                <Svg height="100" width="100">
                    <Defs>
                        <RadialGradient
                            id="grad"
                            cx="50%"
                            cy="50%"
                            rx="50%"
                            ry="50%"
                            fx="50%"
                            fy="50%">
                            <Stop offset="0%" stopColor="#fefaf3" stopOpacity="1" />
                            <Stop offset="80%" stopColor="#fff9f1" stopOpacity="1" />
                            <Stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>
                    <Rect x="0%" y="0%" width="100%" height="100%" fill="url(#grad)" />
                </Svg>
            </View>
            <Image source={images.logo} style={styles_PageIcon.image} />
        </View>
    )
}

export default PageIcon
