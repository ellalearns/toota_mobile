import React from "react";
import { Dimensions, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient"

const SplashScreen = () => {

    const { width, height } = Dimensions.get("screen")
    const stripeHeight = height / 3

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: "#f99e1a"
            }}>

            <View
                style={{
                    backgroundColor: "#223311",
                    position: "absolute",
                    top: "25%",
                    height: height / 5,
                    width: width * 2,
                    left: -70,
                    right: 0,
                    transform: [{
                        rotate: "22deg"
                    }]
                }}></View>

            <View
                style={{
                    backgroundColor: "#223311",
                    position: "absolute",
                    top: "70%",
                    height: height / 5,
                    width: width * 2,
                    left: -70,
                    right: 0,
                    transform: [{
                        rotate: "22deg",
                        
                    }]
                }}></View>

        </View>
    )

}

export default SplashScreen
